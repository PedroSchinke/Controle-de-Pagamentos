import { CaretRight } from 'phosphor-react'
import {
  DivisionCardLine,
  ReceiptSearchResultContainer,
  ReceiptSearchResultInfos,
} from './styles'
import { format, parseISO } from 'date-fns'
import { NavLink } from 'react-router-dom'

interface ReceiptSearchResultProps {
  id: number
  nome: string
  valor: number
  dataPagamento: string
}

export function ReceiptSearchResult({
  id,
  nome,
  valor,
  dataPagamento,
}: ReceiptSearchResultProps) {
  const valueInR$ = valor.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })

  const originalDateString = dataPagamento
  const originalDate = parseISO(originalDateString)
  const formattedDate = format(originalDate, 'dd/MM/yy')

  return (
    <NavLink to={`/consultar/recebimento/detalhes/${id}`}>
      <ReceiptSearchResultContainer>
        <DivisionCardLine />
        <ReceiptSearchResultInfos>
          <div className="donator_and_date">
            <h2>{nome}</h2>
            <span>{formattedDate}</span>
          </div>
          <div className="donation_value_and_arrow">
            <span className="donation_value">{valueInR$}</span>
            <CaretRight size={30} />
          </div>
        </ReceiptSearchResultInfos>
      </ReceiptSearchResultContainer>
    </NavLink>
  )
}
