import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';
import backgroundOutstandingNumbers from '../../../../images/backgroundOutstandingNumbers.svg';

export const OutstandingNumbersContainer = styled.div`
  background: url(${backgroundOutstandingNumbers}) no-repeat;
  background-size: cover;
  padding-top: 60px;
  padding-bottom: 161px;

  @media (max-width: 768px) {
    padding-top: 36px;
    padding-bottom: 66px;
  }
`;

export const Title = styled.p`
  font-family: ${props => props.theme.fontFamily.openSans};
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 45px;
  margin: 0;
  color: white;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 26px;
  }
  animation-duration: 2s;
  animation-name: cusFadeInUp;
`;

export const RowCustom = styled(Row)`
  margin-top: 104px !important;
  justify-content: center;
  gap: 20px 0;

  @media (max-width: 768px) {
    margin-top: 8px !important;
    gap: 0;
  }
`;

export const ColCustom = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 38px !important;
  }
  animation-duration: 2s;
`;

export const Icon = styled.img`
  width: 86px;
  height: 86px;
  margin-bottom: -43px;
  z-index: 1;

  @media (max-width: 768px) {
    width: 66px;
    height: 66px;
    margin-bottom: -33px;
  }
`;

export const InfoLayout = styled.div`
  background: white;
  border-radius: 10px;
  padding: 54px 15px 38px 15px;
  min-width: 270px;
  min-height: 161px;

  @media (max-width: 768px) {
    padding: 36px 15px 30px 15px;
    min-width: 206px;
    min-height: 123px;
  }
`;

export const Text = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 30px;
  text-align: center;
  color: #ff6e01;

  @media (max-width: 768px) {
    font-size: 21px;
    line-height: 24px;
  }
`;

export const SubText = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  color: #191919;
  margin-top: 9px;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 24px;
  }
`;
