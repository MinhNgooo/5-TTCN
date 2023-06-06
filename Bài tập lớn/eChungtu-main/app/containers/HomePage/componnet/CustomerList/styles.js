import styled from 'styled-components';

export const CustomerListContainer = styled.div`
  background: #e9fbff;
  padding-top: 60px;
  padding-bottom: 71px;

  @media (max-width: 768px) {
    padding: 36px 0 14px 0;
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
  gap: 30px;
  margin-top: 62px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 16px;
    margin-top: 36px;
    margin-bottom: 44px;
  }
  animation-duration: 2s;
  animation-name: cusFadeInUp;
`;

export const CustomerImg = styled.img`
  width: 170px;
  height: 170px;

  @media (max-width: 768px) {
    width: 156px;
    height: 156px;
  }
`;
