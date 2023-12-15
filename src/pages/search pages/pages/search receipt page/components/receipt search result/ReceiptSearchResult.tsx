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
  dataPagamento: Date
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

  const dateToString = dataPagamento.toString()
  const parsedString = parseISO(dateToString)
  const formattedDate = format(parsedString, 'dd/MM/yy')

  return (
    <NavLink to={`/buscar/pagamento/detalhes/${id}`}>
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
