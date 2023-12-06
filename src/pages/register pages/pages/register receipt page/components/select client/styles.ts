import styled from 'styled-components'

export const SelectClientLayout = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-family: 'Roboto', sans-serif;
  color: ${(props) => props.theme.base_text};
`

export const SelectClientContent = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px 10px;
  background-color: ${(props) => props.theme.background};
  border-radius: 8px;
  box-shadow: 0px 0px 10px ${(props) => props.theme.base_hover};

  h1 {
    font-size: 2rem;
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
  padding: 20px 10px 0px 10px;
  background-color: ${(props) => props.theme.background};
  border-radius: 8px;
  box-shadow: 0px 0px 10px ${(props) => props.theme.base_hover};

  .total_results {
    font-size: 1.3rem;
    margin: 0px 0px 18px 20px;
    color: ${(props) => props.theme.base_label};
  }

  h1 {
    font-size: 2rem;
    margin: 0px 0px 20px 20px;
  }
`
