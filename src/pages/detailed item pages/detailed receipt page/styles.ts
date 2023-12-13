import styled from 'styled-components'
import { BaseButton } from '../../register pages/pages/register client page/styles'

export const DetailedReceiptLayout = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const DetailedReceiptContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 30px;
  padding: 40px 30px;
  font-family: 'Roboto', sans-serif;
  color: ${(props) => props.theme.base_text};
  background-color: ${(props) => props.theme.background};
  border-radius: 8px;
  box-shadow: 0px 0px 10px ${(props) => props.theme.base_hover};

  :last-child {
    justify-content: space-evenly;
  }

  a {
    width: 18%;
    color: inherit;
  }

  .back_button {
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.base_label};
    border: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  h1 {
    margin-top: -10px;
    font-size: 2rem;
    font-family: 'Inter', sans-serif;
    color: ${(props) => props.theme.blue_dark};
  }
`

export const DetailedReceiptInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const ReceiptOptionButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`

const BaseOptionButtons = styled.button`
  display: flex;
  align-items: center;
  gap: 3px;
  border: none;
  background-color: ${(props) => props.theme.background};
  font-family: 'Roboto', sans-serif;
  font-size: 1.3rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export const UpdateReceiptButton = styled(BaseOptionButtons)`
  color: ${(props) => props.theme.blue_dark};
`

export const DeleteReceiptButton = styled(BaseOptionButtons)`
  color: ${(props) => props.theme.red};
`

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
  height: 16%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: absolute;
  top: 45%;
  left: 50%;
  border-radius: 8px;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: #fff;
  z-index: 1000;

  a {
    width: 45%;
  }
`

export const Message = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.base_text};
  text-align: center;
`

export const OverlayBackButton = styled(BaseButton)`
  width: 100%;
  height: 170%;
`
