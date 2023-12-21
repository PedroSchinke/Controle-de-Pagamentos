import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 150px;
  padding: 20px 20px 10px 20px;
  background-color: ${(props) => props.theme.blue_dark};
  font-family: 'Inter', sans-serif;
`

export const HeaderContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`

export const Logo = styled.div`
  width: 30%;
  height: auto;
  display: flex;
  justify-content: center;
  font-size: 2.5rem;
  color: ${(props) => props.theme.blue_light};
`

export const Line = styled.div`
  width: 1px;
  height: 85%;
  background-color: ${(props) => props.theme.blue_light};
`

export const Navigation = styled.nav`
  width: 100%;
  display: flex;

  ul {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    a {
      width: fit-content;
      display: flex;
      justify-content: center;
    }

    li {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      list-style: none;
      gap: 3px;
      border-radius: 8px;
      font-size: 1.2rem;
      color: ${(props) => props.theme.blue_light};
      padding: 7px;

      &:hover {
        background-color: ${(props) => props.theme.blue_extra_dark};
      }

      &:focus {
      }

      @media (min-width: 768px) {
        width: 150px;
        padding: 7px 20px;
      }
    }

    @media (min-width: 481px) {
      gap: 20px;
    }

    @media (min-width: 768px) {
      gap: 40px;
    }
  }
`
