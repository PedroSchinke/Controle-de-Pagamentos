import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 150px;
  background-color: ${(props) => props.theme.blue_dark};
  padding: 20px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`

export const Logo = styled.div`
  width: 30%;
  height: 70px;
  font-family: 'Roboto', sans-serif;
  font-size: 2.5rem;
  color: ${(props) => props.theme.blue_light};
`

export const Line = styled.div`
  width: 80%;
  height: 1px;
  background-color: ${(props) => props.theme.blue_light};
`

export const Navigation = styled.nav`
  display: flex;

  ul {
    display: flex;
    justify-content: center;
    gap: 20px;

    li {
      color: ${(props) => props.theme.blue_light};
      font-family: 'Roboto', sans-serif;
      font-size: 1.2rem;
      list-style: none;
      display: flex;
      align-items: center;
      gap: 3px;

      &:hover {
        color: ${(props) => props.theme.base_hover};
      }
    }
  }
`
