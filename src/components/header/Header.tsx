import { NavLink } from 'react-router-dom'
import { HeaderContainer, Line, Logo, Navigation } from './styles'
import { HouseLine, Notebook, PlusCircle } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <Logo>LOGO</Logo>
        <Line />
        <Navigation>
          <ul>
            <NavLink to="/dashboard">
              <li>
                <HouseLine /> Início
              </li>
            </NavLink>
            <NavLink to="/registrar">
              <li>
                <PlusCircle /> Registrar
              </li>
            </NavLink>
            <NavLink to="/consultar">
              <li>
                <Notebook /> Consultar
              </li>
            </NavLink>
          </ul>
        </Navigation>
      </div>
    </HeaderContainer>
  )
}
