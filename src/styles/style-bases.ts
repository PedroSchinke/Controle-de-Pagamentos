import styled from 'styled-components'

export const BaseCardWithoutHover = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 10px;
  background-color: ${(props) => props.theme.background};
  border-radius: 8px;
  box-shadow: 0px 0px 10px ${(props) => props.theme.base_hover};
`

export const BaseButton = styled.button`
  width: 40%;
  height: 2.8rem;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.theme.blue_dark};
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  color: ${(props) => props.theme.blue_light};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.blue};
  }
`
