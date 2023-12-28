import { formatValue } from '../../../../services/format-value-service'
import { atividadeValorListProps } from '../../Dashboard'
import { SummaryByActivityResultContainer } from './styles'

export function SummaryByActivityResult({
  atividade,
  valor,
}: atividadeValorListProps) {
  const valueInReais = formatValue(valor)

  return (
    <SummaryByActivityResultContainer>
      <div className="revenue_by_activity_infos">
        <span id="activity_title">{atividade}</span>
        <span id="activity_value">{valueInReais}</span>
      </div>
    </SummaryByActivityResultContainer>
  )
}
