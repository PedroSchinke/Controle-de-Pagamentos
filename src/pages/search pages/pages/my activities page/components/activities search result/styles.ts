import styled from 'styled-components'
import { BaseButton } from '../../../../../../styles/style-bases'

export const ActivitiesSearchResultContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto', sans-serif;
`

export const DivisionCardLine = styled.div`
  width: 90%;
  height: 1px;
  background-color: ${(props) => props.theme.base_hover};
`

export const ActivitiesSearchResultInfos = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  color: ${(props) => props.theme.base_text};
  transition: 0.2s;

  #delete_button {
    display: flex;
    border: none;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.red};
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.red_light};
    }
  }
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
  height: fit-content;
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
  background-color: ${(props) => props.theme.background};
  z-index: 1000;

  a {
    width: 45%;
    height: fit-content;
  }

  @media (min-width: 481px) {
    width: 360px;
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
  font-size: 1.2rem;
`

export const ConfirmDeleteOptionButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: -5px;

  .option_button {
    width: 3.5rem;
    height: 2.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
  }

  .no_delete_button {
    font-size: 1.2rem;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.blue_dark};
    transition: 0.3s;

    &:hover {
      color: ${(props) => props.theme.blue};
    }
  }

  .yes_delete_button {
    border-radius: 8px;
    font-size: 1.2rem;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    background-color: ${(props) => props.theme.blue_dark};
    color: ${(props) => props.theme.blue_light};
    transition: 0.3s;

    &:hover {
      background-color: ${(props) => props.theme.blue};
      color: ${(props) => props.theme.white};
    }
  }
`
