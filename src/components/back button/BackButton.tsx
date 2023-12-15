import { CaretLeft } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { BackButtonContainer } from './styles'

interface BackButtonProps {
  path: string
}

export function BackButton({ path }: BackButtonProps) {
  return (
    <BackButtonContainer>
      <NavLink to={path}>
        <button>
          <CaretLeft />
          Voltar
        </button>
      </NavLink>
    </BackButtonContainer>
  )
}
