import { CaretRight, Receipt, User } from 'phosphor-react'
import { SearchPageOption, SearchPageLayout } from './styles'
import { NavLink } from 'react-router-dom'

export function SearchPage() {
  return (
    <SearchPageLayout>
      <NavLink to="/consultar/recebimento">
        <SearchPageOption>
          <h1>
            Consultar Recebimento
            <Receipt size={44} weight="fill" className="icon" />
          </h1>
          <CaretRight size={30} />
        </SearchPageOption>
      </NavLink>
      <NavLink to="/consultar/cliente">
        <SearchPageOption>
          <h1>
            Consultar Cliente
            <User size={44} weight="fill" className="icon" />
          </h1>
          <CaretRight size={30} />
        </SearchPageOption>
      </NavLink>
    </SearchPageLayout>
  )
}
