import styled from 'styled-components'
import { BaseButton } from '../../../../styles/style-bases'

export const RegisterReceiptLayout = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1200px) {
    padding: 25px 15px;
  }
`

export const RegisterReceiptContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 40px 10px;
  background-color: ${(props) => props.theme.background};
  border-radius: 8px;
  box-shadow: 0px 0px 10px ${(props) => props.theme.base_hover};

  h1 {
    margin-top: -10px;
    text-align: center;
    font-size: 2rem;
    font-family: 'Inter', sans-serif;
    color: ${(props) => props.theme.blue_dark};
  }

  @media (min-width: 481px) {
    width: 460px;
  }

  @media (min-width: 768px) {
    width: 480px;
  }

  @media (min-width: 1200px) {
    width: 480px;
  }
`

export const ConfirmRegisterReceiptButton = styled(BaseButton)``

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`

export const OverlayContent = styled.div`
  width: 70%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: absolute;
  top: 48%;
  left: 50%;
  border-radius: 8px;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: #fff;
  z-index: 1000;

  a {
    width: 45%;
    height: 2.8rem;
  }

  @media (min-width: 768px) {
    width: 40%;
  }
`

export const Message = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-family: 'Roboto', sans-serif;
  font-size: 1.3rem;
  font-weight: bold;
  color: ${(props) => props.theme.base_text};
  text-align: center;
`

export const OverlayBackButton = styled(BaseButton)`
  width: 100%;
  height: 100%;
`
