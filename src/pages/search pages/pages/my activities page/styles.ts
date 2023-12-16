import styled from 'styled-components'

export const MyActivitiesLayout = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-family: 'Roboto', sans-serif;
  color: ${(props) => props.theme.base_text};
`

export const MyActivitiesContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px 10px;
  background-color: ${(props) => props.theme.background};
  border-radius: 8px;
  box-shadow: 0px 0px 10px ${(props) => props.theme.base_hover};

  #page_title {
    font-size: 2rem;
    margin-top: -5px;
    font-family: 'Inter', sans-serif;
    color: ${(props) => props.theme.blue_dark};
  }

  @media (min-width: 768px) {
    width: 55%;
  }
`

export const ActivitiesResultsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px 0 10px;
  background-color: ${(props) => props.theme.background};
  border-radius: 8px;
  box-shadow: 0px 0px 10px ${(props) => props.theme.base_hover};

  #total_results_count {
    width: 90%;
    margin-bottom: 15px;
    font-size: 1.2rem;
    font-weight: bold;
    color: ${(props) => props.theme.base_label};
  }

  @media (min-width: 768px) {
    width: 55%;
  }
`
