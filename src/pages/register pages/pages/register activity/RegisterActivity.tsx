import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  ConfirmRegisterButton,
  Message,
  Overlay,
  OverlayBackButton,
  OverlayContent,
  RegisterForm,
  RegisterFormError,
  RegisterActivityContainer,
  RegisterActivityLayout,
} from './styles'
import { api } from '../../../../services/api'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AxiosError } from 'axios'
import { CaretLeft } from 'phosphor-react'

const registerActivitySchema = z.object({
  nome: z.string().trim().min(1, 'É preciso preencher o nome do cliente.'),
  email: z
    .string()
    .trim()
    .min(1, 'É preciso preencher o email do cliente.')
    .email('Formato de email inválido.'),
  celular: z
    .string()
    .trim()
    .min(14, 'É preciso digitar um número de telefone válido.'),
})

type registerDataProps = z.infer<typeof registerActivitySchema>

export function RegisterActivity() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerDataProps>({
    mode: 'all',
    criteriaMode: 'all',
    resolver: zodResolver(registerActivitySchema),
  })

  const [message, setMessage] = useState<string | null>(null)

  const handleRegisterActivity = async (data: registerDataProps) => {
    try {
      registerActivitySchema.parse(data)

      const response = await api.post('/clientes', data)

      if (response.status === 201) {
        setMessage('Atividade registrada com sucesso!')
      } else {
        setMessage('Erro ao registrar atividade. Tente novamente mais tarde.')
      }
    } catch (error) {
      console.error(error)

      if (isAxiosError(error)) {
        const axiosError = error as AxiosError

        if (axiosError.response) {
          const responseData = axiosError.response.data as { detail?: string }

          if (responseData.detail) {
            setMessage(`Erro ao registrar atividade: ${responseData.detail}`)
          } else {
            setMessage('Erro ao registrar atividade. Detalhes indisponíveis.')
          }
        } else if (axiosError.request) {
          setMessage(
            'Erro de comunicação com o servidor. Tente novamente mais tarde.',
          )
        } else {
          setMessage('Ocorreu um erro inesperado. Tente novamente mais tarde.')
        }
      } else {
        setMessage('Ocorreu um erro inesperado. Tente novamente mais tarde.')
      }
    }
  }

  const isAxiosError = (error: any): error is AxiosError => {
    return error.isAxiosError !== undefined
  }

  const showOverlay = message !== null

  return (
    <>
      <RegisterActivityLayout>
        <RegisterActivityContainer>
          <div id="back_button_container">
            <NavLink to="/registrar">
              <button id="back_button">
                <CaretLeft />
                Voltar
              </button>
            </NavLink>
          </div>
          <h1>Registrar Atividade</h1>
          <RegisterForm
            id="register_client_form"
            onSubmit={handleSubmit(handleRegisterActivity)}
          >
            <label>
              Nome
              <input id="nome" {...register('nome')} />
              {errors.nome && (
                <RegisterFormError>{errors.nome.message}</RegisterFormError>
              )}
            </label>
          </RegisterForm>
          <ConfirmRegisterButton type="submit" form="register_client_form">
            Registrar
          </ConfirmRegisterButton>
        </RegisterActivityContainer>
      </RegisterActivityLayout>
      {showOverlay && (
        <Overlay>
          <OverlayContent>
            <Message>{message}</Message>
            <NavLink to="/registrar">
              <OverlayBackButton>Voltar</OverlayBackButton>
            </NavLink>
          </OverlayContent>
        </Overlay>
      )}
    </>
  )
}
