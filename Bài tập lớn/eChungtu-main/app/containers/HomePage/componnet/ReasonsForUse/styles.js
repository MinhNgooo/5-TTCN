import styled from 'styled-components';
import { Container, Col, Row } from 'react-bootstrap';

export const ReasonsContainer = styled(Container)`
  padding-bottom: 31px;
  background-color: #e9fbff;

  @media (max-width: 768px) {
    padding: 0 13px !important;
  }
`;

export const TextHeader = styled.div`
  font-size: ${props => props.theme.fontSizesWeb.banner} !important;
  font-weight: ${props => props.theme.fontWeightWeb.header} !important;
  text-align: center;
  margin-top: 60px;
  margin-bottom: 50px;
  color: #3a3a3a;
  line-height: 130%;

  @media (max-width: 768px) {
    font-size: 20px !important;
    line-height: 26px;
    margin: 32px 0;
    padding: 0 40px;
  }
  animation-duration: 2s;
  animation-name: cusFadeInUp;
`;

export const RowContainer = styled(Row)`
  padding-top: 45.36px;

  @media (max-width: 768px) {
    padding-top: 36px;
  }
  animation-duration: 2s;
  animation-name: cusFadeInUp;
`;

export const RowContainer2 = styled(Row)`
  padding-top: 52px;

  @media (max-width: 768px) {
    padding-top: 0;
    margin-top: 0 !important;
    margin-bottom: -34px;
  }
  animation-duration: 2s;
  animation-name: cusFadeInUp;
`;

export const StyledCol = styled(Col)`
  padding: 0 15px !important;

  @media (max-width: 768px) {
    padding: 0 !important;
  }
`;

export const BoxReason = styled.div`
  //padding-top: 44px;
`;

export const BoxUse = styled.div`
  text-align: center;
  background: #ffffff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 10px;
  height: 267px;
  margin-bottom: 25px;

  @media (max-width: 768px) {
    margin-bottom: 0;
    height: 236px;
  }
`;

export const NumberImg = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 0;
  right: 0;
  top: -35px;
  img {
    width: 70px;
    height: 71px;
  }

  @media (max-width: 768px) {
    width: 62px;
    height: 62px;
    top: -31px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const TitleBox = styled.div`
  color: #007cba;
  font-family: ${props => props.theme.fontFamily.openSans};
  font-weight: 600;
  font-size: 22px;
  position: relative;
  bottom: 24px;
  line-height: 130%;

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 26px;
    bottom: 20px;
  }
`;

export const ImgBox1 = styled.div`
  position: relative;
  right: 7px;
  bottom: 7px;
  img {
    width: 141px;
    height: 142px;
  }

  @media (max-width: 768px) {
    right: 10px;
    bottom: 12px;

    img {
      width: 130px;
    }
  }
`;

export const ImgBox2 = styled.div`
  position: relative;
  bottom: 21px;
  img {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 768px) {
    bottom: 12px;

    img {
      width: 130px;
    }
  }
`;

export const ImgBox3 = styled.div`
  position: relative;
  left: 5px;
  bottom: 5px;
  img {
    width: 138px;
    height: 139px;
  }

  @media (max-width: 768px) {
    left: 2px;
    bottom: 12px;

    img {
      width: 130px;
    }
  }
`;

export const ImgBox4 = styled.div`
  position: relative;
  right: 3px;
  bottom: 20px;
  img {
    width: 130px;
    height: 132px;
  }
  @media (max-width: 768px) {
    right: 0;
    bottom: 14px;

    img {
      width: 114px;
    }
  }
`;

export const ImgBox5 = styled.div`
  position: relative;
  bottom: 20px;
  img {
    width: 150px;
    height: 150px;
  }
  @media (max-width: 768px) {
    right: 0;
    bottom: 14px;

    img {
      width: 130px;
    }
  }
`;

export const ImgBox6 = styled.div`
  position: relative;
  left: 3px;
  bottom: 20px;
  img {
    width: 122px;
    height: 132px;
  }
  @media (max-width: 768px) {
    right: 0;
    bottom: 10px;

    img {
      width: 108px;
    }
  }
`;

export const SubContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 21px 0;
  gap: 13px 0;

  @media (max-width: 768px) {
    margin: 24px 0 67px;
    gap: 10px 0;
  }
`;
