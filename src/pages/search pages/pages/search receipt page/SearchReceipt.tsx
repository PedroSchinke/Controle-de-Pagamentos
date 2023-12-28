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
import { SelectClientOverlay } from './components/select client overlay/SelectClientOverlay'
import { BackButton } from '../../../../components/back button/BackButton'
import { formatValue } from '../../../../services/format-value-service'

export function SearchReceipt() {
  const {
    receipts,
    setReceipts,
    showNoResultsMessage,
    setShowNoResultsMessage,
    isClientSelectOverlayActive,
    setIsClientSelectOverlayActive,
    setClientIdForSearch,
    setClientName,
  } = useContext(ClientsContext)

  const showResults = receipts.length !== 0

  const receiptsSum = receipts.reduce(
    (acumulador, receipt) => acumulador + receipt.valor,
    0,
  )

  const formattedReceiptsSum = formatValue(receiptsSum)

  useEffect(() => {
    return () => {
      setClientIdForSearch(null)
      setClientName(null)
      setShowNoResultsMessage(false)
      setReceipts([])
      setIsClientSelectOverlayActive(false)
    }
  }, [setReceipts, setShowNoResultsMessage, setIsClientSelectOverlayActive])

  return (
    <SearchReceiptPageLayout>
      <SearchReceiptPageContainer>
        <BackButton />

        <h1 id="page_title">Buscar Pagamento</h1>

        <ReceiptFilter />
      </SearchReceiptPageContainer>
      {isClientSelectOverlayActive && <SelectClientOverlay />}
      {showNoResultsMessage ? (
        <NoResultsMesssage>
          Sua busca não retornou nenhum resultado
        </NoResultsMesssage>
      ) : null}
      {showResults && (
        <ResultsContainer>
          <h2 id="total_results_count">
            Pagamentos <p>{receipts.length}</p>
          </h2>
          <h2 id="total_revenue">
            Faturamento <p>{formattedReceiptsSum}</p>
          </h2>

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
