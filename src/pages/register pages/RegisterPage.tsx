import { CaretRight, Receipt, User } from 'phosphor-react'
import { RegisterPageOption, RegisterPageLayout } from './styles'
import { NavLink } from 'react-router-dom'

export function RegisterPage() {
  return (
    <RegisterPageLayout>
      <NavLink to="/registrar/recebimento">
        <RegisterPageOption>
          <h1>
            Registrar Pagamento
            <Receipt size={44} weight="fill" className="icon" />
          </h1>
          <CaretRight size={30} />
        </RegisterPageOption>
      </NavLink>
      <NavLink to="/registrar/cliente">
        <RegisterPageOption>
          <h1>
            Registrar Cliente
            <User size={44} weight="fill" className="icon" />
          </h1>
          <CaretRight size={30} />
        </RegisterPageOption>
      </NavLink>
    </RegisterPageLayout>
  )
}
