import { HeaderContainer, Line, Logo, Navigation } from './styles'
import { Notebook, PlusCircle } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <Logo>Logo</Logo>
        <Line />
        <Navigation>
          <ul>
            <li>
              <PlusCircle /> Cadastrar
            </li>
            <li>
              <Notebook /> Consultar
            </li>
          </ul>
        </Navigation>
      </div>
    </HeaderContainer>
  )
}
