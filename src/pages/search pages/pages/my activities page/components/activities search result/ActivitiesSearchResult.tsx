import { Trash } from 'phosphor-react'
import {
  DivisionCardLine,
  ActivitiesSearchResultContainer,
  ActivitiesSearchResultInfos,
  Overlay,
  OverlayContent,
  Message,
  ConfirmDeleteOptionButtons,
  OverlayBackButton,
} from './styles'
import { ActivitiesProps } from '../../../../../../context/clientsContext'
import { useState } from 'react'
import { api } from '../../../../../../services/api'
import { NavLink } from 'react-router-dom'

export function ActivitiesSearchResult({ id, descricao }: ActivitiesProps) {
  const [isConfirmDeleteMessageActive, setIsConfirmDeleteMessageActive] =
    useState<boolean>(false)

  const [message, setMessage] = useState<string | null>(null)

  const handleDeleteActivity = async () => {
    try {
      const response = await api.delete(`/atividades/${id}`)

      if (response.status === 200) {
        setMessage(`${descricao} foi excluído com sucesso!`)
      }
    } catch (error) {
      console.error(error)
      setMessage(
        `Não foi possível excluir ${descricao}. Tente novamente mais tarde.`,
      )
    }
  }

  const showOverlay = message !== null

  return (
    <>
      <ActivitiesSearchResultContainer>
        <DivisionCardLine />
        <ActivitiesSearchResultInfos>
          <div id="activity">
            <h2>{descricao}</h2>
          </div>
          <button
            id="delete_button"
            onClick={() => setIsConfirmDeleteMessageActive(true)}
          >
            <Trash size={26} weight="fill" />
          </button>
        </ActivitiesSearchResultInfos>
      </ActivitiesSearchResultContainer>
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
            <Message>{`Tem certeza que deseja excluir ${descricao}?`}</Message>
            <ConfirmDeleteOptionButtons>
              <button
                className="option_button no_delete_button"
                onClick={() => setIsConfirmDeleteMessageActive(false)}
              >
                Não
              </button>
              <button
                className="option_button yes_delete_button"
                onClick={handleDeleteActivity}
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
