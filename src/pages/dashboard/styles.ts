import styled from 'styled-components'
import { BaseCardWithoutHover } from '../../styles/style-bases'

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

export const TotalRevenueCard = styled(BaseCardWithoutHover)`
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
      margin: 5px 0 5px 0;
      font-size: 1.15rem;
      color: ${(props) => props.theme.blue_dark};
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
    margin: -5px 0 10px 0;
    font-size: 1.15rem;
    color: ${(props) => props.theme.blue_dark};
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

export const ChooseTimePeriodBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-top: -10px;
`

interface StyledButtonProps {
  active: boolean
}

export const TimePeriodButton = styled.button<StyledButtonProps>`
  border: none;
  border-radius: 8px;
  background-color: ${(props) =>
    props.active
      ? (props) => props.theme.blue_light
      : (props) => props.theme.background};
  color: ${(props) => props.theme.blue_dark};
  font-family: 'Inter', sans-serif;
  font-weight: ${(props) => (props.active ? 'bold' : '100')};
  padding: 5px 7px;
  cursor: pointer;
`

export const RevenueByClientCard = styled(BaseCardWithoutHover)`
  width: 100%;
  height: fit-content;
  padding: 20px;
  gap: 15px;

  #card_title {
    font-size: 1.4rem;
    font-weight: bold;
  }

  #time_tag {
    margin: -10px 0 10px 0;
    font-size: 1.15rem;
    color: ${(props) => props.theme.blue_dark};
  }

  #revenue_by_client_results {
    height: fit-content;
    max-height: 200px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    overflow: auto;
  }
`

export const RevenueByActivityCard = styled(BaseCardWithoutHover)`
  width: 100%;
  height: fit-content;
  padding: 20px;
  gap: 15px;

  #card_title {
    font-size: 1.4rem;
    font-weight: bold;
  }

  #time_tag {
    margin: -10px 0 10px 0;
    font-size: 1.15rem;
    color: ${(props) => props.theme.blue_dark};
  }

  #revenue_by_activity_results {
    height: fit-content;
    max-height: 200px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    overflow: auto;
  }
`
