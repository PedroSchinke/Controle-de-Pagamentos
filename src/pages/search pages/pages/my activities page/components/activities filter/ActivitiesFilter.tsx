import { MagnifyingGlass } from 'phosphor-react'
import { FilterButton, MyActivitiesFilter } from './styles'

export function ActivitiesFilter() {
  return (
    <MyActivitiesFilter>
      <label id="search_bar">
        <input type="text" id="nome" placeholder="Pesquisar atividade..." />

        <FilterButton type="submit" form="my_activities_filter" title="Buscar">
          <MagnifyingGlass weight="bold" size={20} />
        </FilterButton>
      </label>
    </MyActivitiesFilter>
  )
}
