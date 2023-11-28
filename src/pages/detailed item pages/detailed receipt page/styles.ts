import styled from 'styled-components'

export const DetailedReceiptLayout = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const DetailedReceiptContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 30px;
  padding: 40px 30px;
  font-family: 'Roboto', sans-serif;
  color: ${(props) => props.theme.base_text};
  background-color: ${(props) => props.theme.background};
  border-radius: 8px;
  box-shadow: 0px 0px 10px ${(props) => props.theme.base_hover};

  :last-child {
    justify-content: space-evenly;
  }

  a {
    width: 18%;
    color: inherit;
  }

  .back_button {
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.base_label};
    border: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  h1 {
    margin-top: -20px;
    font-size: 2rem;
    color: ${(props) => props.theme.base_subtitle};
  }
`

export const DetailedReceiptInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const ReceiptOptionButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`

const BaseOptionButtons = styled.button`
  display: flex;
  align-items: center;
  gap: 3px;
  border: none;
  background-color: ${(props) => props.theme.background};
  font-family: 'Roboto', sans-serif;
  font-size: 1.3rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export const UpdateReceiptButton = styled(BaseOptionButtons)`
  color: ${(props) => props.theme.blue_dark};
`

export const DeleteReceiptButton = styled(BaseOptionButtons)`
  color: ${(props) => props.theme.red};
`
