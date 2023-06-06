import styled from 'styled-components';
import banner from 'images/banner.svg';
import { Container, Row } from 'react-bootstrap';
export const BannerContract = styled(Container)`
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${banner});
  background-size: cover;
  color: white;
  padding-bottom: 26px;

  @media (max-width: 768px) {
    padding: 26px 20px 34px 20px;
  }
`;

export const StyledRow = styled(Row)`
  max-width: 1170px !important;
  position: relative !important;
  top: 3px !important;

  @media (max-width: 768px) {
    top: 0 !important;
  }

  .main-banner-left-content {
    padding-top: 28px;
    display: flex;
    gap: 18px 0;

    @media (max-width: 768px) {
      padding-top: 20px;
      gap: 12px 0;
    }
  }
  .for-desk {
    padding-top: 45px;
  }
  .btn-buy {
    width: 112px !important;
    height: 43px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ff6e01;
    border-radius: 7px;
    cursor: pointer;

    @media (max-width: 768px) {
      width: 122px !important;
      height: 39px;
      border: 0.5px solid #ffffff;
      border-radius: 6px;
    }
  }
  .btn-buy:hover {
    background: #007bff;
  }

  .animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
`;

export const StyledTextBanner = styled.div`
  font-size: ${props => props.theme.fontSizesWeb.banner} !important;
  font-weight: ${props => props.theme.fontWeightWeb.banner} !important;
  font-family: ${props => props.theme.fontFamily.banner} !important;
  line-height: 50px;

  @media (max-width: 768px) {
    font-weight: ${props => props.theme.fontWeightWeb.banner} !important;
    font-size: 20px !important;
    line-height: 32px;
    padding-right: unset !important;
  }
`;
export const LineContentBannerLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0 23px;
  font-family: ${props => props.theme.fontFamily.banner} !important;
  img {
    width: 38px;
    height: 38px;
  }

  @media (max-width: 768px) {
    gap: 0 15px;

    img {
      width: 28px;
      height: 28px;
    }
  }
  animation-duration: 2s;
  animation-name: fadeInLeft;
  @-webkit-keyframes fadeInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-20px);
      transform: translateX(-20px);
    }

    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-20px);
      -ms-transform: translateX(-20px);
      transform: translateX(-20px);
    }

    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -ms-transform: translateX(0);
      transform: translateX(0);
    }
  }
  .fadeInLeft {
    -webkit-animation-name: fadeInLeft;
    animation-name: fadeInLeft;
  }
`;

export const AnimationButtonBuy = styled.div`
  animation-duration: 2s;
  animation-name: fadeInLeft;
  @-webkit-keyframes fadeInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-20px);
      transform: translateX(-20px);
    }

    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-20px);
      -ms-transform: translateX(-20px);
      transform: translateX(-20px);
    }

    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
      -ms-transform: translateX(0);
      transform: translateX(0);
    }
  }
  .fadeInLeft {
    -webkit-animation-name: fadeInLeft;
    animation-name: fadeInLeft;
  }
`;

export const StyledTextBtnBuy = styled.a`
  color: white;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  :hover {
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const AnimationImageBannerRight = styled.div`
  animation-duration: 1.5s !important;
  animation-delay: 0.6s;
  animation-name: bounceInRight;

  @media (max-width: 768px) {
    margin-top: 12px;
    display: flex;
    justify-content: center;
  }
`;

export const StyledImgBannerRight = styled.img`
  position: relative;
  left: 22%;

  @media (max-width: 768px) {
    width: 226px;
    left: 0;
  }
`;

export const StyledSpan = styled.span`
  font-weight: 600;
  font-size: 22px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ButtonBuyLayout = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  width: 100%;
`;
