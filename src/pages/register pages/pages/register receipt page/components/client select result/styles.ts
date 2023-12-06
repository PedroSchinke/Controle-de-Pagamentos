import styled from 'styled-components'

export const ClientSelectResultContainer = styled.div`
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

export const ClientSelectResultInfos = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
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
  }
`
