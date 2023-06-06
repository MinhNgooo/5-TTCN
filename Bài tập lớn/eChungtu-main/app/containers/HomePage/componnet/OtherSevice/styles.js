import styled from 'styled-components';

export const OtherServiceContainer = styled.div`
  background: white;
  padding-top: 60px;
  padding-bottom: 83px;

  @media (max-width: 768px) {
    padding-top: 36px;
    padding-bottom: 33px;
  }
`;

export const Title = styled.p`
  font-family: ${props => props.theme.fontFamily.openSans};
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 45px;
  margin: 0;
  color: #3a3a3a;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 26px;
  }
  animation-duration: 2s;
  animation-name: cusFadeInUp;
`;

export const RowCustom = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 27px;

  @media (max-width: 768px) {
    margin-top: 26px;
    gap: 16px;
  }
  animation-duration: 2s;
  animation-name: cusFadeInUp;
`;

export const ItemLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 170px;
  height: 170px;
  align-items: center;
  margin-top: 3px;

  @media (max-width: 768px) {
    width: 156px;
    height: 130px;
    margin-top: 0;
  }
  cursor: pointer;
`;

export const IconLayout = styled.div`
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 108px;
  }
`;

export const Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  color: #191919;
  height: 60px;
  padding: 0 5px;

  @media (max-width: 768px) {
    height: 48px;
    font-size: 16px;
    line-height: 24px;
    padding: 0;
  }
`;
