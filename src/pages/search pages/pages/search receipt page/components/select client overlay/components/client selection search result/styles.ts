import styled from 'styled-components'

export const ClientSearchResultContainer = styled.div`
  width: 100%;
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

export const ClientSearchResultInfos = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px 10px 10px;
  border: none;
  font-family: 'Roboto', sans-serif;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.base_text};
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    h2 {
      color: ${(props) => props.theme.blue_dark};
    }
  }

  .client_and_email {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
`
