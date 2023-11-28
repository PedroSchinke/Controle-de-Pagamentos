import {
  DivisionCardLine,
  ReceiptSearchResultContainer,
  ReceiptSearchResultInfos,
} from './styles'

export function ReceiptSearchResult() {
  return (
    <ReceiptSearchResultContainer>
      <DivisionCardLine />
      <ReceiptSearchResultInfos>
        <div className="donator_and_date">
          <h2>Fulano de Sousa</h2>
          <span>25/11/2023</span>
        </div>
        <span className="donation_value">R$30,00</span>
      </ReceiptSearchResultInfos>
    </ReceiptSearchResultContainer>
  )
}
