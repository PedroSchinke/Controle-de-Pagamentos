import * as z from 'zod'
import { useForm } from 'react-hook-form'
import {
  ConfirmRegisterButton,
  RegisterForm,
  RegisterPageContainer,
  RegisterPageLayout,
} from './styles'
import { api } from '../../../../services/api'

const RegisterClientSchema = z.object({
  nome: z.string(),
  email: z.string().email(),
  celular: z.number(),
})

type registerDataProps = z.infer<typeof RegisterClientSchema>

export function RegisterClient() {
  const { register, handleSubmit } = useForm<registerDataProps>()

  const handleRegisterClient = async (data: registerDataProps) => {
    try {
      RegisterClientSchema.parse(data)

      const response = await api.post('/clientes', data)

      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <RegisterPageLayout>
      <RegisterPageContainer>
        <h1>Cadastrar Cliente</h1>
        <RegisterForm
          id="register_form"
          onSubmit={handleSubmit(handleRegisterClient)}
        >
          <label>
            Nome
            <input id="nome" {...register('nome')} />
          </label>

          <label>
            Email
            <input type="email" id="email" {...register('email')} />
          </label>

          <label>
            Telefone
            <input
              type="tel"
              id="celular"
              {...register('celular', { valueAsNumber: true })}
            />
          </label>
        </RegisterForm>
        <ConfirmRegisterButton type="submit" form="register_form">
          Confirmar
        </ConfirmRegisterButton>
      </RegisterPageContainer>
    </RegisterPageLayout>
  )
}
