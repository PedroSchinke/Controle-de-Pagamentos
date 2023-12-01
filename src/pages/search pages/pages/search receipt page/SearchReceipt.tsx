import { ReceiptSearchResult } from './components/receipt search result/ReceiptSearchResult'
import { ReceiptFilter } from './components/receipt filter/ReceiptFilter'
import {
  ResultsContainer,
  SearchReceiptPageContainer,
  SearchReceiptPageLayout,
} from './styles'
import { ClientsContext } from '../../../../context/clientsContext'
import { useContext } from 'react'

export function SearchReceipt() {
  const { receipts } = useContext(ClientsContext)

  return (
    <SearchReceiptPageLayout>
      <SearchReceiptPageContainer>
        <h1>Buscar Pagamento</h1>
        <ReceiptFilter />
      </SearchReceiptPageContainer>
      <ResultsContainer>
        <h1>Resultados</h1>
        {receipts.map((receipt) => {
          return (
            <ReceiptSearchResult
              key={receipt.id}
              id={receipt.id}
              nome={receipt.cliente.nome}
              valor={receipt.valor}
              dataPagamento={receipt.dataPagamento}
            />
          )
        })}
      </ResultsContainer>
    </SearchReceiptPageLayout>
  )
}
