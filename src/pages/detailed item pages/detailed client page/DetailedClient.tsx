import { CaretLeft, Pencil, Trash } from 'phosphor-react'
import {
  DeleteClientButton,
  DetailedClientContainer,
  DetailedClientInfos,
  DetailedClientLayout,
  ClientOptionButtons,
  UpdateClientButton,
} from './styles'
import { NavLink } from 'react-router-dom'

export function DetailedClient() {
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
            <h2>Fulano da Silva</h2>
          </div>
          <div>
            <span>Email</span>
            <h2>email@email.com.br</h2>
          </div>
          <div>
            <span>Telefone</span>
            <h2>(51)983145592</h2>
          </div>
          <div>
            <span>Cadastrado em</span>
            <h2>25/11/2023 14:50</h2>
          </div>
          <div>
            <span>Editado em</span>
            <h2>25/11/2023 15:50</h2>
          </div>
        </DetailedClientInfos>
        <ClientOptionButtons>
          <UpdateClientButton>
            <Pencil />
            editar
          </UpdateClientButton>
          <DeleteClientButton>
            <Trash />
            excluir
          </DeleteClientButton>
        </ClientOptionButtons>
      </DetailedClientContainer>
    </DetailedClientLayout>
  )
}
