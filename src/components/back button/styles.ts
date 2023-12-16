import styled from 'styled-components'

export const BackButtonContainer = styled.div`
  width: 85%;
  display: flex;

  button {
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.base_label};
    border: none;
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.base_text};
    }
  }
`
export const BackButton = styled.button`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.base_label};
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
