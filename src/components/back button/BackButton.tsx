import { CaretLeft } from 'phosphor-react'
import { BackButtonContainer } from './styles'

export function BackButton() {
  function goBack() {
    window.history.back()
  }

  return (
    <BackButtonContainer>
      <button onClick={goBack}>
        <CaretLeft />
        Voltar
      </button>
    </BackButtonContainer>
  )
}
