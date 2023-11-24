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
        <RegisterForm>
          <label>Data</label>
          <input type="date" />
          <label>Valor</label>
          <input type="number" />
          <label>Tipo do recebimento</label>
          <input />
          <label>Descrição</label>
          <textarea />
        </RegisterForm>
        <ConfirmRegisterButton>Confirmar</ConfirmRegisterButton>
      </RegisterPageContainer>
    </RegisterPageLayout>
  )
}
