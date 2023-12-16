import { Trash } from 'phosphor-react'
import {
  DivisionCardLine,
  ActivitiesSearchResultContainer,
  ActivitiesSearchResultInfos,
} from './styles'
import { ActivitiesProps } from '../../../../../../context/clientsContext'

export function ActivitiesSearchResult({ descricao }: ActivitiesProps) {
  const handleDeleteActivity = () => {}

  return (
    <ActivitiesSearchResultContainer>
      <DivisionCardLine />
      <ActivitiesSearchResultInfos>
        <div id="activity">
          <h2>{descricao}</h2>
        </div>
        <button id="delete_button" onClick={handleDeleteActivity}>
          <Trash size={26} weight="fill" />
        </button>
      </ActivitiesSearchResultInfos>
    </ActivitiesSearchResultContainer>
  )
}
