import styled from 'styled-components'

export const SearchResultItemContainer = styled.div`
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

export const SearchResultItemInfos = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;

  .donator_and_date {
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme.base_text};
  }

  .donation_value {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme.blue_dark};
  }
`
