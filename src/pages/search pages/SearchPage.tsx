import { CaretRight, Receipt, UserList, Wrench } from 'phosphor-react'
import {
  SearchPageOption,
  SearchPageLayout,
  SearchPageContent,
  PageTitleContainer,
} from './styles'
import { NavLink } from 'react-router-dom'

export function SearchPage() {
  return (
    <SearchPageLayout>
      <SearchPageContent>
        <PageTitleContainer>
          <h1 id="page_title">Buscar</h1>
          <div id="line" />
        </PageTitleContainer>
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
              <Wrench size={44} weight="fill" className="icon" />
            </h1>
            <CaretRight size={30} />
          </SearchPageOption>
        </NavLink>
      </SearchPageContent>
    </SearchPageLayout>
  )
}
