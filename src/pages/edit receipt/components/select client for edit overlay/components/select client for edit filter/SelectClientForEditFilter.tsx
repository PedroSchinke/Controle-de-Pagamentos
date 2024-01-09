import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useContext, useEffect, useState } from 'react'
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
import { api } from '../../../../../../services/api'
import { Context } from '../../../../../../context/Context'
import { selectActiveClients } from '../../../../../../services/select-active-clients'

const filterSchema = z.object({
  name: z.string().trim().min(1, 'É preciso preencher este campo.'),
})

type filterDataProps = z.infer<typeof filterSchema>

export function SelectClientForEditFilter() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const { setClientsForReceiptSearch, setShowNoResultsMessageInOverlay } =
    useContext(Context)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<filterDataProps>({
    mode: 'all',
    criteriaMode: 'all',
    resolver: zodResolver(filterSchema),
  })

  useEffect(() => {
    return () => {
      setClientsForReceiptSearch([])
    }
  }, [setClientsForReceiptSearch])

  const handleFilter = async (data: filterDataProps) => {
    try {
      filterSchema.parse(data)

      const response = await api.get(`/clientes/nome/${data.name}`)

      if (response.data.length !== 0) {
        const activeClients = selectActiveClients(response.data)
        setClientsForReceiptSearch(activeClients)
        setShowNoResultsMessageInOverlay(false)
      } else {
        setClientsForReceiptSearch([])
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
        <FilterForm
          id="select_client_for_receipt_search_form"
          onSubmit={handleSubmit(handleFilter)}
        >
          <label className="main_label">
            <input
              type="text"
              id="name"
              placeholder="digite o nome do cliente..."
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
