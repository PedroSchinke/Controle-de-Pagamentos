import styled from 'styled-components'

export const DashboardLayout = styled.div`
  height: 80vh;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

const BaseCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 10px;
  font-family: 'Roboto', sans-serif;
  color: ${(props) => props.theme.base_subtitle};
  background-color: ${(props) => props.theme.background};
  border-radius: 8px;
  box-shadow: 0px 0px 10px ${(props) => props.theme.base_hover};

  &:hover {
    box-shadow: 0px 0px 10px ${(props) => props.theme.base_label};
  }
`

export const TopCard = styled(BaseCard)`
  height: 45%;
  padding: 20px;

  .top_card_infos {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-family: 'Roboto', sans-serif;

    .total_donation_title {
      font-size: 1.3rem;
      font-weight: bold;
    }

    .total_donation_value {
      font-size: 1.6rem;
      font-weight: bold;
      color: ${(props) => props.theme.blue_dark};
    }
  }
`

export const BottomPart = styled.div`
  height: 55%;
  width: 100%;
  display: flex;
  gap: 20px;
`

export const LeftCardOfBottomPart = styled(BaseCard)`
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 1.3rem;
  font-weight: bold;
`

export const RightSideOfBottomPart = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const TopCardOfRightSide = styled(BaseCard)`
  height: 50%;
  display: flex;

  .top_card_of_right_side_infos {
    height: 100%;
    display: flex;
    flex-direction: column;

    .biggest_donation_title {
      font-size: 1.3rem;
      font-weight: bold;
      margin-bottom: 30px;
    }

    .biggest_donation_value {
      font-size: 1.6rem;
      font-weight: bold;
      color: ${(props) => props.theme.blue_dark};
    }

    .biggest_donation {
      font-size: 1.3rem;
    }
  }
`

export const BottomCardOfRightSide = styled(BaseCard)`
  height: 50%;

  .bottom_card_of_right_side_infos {
    display: flex;
    flex-direction: column;

    .last_donation_title {
      font-size: 1.3rem;
      font-weight: bold;
      margin-bottom: 30px;
    }

    .last_donation_value {
      font-size: 1.6rem;
      font-weight: bold;
      color: ${(props) => props.theme.blue_dark};
    }

    .last_donation {
      font-size: 1.3rem;
    }
  }
`
