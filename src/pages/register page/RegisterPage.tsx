import {
  ConfirmRegisterButton,
  RegisterForm,
  RegisterPageContainer,
  RegisterPageLayout,
} from './styles'

export function RegisterPage() {
  return (
    <RegisterPageLayout>
      <RegisterPageContainer>
        <h1>Cadastrar recebimento</h1>
        <RegisterForm id="register_form">
          <label>
            Nome do doador
            <input />
          </label>

          <label>
            Data
            <input type="date" />
          </label>

          <label>
            Valor
            <input type="number" />
          </label>

          <label>
            Tipo do recebimento
            <input />
          </label>

          <label>
            Descrição
            <textarea />
          </label>
        </RegisterForm>
        <ConfirmRegisterButton type="submit" form="register_form">
          Confirmar
        </ConfirmRegisterButton>
      </RegisterPageContainer>
    </RegisterPageLayout>
  )
}
