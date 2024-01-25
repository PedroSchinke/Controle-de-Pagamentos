import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 25px;
  margin-top: 50px;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 70px;
    height: 70px;
    margin: 8px;
    border: 8px solid ${(props) => props.theme.blue_dark};
    border-radius: 50%;
    animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${(props) => props.theme.blue_dark} transparent transparent
      transparent;
  }
`
