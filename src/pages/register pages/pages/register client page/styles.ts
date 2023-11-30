import styled from 'styled-components'

export const RegisterPageLayout = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const RegisterPageContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 40px 10px;
  background-color: ${(props) => props.theme.background};
  border-radius: 8px;
  box-shadow: 0px 0px 10px ${(props) => props.theme.base_hover};

  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    color: ${(props) => props.theme.base_subtitle};
  }
`

export const RegisterForm = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  label {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-family: 'Roboto', sans-serif;
    font-size: 1.1rem;
    color: ${(props) => props.theme.base_text};
  }

  input {
    padding: 3px;
    border: none;
    background-color: ${(props) => props.theme.base_input};
    font-family: 'Roboto', sans-serif;
    font-size: 1.15rem;
    color: ${(props) => props.theme.base_label};
  }

  textarea {
    resize: none;
    padding: 3px;
    border: none;
    background-color: ${(props) => props.theme.base_input};
    font-family: 'Roboto', sans-serif;
    font-size: 1.15rem;
    color: ${(props) => props.theme.base_label};
  }
`
export const RegisterFormError = styled.p`
  max-width: 100%;
  font-family: 'Roboto', sans-serif;
  font-size: 1.1rem;
  color: ${(props) => props.theme.red};
`

export const BaseButton = styled.button`
  width: 40%;
  height: 2.8rem;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.theme.blue_dark};
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  color: ${(props) => props.theme.blue_light};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.blue};
  }
`

export const ConfirmRegisterButton = styled(BaseButton)``

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
