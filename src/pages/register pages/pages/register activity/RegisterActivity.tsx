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
import { BackButton } from '../../../../components/back button/BackButton'

const registerActivitySchema = z.object({
  descricao: z
    .string()
    .trim()
    .min(1, 'É preciso preencher a descrição da tarefa.'),
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

      const response = await api.post('/atividades', data)

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
          <BackButton />

          <h1>Registrar Atividade</h1>

          <RegisterForm
            id="register_activity_form"
            onSubmit={handleSubmit(handleRegisterActivity)}
          >
            <label>
              Descrição
              <input id="descrição" {...register('descricao')} />
              {errors.descricao && (
                <RegisterFormError>
                  {errors.descricao.message}
                </RegisterFormError>
              )}
            </label>
          </RegisterForm>

          <ConfirmRegisterButton type="submit" form="register_activity_form">
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
