import { useContext, useEffect } from 'react'
import {
  NoResultsMesssage,
  Overlay,
  OverlayContent,
  ResultsContainer,
} from './styles'
import { SelectClientForEditFilter } from './components/select client for edit filter/SelectClientForEditFilter'
import { Context } from '../../../../context/Context'
import { ClientSearchForEditResult } from './components/client search for edit result/ClientSearchForEditResult'

export function SelectClientForEditOverlay() {
  const {
    clientsForReceiptSearch,
    showNoResultsMessageInOverlay,
    setClientsForReceiptSearch,
    setIsClientSelectForEditOverlayActive,
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
          onClick={() => setIsClientSelectForEditOverlayActive(false)}
        >
          <p>FECHAR</p>
        </div>
        <SelectClientForEditFilter />
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
              <ClientSearchForEditResult
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
