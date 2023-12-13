import { CaretRight } from 'phosphor-react'
import {
  DivisionCardLine,
  ClientSearchResultContainer,
  ClientSearchResultInfos,
} from './styles'
import { useContext } from 'react'
import { ClientsContext } from '../../../../../../context/clientsContext'

interface ClientSearchResultProps {
  id: number
  nome: string
  email: string
}

export function ClientSearchForEditResult({
  id,
  nome,
  email,
}: ClientSearchResultProps) {
  const {
    setClientNameForEdit,
    setClientIdForEdit,
    setIsClientSelectForEditOverlayActive,
  } = useContext(ClientsContext)

  const setNameValue = () => {
    setClientIdForEdit(id)
    setClientNameForEdit(nome)
    setIsClientSelectForEditOverlayActive(false)
  }

  return (
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
  )
}
