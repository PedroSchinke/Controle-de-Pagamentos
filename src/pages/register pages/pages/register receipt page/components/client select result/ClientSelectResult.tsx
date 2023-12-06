import { CaretRight } from 'phosphor-react'
import {
  DivisionCardLine,
  ClientSelectResultContainer,
  ClientSelectResultInfos,
} from './styles'
import { NavLink } from 'react-router-dom'

interface ClientSelectResultProps {
  id: number
  nome: string
  email: string
}

export function ClientSelectResult({
  id,
  nome,
  email,
}: ClientSelectResultProps) {
  return (
    <NavLink to={`/cadastrar/recebimento/selecionar-pagante/${id}`}>
      <ClientSelectResultContainer>
        <DivisionCardLine />
        <ClientSelectResultInfos>
          <div className="client_and_email">
            <h2>{nome}</h2>
            <span>{email}</span>
          </div>
          <CaretRight size={30} />
        </ClientSelectResultInfos>
      </ClientSelectResultContainer>
    </NavLink>
  )
}
