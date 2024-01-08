import styled from 'styled-components'
import { BaseButton } from '../../../../../../styles/style-bases'

export const MyActivitiesFilter = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  #search_bar {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    #nome {
      width: 85%;
      padding: 8px;
      border: none;
      border-bottom-left-radius: 8px;
      border-top-left-radius: 8px;
      background-color: ${(props) => props.theme.base_input};
      font-family: 'Roboto', sans-serif;
      font-size: 1.3rem;
      color: ${(props) => props.theme.base_label};

      &::placeholder {
        font-size: 1.1rem;
        font-style: italic;
      }
    }
  }
`

export const FilterButton = styled(BaseButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
`
