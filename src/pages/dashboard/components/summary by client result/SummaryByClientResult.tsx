import { formatValue } from '../../../../services/format-value-service'
import { clienteValorListProps } from '../../Dashboard'
import { SummaryByClientResultContainer } from './styles'

export function SummaryByClientResult({
  cliente,
  valor,
}: clienteValorListProps) {
  const valueInReais = formatValue(valor)

  return (
    <SummaryByClientResultContainer>
      <div className="revenue_by_client_infos">
        <span id="client_title">{cliente}</span>
        <span id="client_value">{valueInReais}</span>
      </div>
    </SummaryByClientResultContainer>
  )
}
