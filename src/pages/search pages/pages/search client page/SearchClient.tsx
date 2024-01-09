import { useContext, useEffect } from 'react'
import { ClientFilter } from './components/client filter/ClientFilter'
import { ClientSearchResult } from './components/client search result/ClientSearchResult'
import {
  NoResultsMesssage,
  ResultsContainer,
  SearchClientPageContainer,
  SearchClientPageLayout,
} from './styles'
import { Context } from '../../../../context/Context'
import { BackButton } from '../../../../components/back button/BackButton'

export function SearchClient() {
  const { clients, setClients, showNoResultsMessage, setShowNoResultsMessage } =
    useContext(Context)

  const showResults = clients.length !== 0

  useEffect(() => {
    return () => {
      setShowNoResultsMessage(false)
      setClients([])
    }
  }, [setClients, setShowNoResultsMessage])

  return (
    <SearchClientPageLayout>
      <SearchClientPageContainer>
        <BackButton />

        <h1 id="page_title">Buscar Cliente</h1>

        <ClientFilter />
      </SearchClientPageContainer>
      {showNoResultsMessage ? (
        <NoResultsMesssage>
          Sua busca não retornou nenhum resultado
        </NoResultsMesssage>
      ) : null}
      {showResults && (
        <ResultsContainer>
          <h2 id="total_results">Total de resultados: {clients.length}</h2>
          <div></div>
          {clients.map((client) => {
            return (
              <ClientSearchResult
                key={client.id}
                id={client.id}
                nome={client.nome}
                email={client.email}
              />
            )
          })}
        </ResultsContainer>
      )}
    </SearchClientPageLayout>
  )
}
