import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { NavLink, useParams } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import {
  AlterClientButton,
  ConfirmEditReceiptButton,
  InputErrorMessage,
  Message,
  Overlay,
  OverlayBackButton,
  OverlayContent,
  EditReceiptContainer,
  EditReceiptForm,
  EditReceiptLayout,
} from './styles'
import { NumericFormat } from 'react-number-format'
import { CaretLeft } from 'phosphor-react'
import { api } from '../../services/api'

const editReceiptSchema = z.object({
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
    .min(1, 'É preciso inserir um valor.'),
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

export function EditReceipt() {
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
    const getReceiptData = async () => {
      const response = await api.get(`/pagamentos/${id}`)

      if (response.status === 200) {
        setValue('cliente', response.data.cliente.nome)
        setValue('dataPagamento', response.data.dataPagamento)
        setValue('valor', response.data.valor)
        setValue('meioPagamento', response.data.tipoPagamento)
      }
    }

    const getPaymentOptions = async () => {
      const response = await api.get('/meio-pagamento')

      if (response.status === 200) {
        setPaymentOptions(response.data)
      }
    }

    getReceiptData()
    getPaymentOptions()
  }, [id, setValue])

  const handleEditReceipt = async (data: FormDataProps) => {
    try {
      formDataSchema.safeParse(data)

      const numberWithDot = data.valor.replace(',', '.')
      const numberValue = parseFloat(numberWithDot)

      const getClientId = await api.get(`/clientes/nome/${data.cliente}`)

      const clientNumberId = parseInt(getClientId.data[0].id!, 10)
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

      editReceiptSchema.safeParse(dataToSend)

      const getDataToCompare = await api.get(`/pagamentos/${id}`)
      const currentData = getDataToCompare.data

      if (
        currentData.cliente.id === clientNumberId &&
        currentData.dataPagamento === data.dataPagamento &&
        currentData.valor === numberValue
      ) {
        setMessage(
          'É preciso alterar ao menos um dos campos para realizar a edição',
        )
        return
      }

      const response = await api.put(`/pagamentos/${id}`, dataToSend)

      if (response.status === 200) {
        setMessage('Pagamento editado com sucesso!')
      }
    } catch (error) {
      console.error(error)
      setMessage('Erro ao editar pagamento. Tente mais tarde.')
    }
  }

  const showOverlay = message !== null

  return (
    <>
      <EditReceiptLayout>
        <EditReceiptContainer>
          <div className="back_button_container">
            <NavLink to={`/consultar/recebimento/detalhes/${id}`}>
              <button className="back_button">
                <CaretLeft />
                Voltar
              </button>
            </NavLink>
          </div>
          <h1>Editar Pagamento</h1>
          <EditReceiptForm
            id="edit_receipt_form"
            onSubmit={handleSubmit(handleEditReceipt)}
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
                <NavLink to="/registrar/recebimento/selecionar-pagante">
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
          </EditReceiptForm>
          <ConfirmEditReceiptButton type="submit" form="edit_receipt_form">
            Editar
          </ConfirmEditReceiptButton>
        </EditReceiptContainer>
      </EditReceiptLayout>
      {showOverlay && (
        <Overlay>
          <OverlayContent>
            <Message>{message}</Message>
            <NavLink
              to={
                message === 'Pagamento editado com sucesso!'
                  ? `/consultar/recebimento/detalhes/${id}`
                  : `/editar/pagamento/${id}`
              }
            >
              <OverlayBackButton onClick={() => setMessage(null)}>
                Voltar
              </OverlayBackButton>
            </NavLink>
          </OverlayContent>
        </Overlay>
      )}
    </>
  )
}
