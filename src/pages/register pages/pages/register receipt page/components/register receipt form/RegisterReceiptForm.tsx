import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { InputErrorMessage, RegisterReceiptFormContainer } from './styles'
import { NumericFormat } from 'react-number-format'
import { useContext, useEffect, useState } from 'react'
import {
  ActivitiesProps,
  ClientsContext,
  PaymentOptionsProps,
  ReceiptFormDataProps,
} from '../../../../../../context/clientsContext'
import { api } from '../../../../../../services/api'

const registerReceiptSchema = z.object({
  cliente: z.object({
    id: z.number().min(1, 'É preciso inserir o cliente.'),
  }),
  dataPagamento: z.string().min(1, 'É preciso inserir a data.'),
  valor: z
    .number({ invalid_type_error: 'Esse campo aceita apenas números.' })
    .min(1, 'É preciso inserir o valor.'),
  meioPagamento: z.object({
    id: z
      .number({
        invalid_type_error: 'É preciso selecionar o meio de pagamento.',
      })
      .min(1, 'É preciso selecionar o meio de pagamento.'),
  }),
  atividade: z.object({
    id: z
      .number({
        invalid_type_error: 'É preciso selecionar a atividade.',
      })
      .min(1, 'É preciso selecionar a atividade.'),
  }),
})

const formDataSchema = z.object({
  cliente: z.string().trim().min(1, 'É preciso inserir o cliente.'),
  dataPagamento: z.string().min(1, 'É preciso inserir a data.'),
  meioPagamento: z.number({
    invalid_type_error: 'É preciso selecionar o meio de pagamento.',
  }),
  valor: z
    .string({
      invalid_type_error: 'É preciso inserir o valor.',
      required_error: 'É preciso inserir o valor.',
    })
    .min(3, 'É preciso inserir um valor.'),
  atividade: z.number({
    invalid_type_error: 'É preciso selecionar a atividade.',
  }),
})

export function RegisterReceiptForm() {
  const [paymentOptions, setPaymentOptions] = useState<PaymentOptionsProps[]>(
    [],
  )

  const [activitiesOptions, setActivitiesOptions] = useState<ActivitiesProps[]>(
    [],
  )

  const {
    handleSubmit,
    register,
    setValue,
    control,
    formState: { errors },
  } = useForm<ReceiptFormDataProps>({
    mode: 'all',
    criteriaMode: 'all',
    resolver: zodResolver(formDataSchema),
  })

  const {
    clientNameForRegister,
    isClientSelectOverlayActive,
    setIsClientSelectOverlayActive,
    clientIdForRegister,
    setRegisterReceiptMessage,
  } = useContext(ClientsContext)

  useEffect(() => {
    const getClientName = async () => {
      if (clientNameForRegister) {
        setValue('cliente', clientNameForRegister)
      }
    }

    const getPaymentOptions = async () => {
      const response = await api.get('/meio-pagamento')

      if (response.status === 200) {
        setPaymentOptions(response.data)
      }
    }

    const getActivitiesOptions = async () => {
      const response = await api.get('/atividades')

      if (response.status === 200) {
        setActivitiesOptions(response.data)
      }
    }

    getClientName()
    getPaymentOptions()
    getActivitiesOptions()
  }, [setValue, clientNameForRegister])

  const handleRegisterReceipt = async (data: ReceiptFormDataProps) => {
    try {
      const numberWithDot = data.valor.replace(',', '.')
      const numberValue = parseFloat(numberWithDot)

      formDataSchema.safeParse(data)

      const dataToSend = {
        cliente: {
          id: clientIdForRegister,
        },
        dataPagamento: data.dataPagamento,
        valor: numberValue,
        meioPagamento: {
          id: data.meioPagamento,
        },
        atividade: {
          id: data.atividade,
        },
      }

      registerReceiptSchema.safeParse(dataToSend)

      console.log(dataToSend)

      const response = await api.post('/pagamentos', dataToSend)

      if (response.status === 201) {
        console.log(response)
        setRegisterReceiptMessage('Pagamento registrado com sucesso!')
      }
    } catch (error) {
      console.error(error)
      setRegisterReceiptMessage(
        'Erro ao registrar pagamento. Tente mais tarde.',
      )
    }
  }

  return (
    <RegisterReceiptFormContainer
      id="register_receipt_form"
      onSubmit={handleSubmit(handleRegisterReceipt)}
    >
      <label className="nome_label">
        Cliente
        <input
          id="cliente"
          type="text"
          placeholder="Selecione o cliente..."
          onClick={() => setIsClientSelectOverlayActive(true)}
          {...register('cliente')}
          disabled={!!isClientSelectOverlayActive}
        />
        {errors.cliente && (
          <InputErrorMessage>{errors.cliente.message}</InputErrorMessage>
        )}
      </label>
      <label>
        Data do pagamento
        <input id="dataPagamento" type="date" {...register('dataPagamento')} />
        {errors.dataPagamento && (
          <InputErrorMessage>{errors.dataPagamento.message}</InputErrorMessage>
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
          <option id="select_option" value="selecionar">
            Selecionar
          </option>
          {paymentOptions.map((paymentOption) => (
            <option key={paymentOption.id} value={paymentOption.id}>
              {paymentOption.descricao}
            </option>
          ))}
        </select>
        {errors.meioPagamento && (
          <InputErrorMessage>{errors.meioPagamento.message}</InputErrorMessage>
        )}
      </label>
      <label>
        Atividade
        <select
          id="atividade"
          {...register('atividade', { valueAsNumber: true })}
        >
          <option id="select_option" value="selecionar">
            Selecionar
          </option>
          {activitiesOptions.map((activity) => (
            <option key={activity.id} value={activity.id}>
              {activity.descricao}
            </option>
          ))}
        </select>
        {errors.atividade && (
          <InputErrorMessage>{errors.atividade.message}</InputErrorMessage>
        )}
      </label>
    </RegisterReceiptFormContainer>
  )
}
