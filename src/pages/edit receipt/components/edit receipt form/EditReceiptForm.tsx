import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useEffect, useState } from 'react'
import { EditReceiptFormContainer, InputErrorMessage } from './styles'
import {
  ClientsContext,
  PaymentOptionsProps,
  ReceiptFormDataProps,
} from '../../../../context/clientsContext'
import { Controller, useForm } from 'react-hook-form'
import { api } from '../../../../services/api'
import { useParams } from 'react-router-dom'
import { NumericFormat } from 'react-number-format'

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

export function EditReceiptForm() {
  const { id } = useParams()

  const [paymentOptions, setPaymentOptions] = useState<PaymentOptionsProps[]>(
    [],
  )

  const {
    isClientSelectForEditOverlayActive,
    setIsClientSelectForEditOverlayActive,
    clientIdForEdit,
    clientNameForEdit,
    setEditReceiptMessage,
  } = useContext(ClientsContext)

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

  const getPaymentOptionsAndReceiptData = async () => {
    try {
      const getPaymentOptionsResponse = await api.get('/meio-pagamento')

      if (getPaymentOptionsResponse.status === 200) {
        setPaymentOptions(getPaymentOptionsResponse.data)
      }

      const getReceiptDataResponse = await api.get(`/pagamentos/${id}`)

      if (getReceiptDataResponse.status === 200) {
        setValue('meioPagamento', getReceiptDataResponse.data.meioPagamento.id)
        setValue('dataPagamento', getReceiptDataResponse.data.dataPagamento)

        const stringValue = getReceiptDataResponse.data.valor.toString()
        setValue('valor', stringValue)

        if (clientNameForEdit) {
          setValue('cliente', clientNameForEdit)
        } else {
          setValue('cliente', getReceiptDataResponse.data.cliente.nome)
        }
      }
    } catch (error) {
      console.error(error)
      setEditReceiptMessage(
        'Não foi possível obter as informações do cliente. Tente mais tarde.',
      )
    }
  }

  useEffect(() => {
    getPaymentOptionsAndReceiptData()
  }, [id, setValue, clientIdForEdit, clientNameForEdit, setPaymentOptions])

  const handleEditReceipt = async (data: ReceiptFormDataProps) => {
    try {
      formDataSchema.safeParse(data)

      const getCurrentData = await api.get(`/pagamentos/${id}`)
      const currentData = getCurrentData.data

      const numberWithDot = data.valor.replace(',', '.')
      const numberValue = parseFloat(numberWithDot)

      if (
        currentData.cliente.id === clientIdForEdit &&
        currentData.dataPagamento === data.dataPagamento &&
        currentData.valor === numberValue &&
        currentData.meioPagamento.id === data.meioPagamento
      ) {
        setEditReceiptMessage(
          'É preciso alterar ao menos um dos campos para realizar a edição.',
        )
        return
      }

      const dataToSend = {
        cliente: {
          id: clientIdForEdit,
        },
        dataPagamento: data.dataPagamento,
        valor: numberValue,
        meioPagamento: {
          id: data.meioPagamento,
        },
      }

      editReceiptSchema.safeParse(dataToSend)
      console.log(dataToSend)

      const response = await api.put(`/pagamentos/${id}`, dataToSend)

      if (response.status === 200) {
        setEditReceiptMessage('Pagamento editado com sucesso!')
      }
    } catch (error) {
      console.error(error)
      setEditReceiptMessage('Erro ao editar pagamento. Tente mais tarde.')
    }
  }

  return (
    <EditReceiptFormContainer
      id="edit_receipt_form"
      onSubmit={handleSubmit(handleEditReceipt)}
    >
      <label className="nome_label">
        Nome do cliente
        <input
          id="cliente"
          type="text"
          onClick={() => setIsClientSelectForEditOverlayActive(true)}
          {...register('cliente')}
          disabled={!!isClientSelectForEditOverlayActive}
        />
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
          <option value="selecionar">Selecionar</option>
          {paymentOptions.map((paymentOption) => (
            <option key={paymentOption.id} value={paymentOption.id}>
              {paymentOption.descricao}
            </option>
          ))}
        </select>
      </label>
      {errors.meioPagamento && (
        <InputErrorMessage>{errors.meioPagamento.message}</InputErrorMessage>
      )}
    </EditReceiptFormContainer>
  )
}