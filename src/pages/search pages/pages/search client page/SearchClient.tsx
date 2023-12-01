import { useContext, useEffect } from 'react'
import { ClientFilter } from './components/client filter/ClientFilter'
import { ClientSearchResult } from './components/client search result/ClientSearchResult'
import {
  ResultsContainer,
  SearchClientPageContainer,
  SearchClientPageLayout,
} from './styles'
import { ClientsContext } from '../../../../context/clientsContext'
import { api } from '../../../../services/api'

export function SearchClient() {
  const { clients, setClients } = useContext(ClientsContext)

  useEffect(() => {
    async function loadClients() {
      const response = await api.get('/clientes')
      setClients(response.data)
    }
    if (!clients) {
      loadClients()
    }
  }, [clients, setClients])

  const showResults = clients.length !== 0

  return (
    <SearchClientPageLayout>
      <SearchClientPageContainer>
        <h1>Buscar Cliente</h1>
        <ClientFilter />
      </SearchClientPageContainer>
      {showResults && (
        <ResultsContainer>
          <h1>Resultados</h1>
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
