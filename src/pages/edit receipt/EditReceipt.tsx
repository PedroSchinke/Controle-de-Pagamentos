import { NavLink, useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import {
  ConfirmEditReceiptButton,
  Message,
  Overlay,
  OverlayBackButton,
  OverlayContent,
  EditReceiptContainer,
  EditReceiptLayout,
} from './styles'
import { SelectClientForEditOverlay } from './components/select client for edit overlay/SelectClientForEditOverlay'
import { EditReceiptForm } from './components/edit receipt form/EditReceiptForm'
import { Context } from '../../context/Context'
import { api } from '../../services/api'
import { BackButton } from '../../components/back button/BackButton'

export function EditReceipt() {
  const { id } = useParams()

  const {
    isClientSelectForEditOverlayActive,
    editReceiptMessage,
    setEditReceiptMessage,
    setClientIdForEdit,
    setClientNameForEdit,
  } = useContext(Context)

  const showOverlay = editReceiptMessage !== null

  const getCurrentClientId = async () => {
    const getCurrentClientIdResponse = await api.get(`/pagamentos/${id}`)

    setClientIdForEdit(getCurrentClientIdResponse.data.cliente.id)
  }

  const cleanUp = () => {
    setClientIdForEdit(null)
    setClientNameForEdit(null)
  }

  useEffect(() => {
    getCurrentClientId()

    return cleanUp
  }, [])

  return (
    <>
      <EditReceiptLayout>
        <EditReceiptContainer>
          <BackButton />

          <h1 id="page_title">Editar Pagamento</h1>

          <EditReceiptForm />

          <ConfirmEditReceiptButton type="submit" form="edit_receipt_form">
            Editar
          </ConfirmEditReceiptButton>
        </EditReceiptContainer>
      </EditReceiptLayout>
      {isClientSelectForEditOverlayActive && <SelectClientForEditOverlay />}
      {showOverlay && (
        <Overlay>
          <OverlayContent>
            <Message>{editReceiptMessage}</Message>
            <NavLink
              to={
                editReceiptMessage === 'Pagamento editado com sucesso!'
                  ? `/buscar/pagamento/detalhes/${id}`
                  : `/editar/pagamento/${id}`
              }
            >
              <OverlayBackButton onClick={() => setEditReceiptMessage(null)}>
                Voltar
              </OverlayBackButton>
            </NavLink>
          </OverlayContent>
        </Overlay>
      )}
    </>
  )
}
