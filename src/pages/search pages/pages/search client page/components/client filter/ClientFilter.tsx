import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useContext, useState } from 'react'
import { api } from '../../../../../../services/api'
import {
  FilterButton,
  FilterContainer,
  FilterErrorMessage,
  FilterForm,
  Message,
  Overlay,
  OverlayBackButton,
  OverlayContent,
} from './styles'
import { ClientsContext } from '../../../../../../context/clientsContext'
import { NavLink } from 'react-router-dom'

const filterSchema = z.object({
  name: z.string().min(1, 'É preciso preencher este campo'),
})

type filterDataProps = z.infer<typeof filterSchema>

export function ClientFilter() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<filterDataProps>({
    mode: 'all',
    criteriaMode: 'all',
    resolver: zodResolver(filterSchema),
  })

  const { setClients } = useContext(ClientsContext)

  const handleFilter = async (data: filterDataProps) => {
    try {
      filterSchema.parse(data)

      const response = await api.get(`/clientes/nome/${data.name}`)

      console.log(response.data)

      if (response.data.length !== 0) {
        setClients(response.data)
      } else {
        setClients([])
      }
    } catch (error) {
      console.error('Error:', error)

      setErrorMessage('Erro ao conectar com servidor. Tente mais tarde.')
    }
  }

  const showOverlay = errorMessage !== null

  return (
    <>
      <FilterContainer>
        <FilterForm id="filter_form" onSubmit={handleSubmit(handleFilter)}>
          <label className="main_label">
            Nome
            <input
              type="text"
              id="name"
              className="name_input"
              {...register('name')}
            />
            {errors.name && (
              <FilterErrorMessage>{errors.name.message}</FilterErrorMessage>
            )}
          </label>
          <FilterButton type="submit" form="filter_form">
            Buscar
          </FilterButton>
        </FilterForm>
      </FilterContainer>
      {showOverlay && (
        <Overlay>
          <OverlayContent>
            <Message>{errorMessage}</Message>
            <NavLink to="/consultar/cliente">
              <OverlayBackButton onClick={() => setErrorMessage(null)}>
                Voltar
              </OverlayBackButton>
            </NavLink>
          </OverlayContent>
        </Overlay>
      )}
    </>
  )
}
