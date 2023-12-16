import { CaretRight, Receipt, UserPlus, Wrench } from 'phosphor-react'
import {
  RegisterPageOption,
  RegisterPageLayout,
  RegisterPageContent,
} from './styles'
import { NavLink } from 'react-router-dom'

export function RegisterPage() {
  return (
    <RegisterPageLayout>
      <RegisterPageContent>
        <NavLink to="/registrar/pagamento">
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
              <UserPlus size={46} weight="fill" className="icon" />
            </h1>
            <CaretRight size={30} />
          </RegisterPageOption>
        </NavLink>

        <NavLink to="/registrar/atividade">
          <RegisterPageOption>
            <h1>
              Registrar Atividade
              <Wrench size={44} weight="fill" className="icon" />
            </h1>
            <CaretRight size={30} />
          </RegisterPageOption>
        </NavLink>
      </RegisterPageContent>
    </RegisterPageLayout>
  )
}
