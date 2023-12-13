import { CaretRight } from 'phosphor-react'
import {
  DivisionCardLine,
  ClientSearchResultContainer,
  ClientSearchResultInfos,
} from './styles'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ClientsContext } from '../../../../../../../../context/clientsContext'

interface ClientSearchResultProps {
  id: number
  nome: string
  email: string
}

export function ClientSelectionSearchResult({
  id,
  nome,
  email,
}: ClientSearchResultProps) {
  const {
    setIsClientSelectOverlayActive,
    setClientName,
    setClientIdForSearch,
  } = useContext(ClientsContext)

  const setNameValue = () => {
    setClientIdForSearch(id)
    setClientName(nome)
    setIsClientSelectOverlayActive(false)
  }

  return (
    <NavLink to={`/buscar/recebimento`}>
      <ClientSearchResultContainer>
        <DivisionCardLine />
        <ClientSearchResultInfos onClick={setNameValue}>
          <div className="client_and_email">
            <h2>{nome}</h2>
            <span>{email}</span>
          </div>
          <CaretRight size={30} />
        </ClientSearchResultInfos>
      </ClientSearchResultContainer>
    </NavLink>
  )
}
