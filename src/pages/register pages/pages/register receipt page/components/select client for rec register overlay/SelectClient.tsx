import { useContext } from 'react'
import {
  NoResultsMessage,
  Overlay,
  OverlayContent,
  ResultsContainer,
} from './styles'
import { Context } from '../../../../../../context/Context'
import { SelectClientFilter } from './components/select client filter/SelectClientFilter'
import { ClientSelectionForRegisterResult } from './components/client for register search result/SelectionResult'

export function SelectClientForRegister() {
  const {
    clients,
    setIsClientSelectOverlayActive,
    showNoResultsMessageInOverlay,
  } = useContext(Context)

  const showResults = clients.length !== 0

  const clientsForReceiptSearchCount = clients.length

  return (
    <Overlay>
      <OverlayContent>
        <div
          id="close_button"
          onClick={() => setIsClientSelectOverlayActive(false)}
        >
          <p>FECHAR</p>
        </div>
        <SelectClientFilter />
        {showNoResultsMessageInOverlay ? (
          <NoResultsMessage>
            Sua busca não retornou nenhum resultado
          </NoResultsMessage>
        ) : null}
        {showResults && (
          <ResultsContainer>
            <div className="results_count">
              <p>Total de resultados: {clientsForReceiptSearchCount}</p>
            </div>
            {clients.map((client) => (
              <ClientSelectionForRegisterResult
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
