import { NavLink } from 'react-router-dom'
import { HeaderContainer, Line, Logo, Navigation } from './styles'
import { HouseLine, MagnifyingGlass, PlusCircle } from 'phosphor-react'

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
                <HouseLine weight="fill" /> Início
              </li>
            </NavLink>
            <NavLink to="/registrar">
              <li>
                <PlusCircle weight="fill" /> Registrar
              </li>
            </NavLink>
            <NavLink to="/buscar">
              <li>
                <MagnifyingGlass weight="fill" /> Buscar
              </li>
            </NavLink>
          </ul>
        </Navigation>
      </div>
    </HeaderContainer>
  )
}
