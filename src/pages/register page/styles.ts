import styled from 'styled-components'

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
  padding: 10px;
  padding-bottom: 30px;
  background-color: ${(props) => props.theme.base_card};
  border: solid 1px ${(props) => props.theme.base_text};
  border-radius: 8px;

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

export const ConfirmRegisterButton = styled.button`
  width: 40%;
  height: 2.5rem;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.theme.blue_dark};
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  color: ${(props) => props.theme.blue_light};
`
