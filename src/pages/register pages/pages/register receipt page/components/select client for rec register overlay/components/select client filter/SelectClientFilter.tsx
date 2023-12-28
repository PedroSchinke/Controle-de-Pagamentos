import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useContext, useEffect, useState } from 'react'
import { api } from '../../../../../../../../services/api'
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
import { ClientsContext } from '../../../../../../../../context/clientsContext'
import { NavLink } from 'react-router-dom'
import { selectActiveClients } from '../../../../../../../../services/select-active-clients'

const filterSchema = z.object({
  name: z.string().trim().min(1, 'É preciso preencher o nome do cliente.'),
})

type filterDataProps = z.infer<typeof filterSchema>

export function SelectClientFilter() {
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

  const { setShowNoResultsMessageInOverlay } = useContext(ClientsContext)

  useEffect(() => {
    return () => {
      setShowNoResultsMessageInOverlay(false)
      setClients([])
    }
  }, [setClients, setShowNoResultsMessageInOverlay])

  const handleFilter = async (data: filterDataProps) => {
    try {
      filterSchema.parse(data)

      const response = await api.get(`/clientes/nome/${data.name}`)

      if (response.data.length !== 0) {
        const activeClients = selectActiveClients(response.data)
        setClients(activeClients)
        setShowNoResultsMessageInOverlay(false)
      } else {
        setClients([])
        setShowNoResultsMessageInOverlay(true)
      }
    } catch (error) {
      console.error(error)

      setErrorMessage('Erro ao conectar com servidor. Tente mais tarde.')
    }
  }

  const showOverlay = errorMessage !== null

  return (
    <>
      <FilterContainer>
        <FilterForm id="filter_form" onSubmit={handleSubmit(handleFilter)}>
          <label className="main_label">
            <input
              type="text"
              id="name"
              placeholder="Digite o nome do cliente..."
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
            <NavLink to="/registrar">
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
