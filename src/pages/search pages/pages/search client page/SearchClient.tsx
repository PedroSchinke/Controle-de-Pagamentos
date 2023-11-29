import { useContext } from 'react'
import { ClientFilter } from './components/client filter/ClientFilter'
import { ClientSearchResult } from './components/client search result/ClientSearchResult'
import {
  ResultsContainer,
  SearchClientPageContainer,
  SearchClientPageLayout,
} from './styles'
import { ClientsContext } from '../../../../context/clientsContext'

export function SearchClient() {
  const { clients } = useContext(ClientsContext)

  // useEffect(() => {
  //   loadClients()
  // })

  // async function loadClients() {
  //   const response = await api.get('/clientes')
  //   setClients(response.data)
  // }

  return (
    <SearchClientPageLayout>
      <SearchClientPageContainer>
        <h1>Consultar cliente</h1>
        <ClientFilter />
      </SearchClientPageContainer>
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
    </SearchClientPageLayout>
  )
}
