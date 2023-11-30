import styled from 'styled-components'

export const SearchReceiptPageLayout = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
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

  h1 {
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    color: ${(props) => props.theme.base_subtitle};
  }
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
