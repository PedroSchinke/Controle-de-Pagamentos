import { useForm } from 'react-hook-form'
import {
  DateLabel,
  FilterButton,
  FilterContainer,
  FilterForm,
  Message,
  NameLabel,
  Overlay,
  OverlayBackButton,
  OverlayContent,
} from './styles'
import * as z from 'zod'
import { ZodError } from 'zod'
import { api } from '../../../../../../services/api'
import { useContext, useEffect, useState } from 'react'
import { Context, ReceiptProps } from '../../../../../../context/Context'
import { XCircle } from 'phosphor-react'

const formDataSchema = z
  .object({
    nome: z.string(),
    dataIni: z.string(),
    dataFim: z.string(),
  })
  .refine(
    (data) => {
      return data.dataIni <= data.dataFim
    },
    {
      message: 'A data inicial não pode ser maior que a data final.',
      path: ['confirm'],
    },
  )

interface FormDataProps {
  nome: string
  dataIni: string
  dataFim: string
}

export function ReceiptFilter() {
  const { register, handleSubmit, setValue } = useForm<FormDataProps>()

  const [message, setMessage] = useState<string | null>(null)

  const {
    setReceipts,
    setShowNoResultsMessage,
    isClientSelectOverlayActive,
    setIsClientSelectOverlayActive,
    clientName,
    setClientName,
    clientIdForSearch,
    setClientIdForSearch,
  } = useContext(Context)

  useEffect(() => {
    const getSelectedClientName = () => {
      if (clientName) {
        setValue('nome', clientName)
      }
    }

    getSelectedClientName()
  }, [clientName, setValue])

  const handleRemoveClient = () => {
    setClientIdForSearch(null)
    setClientName(null)
    setValue('nome', '')
  }

  const handleFilter = async (data: FormDataProps) => {
    try {
      formDataSchema.parse(data)

      if (!data.nome && !data.dataFim && !data.dataIni) {
        setMessage('É preciso adicionar ao menos um filtro.')
        return
      }
    } catch (error) {
      if (error instanceof ZodError) {
        setMessage('A data inicial não pode ser maior que a data final.')
      }
    }

    try {
      if (clientIdForSearch) {
        try {
          const response = await api.get(
            `/pagamentos/cliente?clienteId=${clientIdForSearch}&dataIni=${data.dataIni}&dataFim=${data.dataFim}`,
          )

          if (response.data.length !== 0) {
            const arrayInOrder = response.data.sort(
              (a: ReceiptProps, b: ReceiptProps) => {
                const dateA = new Date(a.dataPagamento)
                const dateB = new Date(b.dataPagamento)
                return dateB.getTime() - dateA.getTime()
              },
            )

            setReceipts(arrayInOrder)
            setShowNoResultsMessage(false)
          } else {
            setReceipts([])
            setShowNoResultsMessage(true)
          }
        } catch (error) {
          console.error(error)
          setMessage(
            'Erro ao conectar com o servidor. Tente novamente mais tarde.',
          )
        }
      } else {
        try {
          const response = await api.get(
            `/pagamentos/cliente?&dataIni=${data.dataIni}&dataFim=${data.dataFim}`,
          )

          if (response.data.length !== 0) {
            const arrayInOrder = response.data.sort(
              (a: ReceiptProps, b: ReceiptProps) => {
                const dateA = new Date(a.dataPagamento)
                const dateB = new Date(b.dataPagamento)
                return dateB.getTime() - dateA.getTime()
              },
            )

            setReceipts(arrayInOrder)
            setShowNoResultsMessage(false)
          } else {
            setReceipts([])
            setShowNoResultsMessage(true)
          }
        } catch (error) {
          console.error(error)
          setMessage(
            'Erro ao conectar com o servidor. Tente novamente mais tarde.',
          )
        }
      }
    } catch (error) {
      console.error(error)
      setMessage('Erro ao conectar com o servidor. Tente novamente mais tarde.')
    }
  }

  const showMessageOverlay = message !== null

  return (
    <>
      <FilterContainer>
        <FilterForm id="filter_form" onSubmit={handleSubmit(handleFilter)}>
          <NameLabel>
            <label className="main_label name_label">
              <input
                type="text"
                id="nome"
                placeholder="Selecione o cliente..."
                onClick={() => setIsClientSelectOverlayActive(true)}
                {...register('nome')}
                disabled={!!isClientSelectOverlayActive}
              />
            </label>
            {clientName && (
              <div id="x_button" title="Remover cliente">
                <p onClick={handleRemoveClient}>
                  <XCircle size={20} />
                </p>
              </div>
            )}
          </NameLabel>
          <DateLabel>
            <div className="label_and_input_of_filter">
              <label>
                De:
                <input type="date" id="dataIni" {...register('dataIni')} />
              </label>
            </div>
            <div className="label_and_input_of_filter">
              <label>
                Até:
                <input type="date" id="dataFim" {...register('dataFim')} />
              </label>
            </div>
          </DateLabel>
          <FilterButton type="submit" form="filter_form">
            Buscar
          </FilterButton>
        </FilterForm>
      </FilterContainer>
      {showMessageOverlay && (
        <Overlay>
          <OverlayContent>
            <Message>{message}</Message>
            <OverlayBackButton onClick={() => setMessage(null)}>
              Voltar
            </OverlayBackButton>
          </OverlayContent>
        </Overlay>
      )}
    </>
  )
}
