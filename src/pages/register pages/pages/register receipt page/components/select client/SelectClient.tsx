import { useContext } from 'react'
import {
  NoResultsMesssage,
  ResultsContainer,
  SelectClientContent,
  SelectClientLayout,
} from './styles'
import { ClientsContext } from '../../../../../../context/clientsContext'
import { ClientSelectResult } from '../client select result/ClientSelectResult'
import { SelectClientFilter } from '../select client filter/SelectClientFilter'

export function SelectClient() {
  const { clients, showNoResultsMessage } = useContext(ClientsContext)

  const showResults = clients.length !== 0

  return (
    <SelectClientLayout>
      <SelectClientContent>
        <h1>Selecione o pagante</h1>
        <SelectClientFilter />
      </SelectClientContent>
      {showNoResultsMessage ? (
        <NoResultsMesssage>
          Sua busca não retornou nenhum resultado
        </NoResultsMesssage>
      ) : null}
      {showResults && (
        <ResultsContainer>
          <h2 className="total_results">
            Total de resultados: {clients.length}
          </h2>
          <div></div>
          {clients.map((client) => {
            return (
              <ClientSelectResult
                key={client.id}
                id={client.id}
                nome={client.nome}
                email={client.email}
              />
            )
          })}
        </ResultsContainer>
      )}
    </SelectClientLayout>
  )
}
