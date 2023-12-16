import { CaretRight } from 'phosphor-react'
import {
  DivisionCardLine,
  ClientSearchResultContainer,
  ClientSearchResultInfos,
} from './styles'
import { NavLink } from 'react-router-dom'

interface ClientSearchResultProps {
  id: number
  nome: string
  email: string
}

export function ClientSearchResult({
  id,
  nome,
  email,
}: ClientSearchResultProps) {
  return (
    <NavLink to={`/buscar/cliente/detalhes/${id}`}>
      <ClientSearchResultContainer>
        <DivisionCardLine />
        <ClientSearchResultInfos>
          <div className="client_and_email">
            <h2 id="name">{nome}</h2>
            <span id="email">{email}</span>
          </div>
          <CaretRight size={30} />
        </ClientSearchResultInfos>
      </ClientSearchResultContainer>
    </NavLink>
  )
}
