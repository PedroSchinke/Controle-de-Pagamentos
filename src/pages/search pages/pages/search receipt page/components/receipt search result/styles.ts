import styled from 'styled-components'

export const ReceiptSearchResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto', sans-serif;
`

export const DivisionCardLine = styled.div`
  width: 90%;
  height: 1px;
  background-color: ${(props) => props.theme.base_hover};
`

export const ReceiptSearchResultInfos = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  cursor: pointer;
  color: ${(props) => props.theme.base_text};

  &:hover {
    h2 {
      color: ${(props) => props.theme.blue_dark};
    }
  }

  .donator_and_date {
    display: flex;
    flex-direction: column;
  }

  .donation_value_and_arrow {
    display: flex;
    align-items: center;
    gap: 10px;

    .donation_value {
      font-size: 1.5rem;
      font-weight: bold;
      color: ${(props) => props.theme.blue_dark};
    }
  }
`
