import styled from 'styled-components';

const StyledTitle = styled.div`
  font-family: ${props => props.theme.fontFamily.openSans};
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 41px;
  margin-bottom: 60px;
  margin-left: -2px;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 27px;
    margin-top: 36px;
    margin-bottom: 48px;
  }
`;

const BodyStyled = styled.div`
  font-family: ${props => props.theme.fontFamily.openSans};
  margin-left: 0px;
  margin-top: 60px;
  margin-bottom: 80px;
  @media only screen and (max-width: 768px) {
    margin-bottom: 78px;
  }
`;

const TextBold = styled.div`
  font-family: ${props => props.theme.fontFamily.openSans};
  font-weight: 700;
  line-height: 32px;
  font-size: 18px;
  margin-bottom: 16px;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
    font-weight: 600;
    line-height: 30px;
  }
`;

const TextNormal = styled.div`
  font-family: ${props => props.theme.fontFamily.openSans};
  line-height: 30px;
  font-size: 18px;
  margin-bottom: 12px;
  padding-left: 18px;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
    font-weight: 600;
    line-height: 28;
  }
`;

export { StyledTitle, BodyStyled, TextBold, TextNormal };
