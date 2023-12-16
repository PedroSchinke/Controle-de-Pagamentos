import {
  ActivitiesResultsContainer,
  MyActivitiesContainer,
  MyActivitiesLayout,
} from './styles'
import { ActivitiesSearchResult } from './components/activities search result/ActivitiesSearchResult'
import { BackButton } from '../../../../components/back button/BackButton'
import { ActivitiesFilter } from './components/activities filter/ActivitiesFilter'
import { useContext, useEffect } from 'react'
import { api } from '../../../../services/api'
import { ClientsContext } from '../../../../context/clientsContext'

export function MyActivities() {
  const { activities, setActivities } = useContext(ClientsContext)

  const activitiesCount = activities.length

  useEffect(() => {
    const getActivities = async () => {
      try {
        const response = await api.get('/atividades')

        if (response.status === 200) {
          setActivities(response.data)
        }
      } catch (error) {
        console.error(error)
      }
    }

    getActivities()
  }, [activities, setActivities])

  return (
    <MyActivitiesLayout>
      <MyActivitiesContainer>
        <BackButton />

        <h1 id="page_title">Minhas Atividades</h1>

        <ActivitiesFilter />
      </MyActivitiesContainer>
      <ActivitiesResultsContainer>
        <p id="total_results_count">{`Total de resultados: ${activitiesCount}`}</p>
        {activities.map((activity) => (
          <ActivitiesSearchResult
            key={activity.id}
            id={activity.id}
            descricao={activity.descricao}
          />
        ))}
      </ActivitiesResultsContainer>
    </MyActivitiesLayout>
  )
}
