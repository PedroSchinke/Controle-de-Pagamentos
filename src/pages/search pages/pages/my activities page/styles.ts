import styled from 'styled-components'

export const MyActivitiesLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 15px;
  font-family: 'Roboto', sans-serif;
  color: ${(props) => props.theme.base_text};

  @media (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 25px 15px;
  }
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

  @media (min-width: 481px) {
    width: 460px;
  }

  @media (min-width: 768px) {
    width: 480px;
  }

  @media (min-width: 1200px) {
    width: 480px;
  }
`

export const NoResultsMesssage = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;

  @media (min-width: 481px) {
    width: 460px;
  }

  @media (min-width: 768px) {
    width: 480px;
  }

  @media (min-width: 1200px) {
    width: 480px;
    margin-top: 20px;
  }
`

export const ActivitiesResultsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 20px 10px 0 10px;
  background-color: ${(props) => props.theme.background};
  border-radius: 8px;
  box-shadow: 0px 0px 10px ${(props) => props.theme.base_hover};

  #total_results_count {
    display: flex;
    justify-content: left;
    gap: 5px;
    margin-bottom: 15px;
    padding: 0 20px;
    color: ${(props) => props.theme.base_text};
    font-size: 1.5rem;

    p {
      color: ${(props) => props.theme.blue_dark};
    }
  }

  @media (min-width: 481px) {
    width: 460px;
  }

  @media (min-width: 768px) {
    width: 480px;
  }

  @media (min-width: 1200px) {
    width: 480px;
  }
`
