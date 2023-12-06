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
  nome: string
  email: string
}

export function ClientSelectionSearchResult({
  nome,
  email,
}: ClientSearchResultProps) {
  const { setIsClientSelectOverlayActive } = useContext(ClientsContext)

  function handleSetNameValue(nome: string) {
    console.log(nome)
    setIsClientSelectOverlayActive(false)
  }

  return (
    <NavLink to={`/consultar/recebimento`}>
      <ClientSearchResultContainer onClick={() => handleSetNameValue}>
        <DivisionCardLine />
        <ClientSearchResultInfos>
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
