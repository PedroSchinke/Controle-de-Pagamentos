import { Pencil, Trash } from 'phosphor-react'
import {
  ConfirmDeleteOptionButtons,
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
import { BackButton } from '../../../components/back button/BackButton'

export function DetailedReceipt() {
  const { id } = useParams()

  const [receipt, setReceipt] = useState<ReceiptProps | null>(null)

  const { receipts, setReceipts } = useContext(ClientsContext)

  const [message, setMessage] = useState<string | null>(null)

  const [isConfirmDeleteMessageActive, setIsConfirmDeleteMessageActive] =
    useState<boolean>(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get(`/pagamentos/${id}`)

        if (response.status === 200) {
          setReceipt(response.data)
        }
      } catch (error) {
        console.error(error)
        setMessage('Erro ao conectar com servidor. Tente mais tarde.')
      }
    }

    getData()
  }, [id])

  if (!receipt) {
    return <Loading />
  }

  const originalValue = receipt.valor
  const valueInReais = formatValue(originalValue)

  const originalDateString = receipt.dataPagamento.toString()
  const originalDate = parseISO(originalDateString)
  const formattedDate = format(originalDate, 'dd/MM/yyyy')

  const handleDeleteReceipt = async () => {
    try {
      setIsConfirmDeleteMessageActive(false)

      const response = await api.delete(`/pagamentos/${id}`)

      if (response.status === 200) {
        const stringId = id
        const numberId = parseInt(stringId!, 10)

        const receiptsWithoutDeletedOne = receipts.filter((receipt) => {
          return receipt.id !== numberId
        })

        setReceipts(receiptsWithoutDeletedOne)

        setMessage('Pagamento deletado com sucesso!')
      } else {
        setMessage('Não foi possível deletar pagamento')
      }
    } catch (error) {
      console.error(error)
      setMessage(
        'Não foi possível deletar o pagamento. Tente novamente mais tarde.',
      )
    }
  }

  const showOverlay = message !== null

  return (
    <>
      <DetailedReceiptLayout>
        <DetailedReceiptContainer>
          <BackButton />

          <h1 id="page_title">Detalhes do Pagamento</h1>

          <DetailedReceiptInfos>
            <div>
              <span>Cliente</span>
              <NavLink to={`/buscar/cliente/detalhes/${receipt.cliente.id}`}>
                <h2 id="name" title="Ver cliente">
                  {receipt.cliente.nome}
                </h2>
              </NavLink>
            </div>
            <div>
              <span>Valor</span>
              <h2>{valueInReais}</h2>
            </div>
            <div>
              <span>Data e horário</span>
              <h2>{formattedDate}</h2>
            </div>
            <div>
              <span>Meio de pagamento</span>
              <h2>{receipt.meioPagamento.descricao}</h2>
            </div>
            <div>
              <span>Atividade</span>
              <h2>{receipt.atividade.descricao}</h2>
            </div>
          </DetailedReceiptInfos>

          <ReceiptOptionButtons>
            <NavLink to={`/editar/pagamento/${id}`}>
              <UpdateReceiptButton>
                <Pencil size={26} weight="fill" />
                Editar
              </UpdateReceiptButton>
            </NavLink>
            <DeleteReceiptButton
              onClick={() => setIsConfirmDeleteMessageActive(true)}
            >
              <Trash size={26} />
              Excluir
            </DeleteReceiptButton>
          </ReceiptOptionButtons>
        </DetailedReceiptContainer>
      </DetailedReceiptLayout>
      {showOverlay && (
        <Overlay>
          <OverlayContent>
            <Message>{message}</Message>
            <NavLink to="/buscar/pagamento">
              <OverlayBackButton>Voltar</OverlayBackButton>
            </NavLink>
          </OverlayContent>
        </Overlay>
      )}
      {isConfirmDeleteMessageActive && (
        <Overlay>
          <OverlayContent>
            <Message>Tem certeza que deseja excluir esse pagamento?</Message>
            <ConfirmDeleteOptionButtons>
              <button
                className="option_button no_delete_button"
                onClick={() => setIsConfirmDeleteMessageActive(false)}
              >
                Não
              </button>
              <button
                className="option_button yes_delete_button"
                onClick={handleDeleteReceipt}
              >
                Sim
              </button>
            </ConfirmDeleteOptionButtons>
          </OverlayContent>
        </Overlay>
      )}
    </>
  )
}
