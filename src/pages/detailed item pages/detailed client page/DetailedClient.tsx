import { Pencil, Trash } from 'phosphor-react'
import {
  DeleteClientButton,
  DetailedClientContainer,
  DetailedClientInfos,
  DetailedClientLayout,
  ClientOptionButtons,
  UpdateClientButton,
  Message,
  Overlay,
  OverlayContent,
  OverlayBackButton,
  ConfirmDeleteOptionButtons,
} from './styles'
import { NavLink, useParams } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import { api } from '../../../services/api'
import { formatDate } from '../../../services/format-date-service'
import { ClientProps, ClientsContext } from '../../../context/clientsContext'
import { Loading } from '../../../components/loading/Loading'
import { BackButton } from '../../../components/back button/BackButton'

export function DetailedClient() {
  const { id } = useParams()

  const [client, setClient] = useState<ClientProps | null>(null)

  const [message, setMessage] = useState<string | null>(null)

  const [isConfirmDeleteMessageActive, setIsConfirmDeleteMessageActive] =
    useState<boolean>(false)

  const [isLoading, setIsLoading] = useState<boolean>(true)

  const { clients, setClients } = useContext(ClientsContext)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get(`/clientes/${id}`)

        if (response.status === 200) {
          setClient(response.data)
        } else {
          setIsLoading(false)
          setMessage('Erro ao conectar com servidor. Tente mais tarde.')
        }
      } catch (error) {
        setIsLoading(false)
        setMessage('Erro ao conectar com servidor. Tente mais tarde.')
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    getData()
  }, [id])

  const handleDeleteClient = async () => {
    try {
      setIsConfirmDeleteMessageActive(false)

      const response = await api.delete(`/clientes/${id}`)

      if (response.status === 200) {
        const stringId = id
        const numberId = parseInt(stringId!, 10)

        const clientsWithoutDeletedOne = clients.filter((client) => {
          return client.id !== numberId
        })

        setClients(clientsWithoutDeletedOne)

        setMessage('Ciente deletado com sucesso!')
      } else {
        console.error('Erro ao deletar cliente. Status:', response.status)
        setMessage('Não foi possível deletar cliente')
      }
    } catch (error) {
      console.error(error)
      setMessage('Não foi possível deletar o cliente.')
    }
  }

  const showOverlay = message !== null

  if (isLoading) {
    return <Loading />
  }

  if (!client) {
    return <Loading />
  }

  const originalDates = [client.dataCadastro, client.dataAtualizacao]
  const formattedDates = formatDate(originalDates)

  const dataCadastro = formattedDates[0]
  const dataAtualizacao = formattedDates[1]

  return (
    <>
      <DetailedClientLayout>
        <DetailedClientContainer>
          <BackButton path={'/buscar/cliente'} />

          <h1 id="page_title">Detalhes do Cliente</h1>

          <DetailedClientInfos>
            <div>
              <span>Nome</span>
              <h2>{client.nome}</h2>
            </div>
            <div>
              <span>Email</span>
              <h2>{client.email}</h2>
            </div>
            <div>
              <span>Telefone</span>
              <h2>{client.celular}</h2>
            </div>
            <div>
              <span>Cadastrado em</span>
              <h2>{dataCadastro}</h2>
            </div>
            <div>
              <span>Editado em</span>
              <h2>{dataAtualizacao}</h2>
            </div>
          </DetailedClientInfos>

          <ClientOptionButtons>
            <NavLink to={`/editar/cliente/${id}`}>
              <UpdateClientButton>
                <Pencil size={26} weight="fill" />
                Editar
              </UpdateClientButton>
            </NavLink>
            <DeleteClientButton
              onClick={() => setIsConfirmDeleteMessageActive(true)}
            >
              <Trash size={26} />
              Excluir
            </DeleteClientButton>
          </ClientOptionButtons>
        </DetailedClientContainer>
      </DetailedClientLayout>
      {showOverlay && (
        <Overlay>
          <OverlayContent>
            <Message>{message}</Message>
            <NavLink to="/buscar/cliente">
              <OverlayBackButton>Voltar</OverlayBackButton>
            </NavLink>
          </OverlayContent>
        </Overlay>
      )}
      {isConfirmDeleteMessageActive && (
        <Overlay>
          <OverlayContent>
            <Message>{`Tem certeza que deseja excluir ${client.nome}?`}</Message>
            <ConfirmDeleteOptionButtons>
              <button
                className="option_button no_delete_button"
                onClick={() => setIsConfirmDeleteMessageActive(false)}
              >
                Não
              </button>
              <button
                className="option_button yes_delete_button"
                onClick={handleDeleteClient}
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
