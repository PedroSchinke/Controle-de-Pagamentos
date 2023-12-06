import { useContext } from 'react'
import { Overlay, OverlayContent, ResultsContainer } from './styles'
import { ClientsContext } from '../../../../../../context/clientsContext'
import { SelectClientFilterForReceiptSearch } from './components/select client filter for receipt search/SelectClientFilterForReceiptSearch'
import { ClientSelectionSearchResult } from './components/client selection search result/ClientSelectionSearchResult'

export function SelectClientOverlay() {
  const { clientsForReceiptSearch } = useContext(ClientsContext)

  const showResults = clientsForReceiptSearch.length !== 0

  const clientsForReceiptSearchCount = clientsForReceiptSearch.length

  return (
    <Overlay>
      <OverlayContent>
        <SelectClientFilterForReceiptSearch />
        {showResults && (
          <ResultsContainer>
            <div className="results_count">
              <p>Total de resultados: {clientsForReceiptSearchCount}</p>
            </div>
            {clientsForReceiptSearch.map((client) => (
              <ClientSelectionSearchResult
                key={client.id}
                nome={client.nome}
                email={client.email}
              />
            ))}
          </ResultsContainer>
        )}
      </OverlayContent>
    </Overlay>
  )
}
