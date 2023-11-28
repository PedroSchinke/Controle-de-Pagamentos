import {
  ConfirmRegisterButton,
  RegisterForm,
  RegisterPageContainer,
  RegisterPageLayout,
} from './styles'

export function RegisterClient() {
  return (
    <RegisterPageLayout>
      <RegisterPageContainer>
        <h1>Cadastrar Cliente</h1>
        <RegisterForm id="register_form">
          <label>
            Nome
            <input />
          </label>

          <label>
            Email
            <input type="email" />
          </label>

          <label>
            Telefone
            <input type="tel" />
          </label>
        </RegisterForm>
        <ConfirmRegisterButton type="submit" form="register_form">
          Confirmar
        </ConfirmRegisterButton>
      </RegisterPageContainer>
    </RegisterPageLayout>
  )
}
