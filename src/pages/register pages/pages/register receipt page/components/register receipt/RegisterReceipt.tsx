import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { NavLink, useParams } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { api } from '../../../../../../services/api'
import {
  AlterClientButton,
  ConfirmRegisterReceiptButton,
  InputErrorMessage,
  Message,
  Overlay,
  OverlayBackButton,
  OverlayContent,
  RegisterReceiptContainer,
  RegisterReceiptForm,
  RegisterReceiptLayout,
} from './styles'
import { NumericFormat } from 'react-number-format'
import { CaretLeft } from 'phosphor-react'

const registerReceiptSchema = z.object({
  cliente: z.object({
    id: z.number(),
  }),
  dataPagamento: z.string().min(1, 'É preciso inserir uma data.'),
  valor: z
    .number({ invalid_type_error: 'Esse campo aceita apenas números.' })
    .min(1, 'É preciso inserir um valor.'),
  meioPagamento: z.object({
    id: z
      .number({
        invalid_type_error: 'É preciso selecionar o meio de pagamento.',
      })
      .min(1, 'É preciso selecionar o meio de pagamento.'),
  }),
})

const formDataSchema = z.object({
  cliente: z.string(),
  dataPagamento: z.string().min(1, 'É preciso inserir uma data.'),
  meioPagamento: z.number({
    invalid_type_error: 'É preciso selecionar o meio de pagamento.',
  }),
  valor: z
    .string({
      invalid_type_error: 'É preciso inserir um valor.',
      required_error: 'É preciso inserir um valor.',
    })
    .min(3, 'É preciso inserir um valor.'),
})

interface FormDataProps {
  cliente: string
  dataPagamento: string
  meioPagamento: string
  valor: string
}

interface PaymentOptionsProps {
  id: number
  descricao: string
}

export function RegisterReceipt() {
  const { id } = useParams()

  const {
    handleSubmit,
    register,
    setValue,
    control,
    formState: { errors },
  } = useForm<FormDataProps>({
    mode: 'all',
    criteriaMode: 'all',
    resolver: zodResolver(formDataSchema),
  })

  const [paymentOptions, setPaymentOptions] = useState<PaymentOptionsProps[]>(
    [],
  )

  const [message, setMessage] = useState<string | null>(null)

  useEffect(() => {
    const getClientName = async () => {
      const response = await api.get(`/clientes/${id}`)

      if (response.status === 200) {
        setValue('cliente', response.data.nome)
      }
    }

    const getPaymentOptions = async () => {
      const response = await api.get('/meio-pagamento')

      if (response.status === 200) {
        setPaymentOptions(response.data)
      }
    }

    getClientName()
    getPaymentOptions()
  }, [id, setValue])

  const handleRegisterReceipt = async (data: FormDataProps) => {
    try {
      const numberWithDot = data.valor.replace(',', '.')
      const numberValue = parseInt(numberWithDot, 10)

      formDataSchema.safeParse(data)

      const clientNumberId = parseInt(id!, 10)
      const paymentOptionNumberId = parseInt(data.meioPagamento, 10)

      const dataToSend = {
        cliente: {
          id: clientNumberId,
        },
        dataPagamento: data.dataPagamento,
        valor: numberValue,
        meioPagamento: {
          id: paymentOptionNumberId,
        },
      }

      registerReceiptSchema.safeParse(dataToSend)

      const response = await api.post('/pagamentos', dataToSend)

      if (response.status === 201) {
        console.log(response)
        setMessage('Pagamento registrado com sucesso!')
      }
    } catch (error) {
      console.log(error)
      setMessage('Erro ao cadastrar pagamento. Tente mais tarde.')
    }
  }

  const showOverlay = message !== null

  return (
    <>
      <RegisterReceiptLayout>
        <RegisterReceiptContainer>
          <div className="back_button_container">
            <NavLink to={'/cadastrar'}>
              <button className="back_button">
                <CaretLeft />
                Voltar
              </button>
            </NavLink>
          </div>
          <h1>Cadastrar Pagamento</h1>
          <RegisterReceiptForm
            id="register_receipt_form"
            onSubmit={handleSubmit(handleRegisterReceipt)}
          >
            <label className="nome_label">
              Nome do pagante
              <input
                id="cliente"
                type="text"
                {...register('cliente')}
                disabled
              />
              <div className="alter_client_button_container">
                <NavLink to="/cadastrar/recebimento/selecionar-pagante">
                  <AlterClientButton>alterar pagante</AlterClientButton>
                </NavLink>
              </div>
            </label>
            <label>
              Data do pagamento
              <input
                id="dataPagamento"
                type="date"
                {...register('dataPagamento')}
              />
              {errors.dataPagamento && (
                <InputErrorMessage>
                  {errors.dataPagamento.message}
                </InputErrorMessage>
              )}
            </label>
            <label className="valor_label">
              Valor
              <div className="prefix_and_input">
                <div className="prefix">R$</div>
                <Controller
                  name="valor"
                  control={control}
                  render={({ field: { ref, ...rest } }) => (
                    <NumericFormat
                      className="valor_input"
                      thousandSeparator="."
                      decimalSeparator=","
                      fixedDecimalScale
                      decimalScale={2}
                      getInputRef={ref}
                      {...rest}
                    />
                  )}
                />
              </div>
              {errors.valor && (
                <InputErrorMessage>{errors.valor.message}</InputErrorMessage>
              )}
            </label>
            <label>
              Meio de pagamento
              <select
                id="meioPagamento"
                {...register('meioPagamento', { valueAsNumber: true })}
              >
                <option value="selecionar">Selecionar</option>
                {paymentOptions.map((paymentOption) => (
                  <option key={paymentOption.id} value={paymentOption.id}>
                    {paymentOption.descricao}
                  </option>
                ))}
              </select>
            </label>
            {errors.meioPagamento && (
              <InputErrorMessage>
                {errors.meioPagamento.message}
              </InputErrorMessage>
            )}
          </RegisterReceiptForm>
          <ConfirmRegisterReceiptButton
            type="submit"
            form="register_receipt_form"
          >
            Cadastrar
          </ConfirmRegisterReceiptButton>
        </RegisterReceiptContainer>
      </RegisterReceiptLayout>
      {showOverlay && (
        <Overlay>
          <OverlayContent>
            <Message>{message}</Message>
            <NavLink to="/cadastrar">
              <OverlayBackButton>Voltar</OverlayBackButton>
            </NavLink>
          </OverlayContent>
        </Overlay>
      )}
    </>
  )
}
