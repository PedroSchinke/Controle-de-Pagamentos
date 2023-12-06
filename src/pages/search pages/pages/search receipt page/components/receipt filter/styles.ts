import styled from 'styled-components'
import { BaseButton } from '../../../../../register pages/pages/register client page/styles'

export const FilterContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 1.3rem;
  color: ${(props) => props.theme.base_subtitle};

  .main_label {
    width: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 4px;

    #nome {
      width: 100%;
    }

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
    padding: 8px;
    border: none;
    border-radius: 8px;
    background-color: ${(props) => props.theme.base_input};
    font-family: 'Roboto', sans-serif;
    font-size: 1.3rem;
    color: ${(props) => props.theme.base_label};
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
