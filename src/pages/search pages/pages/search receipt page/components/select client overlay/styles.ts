import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`

export const OverlayContent = styled.div`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: absolute;
  top: 45%;
  left: 50%;
  border-radius: 8px;
  transform: translate(-50%, -50%);
  padding: 20px 20px 10px 20px;
  background-color: ${(props) => props.theme.background};
  z-index: 1000;

  a {
    width: 45%;
  }
`

export const ResultsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 0px 10px 0px 10px;
  background-color: ${(props) => props.theme.background};
  border-radius: 8px;

  .results_count {
    width: 100%;
    display: flex;
    margin: 0px 0px 10px 20px;
    font-family: 'Roboto', sans-serif;
    font-size: 1.1rem;
    font-weight: bold;
    color: ${(props) => props.theme.base_label};
  }

  a {
    width: 100%;
  }

  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    color: ${(props) => props.theme.base_subtitle};
    margin-bottom: 20px;
  }
`
