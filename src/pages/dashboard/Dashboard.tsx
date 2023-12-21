import {
  BottomCardOfRightSide,
  BottomPart,
  DashboardLayout,
  LeftCardOfBottomPart,
  RightSideOfBottomPart,
  TopCard,
  TopCardOfRightSide,
} from './styles'

export function Dashboard() {
  return (
    <DashboardLayout>
      <TopCard>
        <div className="total_revenue">
          <span className="total_revenue_title">Faturamento total</span>
          <span className="total_revenue_value">R$ 1.000,00</span>
        </div>
        <div className="revenue_by_activity_title">
          Por atividade
          <div className="revenue_by_activity_infos">
            <span id="activity_title">Limpeza de cumbuca</span>
            <span id="activity_value">R$ 150,00</span>
          </div>
          <div className="revenue_by_activity_infos">
            <span id="activity_title">Consulta</span>
            <span id="activity_value">R$ 350,00</span>
          </div>
          <div className="revenue_by_activity_infos">
            <span id="activity_title">Trabalhos</span>
            <span id="activity_value">R$ 250,00</span>
          </div>
        </div>
      </TopCard>

      <BottomPart>
        <LeftCardOfBottomPart>Pagantes este mês</LeftCardOfBottomPart>
        <RightSideOfBottomPart>
          <TopCardOfRightSide>
            <div className="top_card_of_right_side_infos">
              <span className="biggest_donation_title">Maior pagamento</span>
              <span className="biggest_donation_value">R$200,00</span>
              <span className="biggest_donation">Fulano da Silva</span>
            </div>
          </TopCardOfRightSide>
          <BottomCardOfRightSide>
            <div className="bottom_card_of_right_side_infos">
              <span className="last_donation_title">Último pagamento</span>
              <span className="last_donation_value">R$50,00</span>
              <span className="last_donation">Ciclano da Silva</span>
            </div>
          </BottomCardOfRightSide>
        </RightSideOfBottomPart>
      </BottomPart>
    </DashboardLayout>
  )
}
