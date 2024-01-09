import { useContext, useEffect } from 'react'
import {
  NoResultsMesssage,
  Overlay,
  OverlayContent,
  ResultsContainer,
} from './styles'
import { Context } from '../../../../../../context/Context'
import { SelectClientFilterForReceiptSearch } from './components/select client filter for receipt search/SelectClientFilterRecSearch'
import { ClientSelectionSearchResult } from './components/client selection search result/ClientSelectionSearchResult'

export function SelectClientOverlay() {
  const {
    clientsForReceiptSearch,
    setIsClientSelectOverlayActive,
    showNoResultsMessageInOverlay,
    setClientsForReceiptSearch,
  } = useContext(Context)

  useEffect(() => {
    setClientsForReceiptSearch([])
  }, [setClientsForReceiptSearch])

  const showResults = clientsForReceiptSearch.length !== 0

  const clientsForReceiptSearchCount = clientsForReceiptSearch.length

  return (
    <Overlay>
      <OverlayContent>
        <div
          id="close_button"
          onClick={() => setIsClientSelectOverlayActive(false)}
        >
          <p>FECHAR</p>
        </div>
        <SelectClientFilterForReceiptSearch />
        {showNoResultsMessageInOverlay ? (
          <NoResultsMesssage>
            Sua busca não retornou nenhum resultado
          </NoResultsMesssage>
        ) : null}
        {showResults && (
          <ResultsContainer>
            <div className="results_count">
              <p>Total de resultados: {clientsForReceiptSearchCount}</p>
            </div>
            {clientsForReceiptSearch.map((client) => (
              <ClientSelectionSearchResult
                key={client.id}
                id={client.id}
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
