import styled from 'styled-components'

export const DashboardLayout = styled.div`
  height: fit-content;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-family: 'Inter', sans-serif;
  color: ${(props) => props.theme.base_subtitle};
`

const BaseCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 10px;
  background-color: ${(props) => props.theme.background};
  border-radius: 8px;
  box-shadow: 0px 0px 10px ${(props) => props.theme.base_hover};

  &:hover {
    box-shadow: 0px 0px 10px ${(props) => props.theme.base_label};
  }
`

export const TotalRevenueCard = styled(BaseCard)`
  height: fit-content;
  padding: 20px;
  gap: 10px;

  .total_revenue {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;

    .total_revenue_title {
      font-size: 1.4rem;
      font-weight: bold;
    }

    #time_tag {
      margin: 10px 0 10px 0;
      font-size: 1.15rem;
      color: ${(props) => props.theme.base_text};
    }

    .total_revenue_value {
      font-size: 1.6rem;
      font-weight: bold;
      color: ${(props) => props.theme.blue_dark};
    }
  }

  #card_line_container {
    display: flex;
    justify-content: center;
  }

  .evolution_title {
    font-size: 1.3rem;
    font-weight: bold;
  }

  #evolution_time_tag {
    margin-bottom: 10px;
    font-size: 1.15rem;
    color: ${(props) => props.theme.base_text};
  }

  #chart_title {
    margin-top: 5px;
    font-size: 1.1rem;
  }

  #chart {
    margin: -10px 0 -20px -10px;
    height: fit-content;
  }
`

export const DivisionCardLine = styled.div`
  margin: 5px 0 5px 0;
  width: 95%;
  height: 1px;
  background-color: ${(props) => props.theme.base_hover};
`

export const RevenueByClientCard = styled(BaseCard)`
  width: 100%;
  height: fit-content;
  padding: 20px;
  gap: 15px;

  #card_title {
    font-size: 1.4rem;
    font-weight: bold;
  }

  #time_tag {
    margin: -5px 0 10px 0;
    font-size: 1.15rem;
    color: ${(props) => props.theme.base_text};
  }
`

export const RevenueByActivityCard = styled(BaseCard)`
  width: 100%;
  height: fit-content;
  padding: 20px;
  gap: 15px;

  #card_title {
    font-size: 1.4rem;
    font-weight: bold;
  }

  #time_tag {
    margin: -5px 0 10px 0;
    font-size: 1.15rem;
    color: ${(props) => props.theme.base_text};
  }
`
