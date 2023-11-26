import { SearchResultItem } from './components/search result item/SearchResultItem'
import { Filter } from './components/filter/Filter'
import {
  ResultsContainer,
  SearchPageContainer,
  SearchPageLayout,
} from './styles'

export function SearchPage() {
  return (
    <SearchPageLayout>
      <SearchPageContainer>
        <h1>Consultar recebimento</h1>
        <Filter />
      </SearchPageContainer>
      <ResultsContainer>
        <h1>Resultados</h1>
        <SearchResultItem />
        <SearchResultItem />
        <SearchResultItem />
        <SearchResultItem />
      </ResultsContainer>
    </SearchPageLayout>
  )
}
