import styled from 'styled-components';

export const CustomerReviewContainer = styled.div`
  background: white;
  padding-top: 60px;
  padding-bottom: 80px;

  @media (max-width: 768px) {
    padding: 36px 0;
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
  margin-top: 60px;
  justify-content: space-between;
  padding-left: 1px;

  @media (max-width: 768px) {
    margin-top: 34px;
  }
`;

export const Arrow = styled.img`
  padding-top: 117px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ReviewLayout = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 65px 0;
  }
  animation-duration: 2s;
  animation-name: cusFadeInUp;
`;

export const ReviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 163px;
  height: 163px;
  margin-bottom: -27px;

  @media (max-width: 768px) {
    width: 107px;
    height: 107px;
    margin-bottom: -20px;
  }
`;

export const Label = styled.div`
  display: flex;
  background: #ff6e01;
  border-radius: 50px;
  flex-direction: column;
  width: 100%;
  max-width: 370px;
  height: 87px;
  padding-top: 15px;
  z-index: 1;

  @media (max-width: 768px) {
    height: 60px;
    max-width: 242px;
    padding-top: 5px;
  }
`;

export const Name = styled.div`
  color: white;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Position = styled(Name)`
  font-weight: 200;
  font-size: 17px;
`;

export const Comment = styled.div`
  background: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 20px;
  padding: 74px 43px 26px 43px;
  min-height: 437px;
  max-width: 500px;
  margin-top: -48px;

  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  text-align: justify;
  color: #191919;

  @media (max-width: 768px) {
    padding: 48px 28px 32px 28px;
    margin-top: -32px;
    font-size: 16px;
    line-height: 27px;
  }
`;
