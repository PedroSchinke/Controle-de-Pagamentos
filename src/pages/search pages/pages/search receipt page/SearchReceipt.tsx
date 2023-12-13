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
import { NavLink } from 'react-router-dom'
import { CaretLeft } from 'phosphor-react'

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
        <div id="back_button_container">
          <NavLink to="/buscar">
            <button id="back_button">
              <CaretLeft />
              Voltar
            </button>
          </NavLink>
        </div>
        <h1>Buscar Pagamento</h1>
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
