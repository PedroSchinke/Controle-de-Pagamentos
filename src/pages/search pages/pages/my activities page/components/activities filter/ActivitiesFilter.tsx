import { MagnifyingGlass } from 'phosphor-react'
import {
  FilterButton,
  MyActivitiesFilter,
  ShowAllActivitiesButton,
} from './styles'
import { useForm } from 'react-hook-form'
import { api } from '../../../../../../services/api'
import { useContext } from 'react'
import { Context } from '../../../../../../context/Context'

interface FormDataProps {
  activity: string
}

export function ActivitiesFilter() {
  const { register, handleSubmit } = useForm<FormDataProps>()

  const { setActivities, setShowNoResultsMessage } = useContext(Context)

  const handleFilterActivity = async (data: FormDataProps) => {
    try {
      const response = await api.get(`/atividades/nome/${data.activity}`)

      if (response.data.length !== 0) {
        setActivities(response.data)
        setShowNoResultsMessage(false)
      } else {
        setActivities([])
        setShowNoResultsMessage(true)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleShowAllActivities = async () => {
    try {
      const response = await api.get('/atividades')

      if (response.data.length !== 0) {
        setActivities(response.data)
        setShowNoResultsMessage(false)
      } else {
        setActivities([])
        setShowNoResultsMessage(true)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <MyActivitiesFilter
      id="my_activities_filter"
      onSubmit={handleSubmit(handleFilterActivity)}
    >
      <label id="search_bar">
        <input
          type="text"
          id="nome"
          placeholder="Pesquisar atividade..."
          {...register('activity')}
        />

        <FilterButton type="submit" form="my_activities_filter" title="Buscar">
          <MagnifyingGlass weight="bold" size={20} />
        </FilterButton>
      </label>
      <ShowAllActivitiesButton
        type="button"
        id="show_all_Activities_button"
        onClick={handleShowAllActivities}
      >
        Mostrar todos os clientes
      </ShowAllActivitiesButton>
    </MyActivitiesFilter>
  )
}
