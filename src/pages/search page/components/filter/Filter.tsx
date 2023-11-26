import { FilterButton, FilterContainer, FilterForm } from './styles'

export function Filter() {
  return (
    <FilterContainer>
      <span>Filtrar por:</span>
      <FilterForm>
        <div className="filter">
          <label>Data</label>
          <div className="label_and_input_of_filter">
            <label>De</label>
            <input type="date" />
          </div>
          <div className="label_and_input_of_filter">
            <label>Até</label>
            <input type="date" />
          </div>
        </div>
        <div className="filter">
          <label>Nome</label>
          <input type="text" />
        </div>
        <FilterButton>Filtrar</FilterButton>
      </FilterForm>
    </FilterContainer>
  )
}
