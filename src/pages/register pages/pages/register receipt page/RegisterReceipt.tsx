import { NavLink } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import {
  ConfirmRegisterReceiptButton,
  Message,
  Overlay,
  OverlayBackButton,
  OverlayContent,
  RegisterReceiptContainer,
  RegisterReceiptLayout,
} from './styles'
import { RegisterReceiptForm } from './components/register receipt form/RegisterReceiptForm'
import { Context } from '../../../../context/Context'
import { SelectClientForRegister } from './components/select client for rec register overlay/SelectClient'
import { BackButton } from '../../../../components/back button/BackButton'

export function RegisterReceipt() {
  const {
    setClientIdForRegister,
    setClientNameForRegister,
    isClientSelectOverlayActive,
    registerReceiptMessage,
    setRegisterReceiptMessage,
  } = useContext(Context)

  const showOverlay = registerReceiptMessage !== null

  const cleanUp = () => {
    setClientNameForRegister(null)
    setClientIdForRegister(null)
  }

  useEffect(() => {
    return cleanUp
  }, [])

  return (
    <>
      <RegisterReceiptLayout>
        <RegisterReceiptContainer>
          <BackButton />

          <h1>Registrar Pagamento</h1>

          <RegisterReceiptForm />

          <ConfirmRegisterReceiptButton
            type="submit"
            form="register_receipt_form"
          >
            Registrar
          </ConfirmRegisterReceiptButton>
        </RegisterReceiptContainer>
      </RegisterReceiptLayout>

      {showOverlay && (
        <Overlay>
          <OverlayContent>
            <Message>{registerReceiptMessage}</Message>
            <NavLink to="/registrar">
              <OverlayBackButton
                onClick={() => setRegisterReceiptMessage(null)}
              >
                Voltar
              </OverlayBackButton>
            </NavLink>
          </OverlayContent>
        </Overlay>
      )}

      {isClientSelectOverlayActive && <SelectClientForRegister />}
    </>
  )
}
