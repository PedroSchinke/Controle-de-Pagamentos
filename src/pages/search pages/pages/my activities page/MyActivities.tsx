import {
  ActivitiesResultsContainer,
  MyActivitiesContainer,
  MyActivitiesLayout,
  NoResultsMesssage,
} from './styles'
import { ActivitiesSearchResult } from './components/activities search result/ActivitiesSearchResult'
import { BackButton } from '../../../../components/back button/BackButton'
import { ActivitiesFilter } from './components/activities filter/ActivitiesFilter'
import { useContext, useEffect } from 'react'
import { Context } from '../../../../context/Context'

export function MyActivities() {
  const {
    activities,
    setActivities,
    showNoResultsMessage,
    setShowNoResultsMessage,
  } = useContext(Context)

  const activitiesCount = activities.length

  const showResults = activities.length !== 0

  useEffect(() => {
    return () => {
      setActivities([])
      setShowNoResultsMessage(false)
    }
  }, [setActivities, setShowNoResultsMessage])

  return (
    <MyActivitiesLayout>
      <MyActivitiesContainer>
        <BackButton />

        <h1 id="page_title">Minhas Atividades</h1>

        <ActivitiesFilter />
      </MyActivitiesContainer>
      {showNoResultsMessage ? (
        <NoResultsMesssage>
          Sua busca não retornou nenhum resultado.
        </NoResultsMesssage>
      ) : null}
      {showResults && (
        <ActivitiesResultsContainer>
          <h2 id="total_results_count">
            <p>{activitiesCount}</p> atividades
          </h2>
          {activities.map((activity) => (
            <ActivitiesSearchResult
              key={activity.id}
              id={activity.id}
              descricao={activity.descricao}
            />
          ))}
        </ActivitiesResultsContainer>
      )}
    </MyActivitiesLayout>
  )
}
