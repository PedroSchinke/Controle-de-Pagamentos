import {
  DivisionCardLine,
  ClientSearchResultContainer,
  ClientSearchResultInfos,
} from './styles'

export function ClientSearchResult() {
  return (
    <ClientSearchResultContainer>
      <DivisionCardLine />
      <ClientSearchResultInfos>
        <div className="client_and_email">
          <h2>Fulano de Sousa</h2>
          <span>fulano@email.com</span>
        </div>
      </ClientSearchResultInfos>
    </ClientSearchResultContainer>
  )
}
