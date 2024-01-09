import { CaretRight } from 'phosphor-react'
import {
  DivisionCardLine,
  ClientSearchResultContainer,
  ClientSearchResultInfos,
} from './styles'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../../../../../../../../context/Context'

interface ClientSearchResultProps {
  id: number
  nome: string
  email: string
}

export function ClientSelectionForRegisterResult({
  id,
  nome,
  email,
}: ClientSearchResultProps) {
  const {
    setIsClientSelectOverlayActive,
    setClientNameForRegister,
    setClientIdForRegister,
  } = useContext(Context)

  const setClient = () => {
    setClientIdForRegister(id)
    setClientNameForRegister(nome)
    setIsClientSelectOverlayActive(false)
  }

  return (
    <NavLink to={`/registrar/pagamento`}>
      <ClientSearchResultContainer>
        <DivisionCardLine />
        <ClientSearchResultInfos onClick={setClient}>
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
