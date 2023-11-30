import styled from 'styled-components'
import { BaseButton } from '../register client page/styles'

export const RegisterPageLayout = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const RegisterPageContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 40px 10px;
  background-color: ${(props) => props.theme.background};
  border-radius: 8px;
  box-shadow: 0px 0px 10px ${(props) => props.theme.base_hover};

  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    color: ${(props) => props.theme.base_subtitle};
  }
`

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-family: 'Roboto', sans-serif;
    font-size: 1.1rem;
    color: ${(props) => props.theme.base_text};
  }

  input {
    padding: 3px;
    border: none;
    background-color: ${(props) => props.theme.base_input};
    font-family: 'Roboto', sans-serif;
    font-size: 1.15rem;
    color: ${(props) => props.theme.base_label};
  }

  textarea {
    resize: none;
    padding: 3px;
    border: none;
    background-color: ${(props) => props.theme.base_input};
    font-family: 'Roboto', sans-serif;
    font-size: 1.15rem;
    color: ${(props) => props.theme.base_label};
  }
`

export const ConfirmRegisterButton = styled(BaseButton)``
