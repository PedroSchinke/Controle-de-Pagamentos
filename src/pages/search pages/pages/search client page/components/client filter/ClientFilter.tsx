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
  ShowAllClientsButton,
} from './styles'
import {
  ClientProps,
  ClientsContext,
} from '../../../../../../context/clientsContext'
import { NavLink } from 'react-router-dom'
import { MagnifyingGlass } from 'phosphor-react'

const filterSchema = z.object({
  name: z.string().trim().min(1, 'É preciso preencher este campo.'),
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

  const { setShowNoResultsMessage } = useContext(ClientsContext)

  const handleFilter = async (data: filterDataProps) => {
    try {
      filterSchema.parse(data)

      const response = await api.get(`/clientes/nome/${data.name}`)

      if (response.data.length !== 0) {
        setClients(response.data)
        setShowNoResultsMessage(false)
      } else {
        setClients([])
        setShowNoResultsMessage(true)
      }
    } catch (error) {
      console.error(error)
      setErrorMessage('Erro ao conectar com servidor. Tente mais tarde.')
    }
  }

  const handleShowAllClients = async () => {
    try {
      const response = await api.get('/clientes')

      if (response.status === 200) {
        const alphabeticalArray = response.data.sort(
          (a: ClientProps, b: ClientProps) => {
            const nomeA = a.nome.toUpperCase()
            const nomeB = b.nome.toUpperCase()

            if (nomeA < nomeB) {
              return -1
            }
            if (nomeA > nomeB) {
              return 1
            }

            return 0
          },
        )
        setClients(alphabeticalArray)
        setShowNoResultsMessage(false)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const showOverlay = errorMessage !== null

  return (
    <>
      <FilterContainer>
        <FilterForm id="filter_form" onSubmit={handleSubmit(handleFilter)}>
          <label>
            <div id="search_client_bar">
              <input
                type="text"
                id="name"
                placeholder="Digite o nome do cliente..."
                {...register('name', { required: true })}
              />
              <FilterButton type="submit" form="filter_form" title="Buscar">
                <MagnifyingGlass size={20} weight="bold" />
              </FilterButton>
            </div>
            {errors.name && (
              <FilterErrorMessage>{errors.name.message}</FilterErrorMessage>
            )}
          </label>
          <ShowAllClientsButton
            type="button"
            id="show_all_clients_button"
            onClick={handleShowAllClients}
          >
            Mostrar todos os clientes
          </ShowAllClientsButton>
        </FilterForm>
      </FilterContainer>
      {showOverlay && (
        <Overlay>
          <OverlayContent>
            <Message>{errorMessage}</Message>
            <NavLink to="/buscar/cliente">
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
