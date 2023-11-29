import { CaretLeft, Pencil, Trash } from 'phosphor-react'
import {
  DeleteClientButton,
  DetailedClientContainer,
  DetailedClientInfos,
  DetailedClientLayout,
  ClientOptionButtons,
  UpdateClientButton,
} from './styles'
import { NavLink, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../../services/api'
import { formatDate } from '../../../services/format-date-service'
import { ClientProps } from '../../../context/clientsContext'

export function DetailedClient() {
  const { id } = useParams()

  const [client, setClient] = useState<ClientProps | null>(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get(`/clientes/${id}`)

        setClient(response.data)
      } catch (error) {
        console.error('Erro ao obter detalhes do cliente:', error)
      }
    }

    getData()
  }, [id])

  if (!client) {
    return <p>Carregando...</p>
  }

  const originalDates = [client.dataCadastro, client.dataAtualizacao]
  const formattedDates = formatDate(originalDates)

  const dataCadastro = formattedDates[0]
  const dataAtualizacao = formattedDates[1]

  const handleDeleteClient = async () => {
    try {
      const response = await api.delete(`/clientes/${id}`)

      if (response.status === 200) {
        console.log('Cliente deletado com sucesso!')
      } else {
        console.error('Erro ao deletar cliente. Status:', response.status)
      }
    } catch (error) {
      console.error('Não foi possível deletar cliente:', error)
    }
  }

  return (
    <DetailedClientLayout>
      <DetailedClientContainer>
        <NavLink to="/consultar/cliente">
          <button className="back_button">
            <CaretLeft />
            Voltar
          </button>
        </NavLink>
        <h1>Detalhes do cliente</h1>
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
          <UpdateClientButton>
            <Pencil />
            editar
          </UpdateClientButton>
          <DeleteClientButton onClick={handleDeleteClient}>
            <Trash />
            excluir
          </DeleteClientButton>
        </ClientOptionButtons>
      </DetailedClientContainer>
    </DetailedClientLayout>
  )
}
