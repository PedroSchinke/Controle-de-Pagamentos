import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 150px;
  padding: 20px;
  background-color: ${(props) => props.theme.blue_dark};
  font-family: 'Inter', sans-serif;

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
  font-size: 2.5rem;
  color: ${(props) => props.theme.blue_light};
`

export const Line = styled.div`
  width: 85%;
  height: 1.5px;
  background-color: ${(props) => props.theme.blue_light};
`

export const Navigation = styled.nav`
  display: flex;

  ul {
    display: flex;
    justify-content: center;
    gap: 20px;

    li {
      display: flex;
      align-items: center;
      list-style: none;
      gap: 3px;
      font-size: 1.2rem;
      color: ${(props) => props.theme.blue_light};
      padding: 3px 0 3px 0;

      &:hover {
        border-bottom: 2px solid ${(props) => props.theme.white};
      }

      &:focus {
        border-bottom: 2px solid ${(props) => props.theme.white};
      }
    }
  }
`
