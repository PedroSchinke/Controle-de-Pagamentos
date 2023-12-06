import styled from 'styled-components'
import { BaseButton } from '../../../register client page/styles'

export const RegisterReceiptLayout = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const RegisterReceiptContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 40px 10px;
  background-color: ${(props) => props.theme.background};
  border-radius: 8px;
  box-shadow: 0px 0px 10px ${(props) => props.theme.base_hover};

  .back_button_container {
    width: 85%;

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
  }

  h1 {
    margin-top: -20px;
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    color: ${(props) => props.theme.base_subtitle};
  }
`

export const RegisterReceiptForm = styled.form`
  max-width: 70%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .nome_label {
    input {
      cursor: not-allowed;
    }

    .alter_client_button_container {
      margin: 0 0 10px 0;
      width: 100%;
      display: flex;
      justify-content: center;

      a {
        max-width: 60%;
      }
    }
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-family: 'Roboto', sans-serif;
    font-size: 1.1rem;
    color: ${(props) => props.theme.base_text};
  }

  .valor_label {
    display: flex;
    flex-direction: column;

    .prefix_and_input {
      width: 100%;
      display: flex;

      .prefix {
        width: 15%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: right;
        padding-left: 8px;
        font-size: 1.3rem;
        background-color: ${(props) => props.theme.base_input};
        color: ${(props) => props.theme.base_label};
        border-bottom-left-radius: 8px;
        border-top-left-radius: 8px;
        z-index: 900;
      }

      .valor_input {
        max-width: 85%;
        padding: 8px 8px 8px 3px;
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
      }
    }
  }

  input {
    width: 100%;
    padding: 8px;
    border: none;
    border-radius: 8px;
    background-color: ${(props) => props.theme.base_input};
    font-family: 'Roboto', sans-serif;
    font-size: 1.3rem;
    color: ${(props) => props.theme.base_label};
  }

  select {
    padding: 8px;
    border: none;
    border-radius: 8px;
    background-color: ${(props) => props.theme.base_input};
    font-family: 'Roboto', sans-serif;
    font-size: 1.3rem;
    color: ${(props) => props.theme.base_label};

    option {
      font-size: 1.1rem;
    }
  }
`

export const AlterClientButton = styled.button`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  border: none;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.blue_dark};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export const InputErrorMessage = styled.p`
  font-size: 1.1rem;
  font-family: 'Roboto', sans-serif;
  color: ${(props) => props.theme.red};
`

export const ConfirmRegisterReceiptButton = styled(BaseButton)``

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`

export const OverlayContent = styled.div`
  width: 70%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: absolute;
  top: 48%;
  left: 50%;
  border-radius: 8px;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: #fff;
  z-index: 1000;

  a {
    width: 45%;
    height: 2.8rem;
  }
`

export const Message = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-family: 'Roboto', sans-serif;
  font-size: 1.3rem;
  font-weight: bold;
  color: ${(props) => props.theme.base_text};
  text-align: center;
`

export const OverlayBackButton = styled(BaseButton)`
  width: 100%;
  height: 100%;
`
