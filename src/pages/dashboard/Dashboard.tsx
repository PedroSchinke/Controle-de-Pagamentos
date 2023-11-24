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
        <div className="top_card_infos">
          <span className="total_donation_title">Total de doações</span>
          <span className="total_donation_value">R$1.000,00</span>
        </div>
      </TopCard>
      <BottomPart>
        <LeftCardOfBottomPart>Doadores este mês</LeftCardOfBottomPart>
        <RightSideOfBottomPart>
          <TopCardOfRightSide>
            <div className="top_card_of_right_side_infos">
              <span className="biggest_donation_title">Maior doação</span>
              <span className="biggest_donation_value">R$200,00</span>
              <span className="biggest_donation">Fulano da Silva</span>
            </div>
          </TopCardOfRightSide>
          <BottomCardOfRightSide>
            <div className="bottom_card_of_right_side_infos">
              <span className="last_donation_title">Última doação</span>
              <span className="last_donation_value">R$50,00</span>
              <span className="last_donation">Ciclano da Silva</span>
            </div>
          </BottomCardOfRightSide>
        </RightSideOfBottomPart>
      </BottomPart>
    </DashboardLayout>
  )
}
