import { NavLink } from 'react-router-dom'
import {
  HeaderContainer,
  HeaderContent,
  Line,
  Logo,
  Navigation,
} from './styles'
import { HouseLine, MagnifyingGlass, PlusCircle } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>LOGO</Logo>
        <Navigation>
          <ul>
            <NavLink to="/início">
              <li>
                <HouseLine weight="fill" /> Início
              </li>
            </NavLink>
            <Line />
            <NavLink to="/registrar">
              <li>
                <PlusCircle weight="fill" /> Registrar
              </li>
            </NavLink>
            <Line />
            <NavLink to="/buscar">
              <li>
                <MagnifyingGlass weight="fill" /> Buscar
              </li>
            </NavLink>
          </ul>
        </Navigation>
      </HeaderContent>
    </HeaderContainer>
  )
}
