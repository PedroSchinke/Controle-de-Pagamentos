import { CaretRight } from 'phosphor-react'
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
        <div className="donation_value_and_arrow">
          <span className="donation_value">R$30,00</span>
          <CaretRight size={30} />
        </div>
      </ReceiptSearchResultInfos>
    </ReceiptSearchResultContainer>
  )
}
