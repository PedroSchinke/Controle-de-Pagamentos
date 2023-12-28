import styled from 'styled-components'

export const SummaryByActivityResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: 'Inter', sans-serif;

  .revenue_by_activity_infos {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 400;

    #activity_title {
      font-size: 1.1rem;
    }

    #activity_value {
      font-size: 1.3rem;
      color: ${(props) => props.theme.blue_dark};
    }
  }
`
