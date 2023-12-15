import { CaretRight, Handshake, Receipt, UserList } from 'phosphor-react'
import { SearchPageOption, SearchPageLayout } from './styles'
import { NavLink } from 'react-router-dom'

export function SearchPage() {
  return (
    <SearchPageLayout>
      <NavLink to="/buscar/pagamento">
        <SearchPageOption>
          <h1>
            Buscar Pagamento
            <Receipt size={44} weight="fill" className="icon" />
          </h1>
          <CaretRight size={30} />
        </SearchPageOption>
      </NavLink>
      <NavLink to="/buscar/cliente">
        <SearchPageOption>
          <h1>
            Buscar Cliente
            <UserList size={46} weight="fill" className="icon" />
          </h1>
          <CaretRight size={30} />
        </SearchPageOption>
      </NavLink>
      <NavLink to="/buscar/atividades">
        <SearchPageOption>
          <h1>
            Minhas Atividades
            <Handshake size={46} weight="fill" className="icon" />
          </h1>
          <CaretRight size={30} />
        </SearchPageOption>
      </NavLink>
    </SearchPageLayout>
  )
}
