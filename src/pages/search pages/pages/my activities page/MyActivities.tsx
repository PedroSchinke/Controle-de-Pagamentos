import {
  ActivitiesResultsContainer,
  FilterButton,
  MyActivitiesContainer,
  MyActivitiesFilter,
  MyActivitiesLayout,
} from './styles'
import { MagnifyingGlass } from 'phosphor-react'
import { ActivitiesSearchResult } from './components/activities search result/ActivitiesSearchResult'
import { BackButton } from '../../../../components/back button/BackButton'

export function MyActivities() {
  return (
    <MyActivitiesLayout>
      <MyActivitiesContainer>
        <BackButton path={'/buscar'} />

        <h1 id="page_title">Minhas Atividades</h1>

        <MyActivitiesFilter>
          <label id="search_bar">
            <input type="text" id="nome" placeholder="Pesquisar atividade..." />

            <FilterButton
              type="submit"
              form="my_activities_filter"
              title="Buscar"
            >
              <MagnifyingGlass weight="bold" size={20} />
            </FilterButton>
          </label>
        </MyActivitiesFilter>
      </MyActivitiesContainer>
      <ActivitiesResultsContainer>
        <p id="total_results_count">Total de resultados: 0</p>
        <ActivitiesSearchResult />
        <ActivitiesSearchResult />
        <ActivitiesSearchResult />
        <ActivitiesSearchResult />
        <ActivitiesSearchResult />
      </ActivitiesResultsContainer>
    </MyActivitiesLayout>
  )
}
