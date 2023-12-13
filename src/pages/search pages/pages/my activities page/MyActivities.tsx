import { NavLink } from 'react-router-dom'
import {
  ActivitiesResultsContainer,
  FilterButton,
  MyActivitiesContainer,
  MyActivitiesFilter,
  MyActivitiesLayout,
} from './styles'
import { CaretLeft, MagnifyingGlass } from 'phosphor-react'
import { ActivitiesSearchResult } from './components/activities search result/ActivitiesSearchResult'

export function MyActivities() {
  return (
    <MyActivitiesLayout>
      <MyActivitiesContainer>
        <div id="back_button_container">
          <NavLink to="/buscar">
            <button id="back_button">
              <CaretLeft />
              Voltar
            </button>
          </NavLink>
        </div>
        <h1>Minhas Atividades</h1>
        <MyActivitiesFilter id="my_activities_filter">
          <label>
            <input type="text" id="nome" placeholder="Pesquisar atividade..." />
            <FilterButton type="submit" form="my_activities_filter">
              <MagnifyingGlass weight="bold" size={20} />
            </FilterButton>
          </label>
        </MyActivitiesFilter>
      </MyActivitiesContainer>
      <ActivitiesResultsContainer>
        <p>Total de resultados: 0</p>
        <ActivitiesSearchResult />
        <ActivitiesSearchResult />
        <ActivitiesSearchResult />
        <ActivitiesSearchResult />
        <ActivitiesSearchResult />
      </ActivitiesResultsContainer>
    </MyActivitiesLayout>
  )
}
