import { ReceiptSearchResult } from './components/receipt search result/ReceiptSearchResult'
import { ReceiptFilter } from './components/receipt filter/ReceiptFilter'
import {
  ResultsContainer,
  SearchReceiptPageContainer,
  SearchReceiptPageLayout,
} from './styles'

export function SearchReceipt() {
  return (
    <SearchReceiptPageLayout>
      <SearchReceiptPageContainer>
        <h1>Consultar recebimento</h1>
        <ReceiptFilter />
      </SearchReceiptPageContainer>
      <ResultsContainer>
        <h1>Resultados</h1>
        <ReceiptSearchResult />
        <ReceiptSearchResult />
        <ReceiptSearchResult />
        <ReceiptSearchResult />
      </ResultsContainer>
    </SearchReceiptPageLayout>
  )
}
