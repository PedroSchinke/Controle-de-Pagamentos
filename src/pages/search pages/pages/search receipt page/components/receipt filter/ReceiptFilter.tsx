import { useForm } from 'react-hook-form'
import { FilterButton, FilterContainer, FilterForm } from './styles'
import * as z from 'zod'
import { api } from '../../../../../../services/api'
import { useContext } from 'react'
import { ClientsContext } from '../../../../../../context/clientsContext'
import { SelectClientOverlay } from '../select client overlay/SelectClientOverlay'

const formDataSchema = z.object({
  nome: z.string(),
  dataIni: z.string(),
  dataFim: z.string(),
})

interface FormDataProps {
  nome: string
  dataIni: string
  dataFim: string
}

// type filterDataProps = z.infer<typeof filterSchema>

export function ReceiptFilter() {
  const { register, handleSubmit } = useForm<FormDataProps>()

  const { setReceipts, setShowNoResultsMessage } = useContext(ClientsContext)

  const { isClientSelectOverlayActive, setIsClientSelectOverlayActive } =
    useContext(ClientsContext)

  const handleFilter = async (data: FormDataProps) => {
    try {
      formDataSchema.parse(data)

      console.log(data)
      // /pagamentos/cliente?dataIni=2023-10-10&dataFim=2023-12-31
      const response = await api.get(
        `/pagamentos/cliente?clienteId=1&dataIni=${data.dataIni}&dataFim=${data.dataFim}`,
      )

      if (response.data.length !== 0) {
        setReceipts(response.data)
        setShowNoResultsMessage(false)
      } else {
        setReceipts([])
        setShowNoResultsMessage(true)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <>
      <FilterContainer>
        <FilterForm id="filter_form" onSubmit={handleSubmit(handleFilter)}>
          <label className="main_label">
            Nome
            <input
              type="text"
              id="nome"
              onClick={() => setIsClientSelectOverlayActive(true)}
              {...register('nome')}
            />
          </label>

          <label className="main_label">
            Data
            <div className="label_and_input_of_filter">
              <label>
                De
                <input type="date" id="dataIni" {...register('dataIni')} />
              </label>
            </div>
            <div className="label_and_input_of_filter">
              <label>
                Até
                <input type="date" id="dataFim" {...register('dataFim')} />
              </label>
            </div>
          </label>
          <FilterButton type="submit" form="filter_form">
            Buscar
          </FilterButton>
        </FilterForm>
      </FilterContainer>
      {isClientSelectOverlayActive && <SelectClientOverlay />}
    </>
  )
}
