import {
  DivisionCardLine,
  SearchResultItemContainer,
  SearchResultItemInfos,
} from './styles'

export function SearchResultItem() {
  return (
    <SearchResultItemContainer>
      <DivisionCardLine />
      <SearchResultItemInfos>
        <div className="donator_and_date">
          <h2>Fulano de Sousa</h2>
          <span>25/11/2023</span>
        </div>
        <span className="donation_value">R$30,00</span>
      </SearchResultItemInfos>
    </SearchResultItemContainer>
  )
}
