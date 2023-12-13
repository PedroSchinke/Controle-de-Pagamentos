import styled from 'styled-components'

export const SearchReceiptPageLayout = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-family: 'Roboto', sans-serif;
  color: ${(props) => props.theme.base_text};
`

export const SearchReceiptPageContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 40px 10px;
  background-color: ${(props) => props.theme.background};
  border-radius: 8px;
  box-shadow: 0px 0px 10px ${(props) => props.theme.base_hover};

  #back_button_container {
    width: 85%;
    display: flex;

    a {
      width: fit-content;

      #back_button {
        width: 100%;
        text-align: left;
        display: flex;
        align-items: center;
        border: none;
        background-color: ${(props) => props.theme.background};
        color: ${(props) => props.theme.base_label};
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  h1 {
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 2rem;
    color: ${(props) => props.theme.blue_dark};
  }
`

export const NoResultsMesssage = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;
`

export const ResultsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 40px 10px 20px 10px;
  background-color: ${(props) => props.theme.background};
  border-radius: 8px;
  box-shadow: 0px 0px 10px ${(props) => props.theme.base_hover};

  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    color: ${(props) => props.theme.base_subtitle};
    margin: 0px 0px 20px 20px;
  }
`
