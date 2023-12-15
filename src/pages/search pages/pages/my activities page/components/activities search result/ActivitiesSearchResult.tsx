import { Trash } from 'phosphor-react'
import {
  DivisionCardLine,
  ActivitiesSearchResultContainer,
  ActivitiesSearchResultInfos,
} from './styles'

export function ActivitiesSearchResult() {
  const handleDeleteActivity = () => {}

  return (
    <ActivitiesSearchResultContainer>
      <DivisionCardLine />
      <ActivitiesSearchResultInfos>
        <div id="activity">
          <h2>Atividade</h2>
        </div>
        <button id="delete_button" onClick={handleDeleteActivity}>
          <Trash size={26} weight="fill" />
        </button>
      </ActivitiesSearchResultInfos>
    </ActivitiesSearchResultContainer>
  )
}
