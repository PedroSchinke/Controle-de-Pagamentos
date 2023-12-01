import { useForm } from 'react-hook-form'
import { FilterButton, FilterContainer, FilterForm } from './styles'
import * as z from 'zod'
import axios, { AxiosResponse } from 'axios'
import { api } from '../../../../../../services/api'
import { useEffect, useContext } from 'react'
import { ClientsContext } from '../../../../../../context/clientsContext'

const filterSchema = z.object({
  from_date: z.string(),
  to_date: z.string(),
  name: z.string(),
})

type filterDataProps = z.infer<typeof filterSchema>

export function ReceiptFilter() {
  const { register, handleSubmit } = useForm<filterDataProps>()

  const { setReceipts } = useContext(ClientsContext)

  useEffect(() => {
    const getData = async () => {
      // filterSchema.parse(data)

      const response = await api.get('/pagamentos')

      if (response.status === 200) {
        setReceipts(response.data)
      }
    }

    getData()
  }, [setReceipts])

  // const handleFilter = async (data: filterDataProps) => {
  //   try {
  //     filterSchema.parse(data)

  //     // const queryString = new URLSearchParams(
  //     //   data as filterDataProps,
  //     // ).toString()

  //     console.log(data)

  //     const response: AxiosResponse = await axios.get(`endpoint?${queryString}`)
  //     console.log('Response:', response)
  //   } catch (error) {
  //     console.error('Error:', error)
  //   }
  // }

  return (
    <FilterContainer>
      <FilterForm
        id="filter_form"
        // onSubmit={handleSubmit(handleFilter)}
      >
        <label className="main_label">
          Nome
          <input
            type="text"
            id="name"
            className="name_input"
            {...register('name')}
          />
        </label>

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
        <FilterButton type="submit" form="filter_form">
          Buscar
        </FilterButton>
      </FilterForm>
    </FilterContainer>
  )
}
