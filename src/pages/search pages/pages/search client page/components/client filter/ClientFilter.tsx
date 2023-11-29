import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { api } from '../../../../../../services/api'
import { FilterButton, FilterContainer, FilterForm } from './styles'
import { ClientsContext } from '../../../../../../context/clientsContext'

const filterSchema = z.object({
  name: z.string(),
})

type filterDataProps = z.infer<typeof filterSchema>

export function ClientFilter() {
  const { register, handleSubmit } = useForm<filterDataProps>()

  const { clients, setClients } = useContext(ClientsContext)

  const handleFilter = async (data: filterDataProps) => {
    try {
      filterSchema.parse(data)

      console.log(data.name)

      const response = await api.get(`/clientes/nome/${data.name}`)

      setClients(response.data)

      console.log(response)

      console.log(clients)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
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
        </label>
        <FilterButton type="submit" form="filter_form">
          Filtrar
        </FilterButton>
      </FilterForm>
    </FilterContainer>
  )
}
