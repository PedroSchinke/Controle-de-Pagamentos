import { ReceiptSearchResult } from './components/receipt search result/ReceiptSearchResult'
import { ReceiptFilter } from './components/receipt filter/ReceiptFilter'
import {
  NoResultsMesssage,
  ResultsContainer,
  SearchReceiptPageContainer,
  SearchReceiptPageLayout,
} from './styles'
import { ClientsContext } from '../../../../context/clientsContext'
import { useContext, useEffect } from 'react'

export function SearchReceipt() {
  const {
    receipts,
    setReceipts,
    showNoResultsMessage,
    setShowNoResultsMessage,
  } = useContext(ClientsContext)

  const showResults = receipts.length !== 0

  useEffect(() => {
    return () => {
      setShowNoResultsMessage(false)
      setReceipts([])
    }
  }, [setReceipts, setShowNoResultsMessage])

  return (
    <SearchReceiptPageLayout>
      <SearchReceiptPageContainer>
        <h1>Buscar Pagamento</h1>
        <ReceiptFilter />
      </SearchReceiptPageContainer>
      {showNoResultsMessage ? (
        <NoResultsMesssage>
          Sua busca não retornou nenhum resultado
        </NoResultsMesssage>
      ) : null}
      {showResults && (
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
      )}
    </SearchReceiptPageLayout>
  )
}
