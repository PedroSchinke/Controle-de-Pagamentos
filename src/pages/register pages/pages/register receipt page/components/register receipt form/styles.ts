import styled from 'styled-components'

export const RegisterReceiptFormContainer = styled.form`
  max-width: 70%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .nome_label {
    #cliente {
      cursor: pointer;

      &::placeholder {
        font-size: 1.1rem;
        font-style: italic;
      }
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

    #select_option {
      font-style: italic;
    }

    option {
      font-size: 1.1rem;
    }
  }
`

export const InputErrorMessage = styled.p`
  font-size: 1.1rem;
  font-family: 'Roboto', sans-serif;
  color: ${(props) => props.theme.red};
`
