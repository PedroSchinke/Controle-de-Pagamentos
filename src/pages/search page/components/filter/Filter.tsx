import { useForm } from 'react-hook-form'
import { FilterButton, FilterContainer, FilterForm } from './styles'
import * as z from 'zod'
import axios, { AxiosResponse } from 'axios'

const filterSchema = z.object({
  from_date: z.string(),
  to_date: z.string(),
  name: z.string(),
})

type filterDataProps = z.infer<typeof filterSchema>

export function Filter() {
  const { register, handleSubmit } = useForm<filterDataProps>()

  const onSubmit = async (data: filterDataProps) => {
    try {
      filterSchema.parse(data)

      const queryString = new URLSearchParams(
        data as filterDataProps,
      ).toString()

      console.log(data)

      const response: AxiosResponse = await axios.get(`endpoint?${queryString}`)
      console.log('Response:', response)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <FilterContainer>
      <span>Filtrar por:</span>
      <FilterForm id="filter_form" onSubmit={handleSubmit(onSubmit)}>
        <label className="main_label">
          Data
          <div className="label_and_input_of_filter">
            <label>
              De
              <input type="date" id="from_date" {...register('from_date')} />
            </label>
          </div>
          <div className="label_and_input_of_filter">
            <label>
              Até
              <input type="date" id="to_date" {...register('to_date')} />
            </label>
          </div>
        </label>

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
