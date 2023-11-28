import styled from 'styled-components'
import { BaseButton } from '../../../../../register pages/pages/register receipt page/styles'

export const FilterContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 1.3rem;
  color: ${(props) => props.theme.base_subtitle};

  .main_label {
    width: 70%;
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
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.1rem;
    color: ${(props) => props.theme.base_text};
  }

  input {
    width: 85%;
    padding: 3px;
    border: none;
    background-color: ${(props) => props.theme.base_input};
    font-family: 'Roboto', sans-serif;
    font-size: 1.15rem;
    color: ${(props) => props.theme.base_label};
  }

  .name_input {
    width: 100%;
  }
`

export const FilterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

export const FilterButton = styled(BaseButton)`
  margin-top: 10px;
`
