import styled from 'styled-components'
import { BaseButton } from '../register page/styles'

export const SearchPageLayout = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SearchPageContainer = styled.section`
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
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    color: ${(props) => props.theme.base_subtitle};
  }
`

export const FilterContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 1.3rem;
  color: ${(props) => props.theme.base_subtitle};

  .filter {
    width: 62%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 4px;

    .label_and_input_of_filter {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  label {
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
`

export const FilterForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

export const FilterButton = styled(BaseButton)``
