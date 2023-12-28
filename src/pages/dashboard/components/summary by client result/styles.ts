import styled from 'styled-components'

export const SummaryByClientResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: 'Inter', sans-serif;

  .revenue_by_client_infos {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 400;
    gap: 10px;

    #client_title {
      font-size: 1.1rem;
    }

    #client_value {
      font-size: 1.3rem;
      color: ${(props) => props.theme.blue_dark};
    }
  }
`
