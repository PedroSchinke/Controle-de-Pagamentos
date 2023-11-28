import { ClientFilter } from './components/client filter/ClientFilter'
import { ClientSearchResult } from './components/client search result/ClientSearchResult'
import {
  ResultsContainer,
  SearchClientPageContainer,
  SearchClientPageLayout,
} from './styles'

export function SearchClient() {
  return (
    <SearchClientPageLayout>
      <SearchClientPageContainer>
        <h1>Consultar cliente</h1>
        <ClientFilter />
      </SearchClientPageContainer>
      <ResultsContainer>
        <h1>Resultados</h1>
        <ClientSearchResult />
        <ClientSearchResult />
        <ClientSearchResult />
        <ClientSearchResult />
      </ResultsContainer>
    </SearchClientPageLayout>
  )
}
