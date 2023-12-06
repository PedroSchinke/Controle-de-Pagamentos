import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useContext, useState } from 'react'
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
import { NavLink } from 'react-router-dom'
import { ClientsContext } from '../../../../../../../../context/clientsContext'
import { api } from '../../../../../../../../services/api'

const filterSchema = z.object({
  name: z.string().trim().min(1, 'É preciso preencher este campo'),
})

type filterDataProps = z.infer<typeof filterSchema>

export function SelectClientFilterForReceiptSearch() {
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

  const { setClientsForReceiptSearch } = useContext(ClientsContext)

  const { setShowNoResultsMessage } = useContext(ClientsContext)

  const handleFilter = async (data: filterDataProps) => {
    try {
      filterSchema.parse(data)

      const response = await api.get(`/clientes/nome/${data.name}`)

      console.log(response.data)

      if (response.data.length !== 0) {
        setClientsForReceiptSearch(response.data)
        setShowNoResultsMessage(false)
      } else {
        setClientsForReceiptSearch([])
        setShowNoResultsMessage(true)
      }
    } catch (error) {
      console.log(error)

      setErrorMessage('Erro ao conectar com servidor. Tente mais tarde.')
    }
  }

  const showOverlay = errorMessage !== null

  return (
    <>
      <FilterContainer>
        <FilterForm
          id="select_client_for_receipt_search_form"
          onSubmit={handleSubmit(handleFilter)}
        >
          <label className="main_label">
            Nome
            <input
              type="text"
              id="name"
              {...register('name', { required: true })}
            />
            {errors.name && (
              <FilterErrorMessage>{errors.name.message}</FilterErrorMessage>
            )}
          </label>
          <FilterButton
            type="submit"
            form="select_client_for_receipt_search_form"
          >
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
