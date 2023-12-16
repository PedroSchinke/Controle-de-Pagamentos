import styled from 'styled-components'

export const SearchPageLayout = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  color: ${(props) => props.theme.base_text};
  padding: 25px 15px;
`

export const SearchPageContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  a {
    width: 100%;

    @media (min-width: 768px) {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`

export const PageTitleContainer = styled.div`
  width: 100%;
  display: none;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  #page_title {
    font-size: 1.8rem;
  }

  #line {
    width: 100%;
    height: 1.5px;
    background-color: ${(props) => props.theme.base_text};
  }
`

export const SearchPageOption = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  padding: 20px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.base_subtitle};
  border-radius: 8px;
  box-shadow: 0px 0px 10px ${(props) => props.theme.base_hover};
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 10px ${(props) => props.theme.base_label};
  }

  h1 {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 2rem;

    .icon {
      color: ${(props) => props.theme.blue_dark};
    }
  }

  @media (min-width: 768px) {
    width: auto;
    gap: 0;
  }
`
