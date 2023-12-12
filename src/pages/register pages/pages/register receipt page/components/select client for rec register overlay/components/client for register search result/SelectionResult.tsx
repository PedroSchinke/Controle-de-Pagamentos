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

export function ClientSelectionForRegisterResult({
  nome,
  email,
}: ClientSearchResultProps) {
  const { setIsClientSelectOverlayActive, setClientNameForRegister } =
    useContext(ClientsContext)

  const setNameValue = () => {
    setClientNameForRegister(nome)
    setIsClientSelectOverlayActive(false)
  }

  return (
    <NavLink to={`/registrar/recebimento`}>
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
