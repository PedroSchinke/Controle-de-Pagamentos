import styled from 'styled-components'

export const RegisterPageLayout = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  a {
    width: 100%;
  }
`

export const RegisterPageOption = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  padding: 20px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.base_subtitle};
  border-radius: 8px;
  box-shadow: 0px 0px 10px ${(props) => props.theme.base_hover};
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 10px ${(props) => props.theme.base_label};
  }

  h1 {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-family: 'Roboto', sans-serif;
    font-size: 1.8rem;

    .icon {
      color: ${(props) => props.theme.blue_dark};
    }
  }
`
