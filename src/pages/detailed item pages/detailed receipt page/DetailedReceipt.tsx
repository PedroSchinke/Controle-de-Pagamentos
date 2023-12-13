import { CaretLeft, Pencil, Trash } from 'phosphor-react'
import {
  DeleteReceiptButton,
  DetailedReceiptContainer,
  DetailedReceiptInfos,
  DetailedReceiptLayout,
  Message,
  Overlay,
  OverlayBackButton,
  OverlayContent,
  ReceiptOptionButtons,
  UpdateReceiptButton,
} from './styles'
import { NavLink, useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { api } from '../../../services/api'
import { ClientsContext, ReceiptProps } from '../../../context/clientsContext'
import { Loading } from '../../../components/loading/Loading'
import { formatValue } from '../../../services/format-value-service'
import { format, parseISO } from 'date-fns'

export function DetailedReceipt() {
  const { id } = useParams()

  const [receipt, setReceipt] = useState<ReceiptProps | null>(null)

  const { receipts, setReceipts } = useContext(ClientsContext)

  const [message, setMessage] = useState<string | null>(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get(`/pagamentos/${id}`)

        if (response.status === 200) {
          setReceipt(response.data)
        }
      } catch (error) {
        console.error('Error:', error)

        setMessage('Erro ao conectar com servidor. Tente mais tarde.')
      }
    }

    getData()
  }, [id])

  if (!receipt) {
    return <Loading />
  }

  const originalValue = receipt.valor
  const valueInR$ = formatValue(originalValue)

  const originalDateString = receipt.dataPagamento
  const originalDate = parseISO(originalDateString)
  const formattedDate = format(originalDate, 'dd/MM/yyyy')

  const handleDeleteReceipt = async () => {
    try {
      const response = await api.delete(`/pagamentos/${id}`)

      if (response.status === 200) {
        console.log('Recebimento deletado com sucesso!')

        const stringId = id
        const numberId = parseInt(stringId!, 10)

        const receiptsWithoutDeletedOne = receipts.filter((receipt) => {
          return receipt.id !== numberId
        })

        setReceipts(receiptsWithoutDeletedOne)

        setMessage('Recebimento deletado com sucesso!')
      } else {
        console.error('Erro ao deletar recebimento. Status:', response.status)

        setMessage('Não foi possível deletar recebimento')
      }
    } catch (error) {
      console.error(error)

      setMessage('Não foi possível deletar o recebimento.')
    }
  }

  const showOverlay = message !== null

  return (
    <>
      <DetailedReceiptLayout>
        <DetailedReceiptContainer>
          <NavLink to="/buscar/recebimento">
            <button className="back_button">
              <CaretLeft />
              Voltar
            </button>
          </NavLink>
          <h1>Detalhes do Pagamento</h1>
          <DetailedReceiptInfos>
            <div>
              <span>Cliente</span>
              <h2>{receipt.cliente.nome}</h2>
            </div>
            <div>
              <span>Valor</span>
              <h2>{valueInR$}</h2>
            </div>
            <div>
              <span>Meio de pagamento</span>
              <h2>{receipt.tipoPagamento}</h2>
            </div>
            <div>
              <span>Data e horário</span>
              <h2>{formattedDate}</h2>
            </div>
          </DetailedReceiptInfos>
          <ReceiptOptionButtons>
            <NavLink to={`/editar/pagamento/${id}`}>
              <UpdateReceiptButton>
                <Pencil size={26} weight="fill" />
                editar
              </UpdateReceiptButton>
            </NavLink>
            <DeleteReceiptButton onClick={handleDeleteReceipt}>
              <Trash size={26} />
              excluir
            </DeleteReceiptButton>
          </ReceiptOptionButtons>
        </DetailedReceiptContainer>
      </DetailedReceiptLayout>
      {showOverlay && (
        <Overlay>
          <OverlayContent>
            <Message>{message}</Message>
            <NavLink to="/buscar/recebimento">
              <OverlayBackButton>Voltar</OverlayBackButton>
            </NavLink>
          </OverlayContent>
        </Overlay>
      )}
    </>
  )
}
