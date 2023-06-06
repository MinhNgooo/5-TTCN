import React from 'react';
import { Col } from 'react-bootstrap';
import iconEasyToUse from 'images/icon-easy-to-use.svg';
import iconMoney from 'images/icon-money.svg';
import iconSecurity from 'images/icon-security.svg';
import imgBannerRight from 'images/img-banner-right.svg';
import {
  MobileLayout,
  StyledContainer,
  WebLayout,
} from '../../../../global-styles';
import {
  AnimationButtonBuy,
  AnimationImageBannerRight,
  BannerContract,
  ButtonBuyLayout,
  LineContentBannerLeft,
  StyledImgBannerRight,
  StyledRow,
  StyledSpan,
  StyledTextBanner,
  StyledTextBtnBuy,
} from './styles';

function Banner() {
  return (
    <BannerContract fluid className="bannerContract">
      <StyledContainer>
        <StyledRow className="main-banner">
          <Col xs={12} sm={12} md={8} lg={8} xl={8}>
            <WebLayout>
              <StyledRow className="main-banner-left-header animated animate__fadeInLeft nimate__delay-2s">
                <StyledTextBanner>
                  Chứng từ điện tử khấu trừ thuế TNCN
                </StyledTextBanner>
                <StyledTextBanner> Bkav eChungtu </StyledTextBanner>
              </StyledRow>
            </WebLayout>
            <MobileLayout>
              <StyledRow className="main-banner-left-header animated animate__fadeInLeft nimate__delay-2s">
                <StyledTextBanner>
                  Chứng từ điện tử khấu trừ thuế TNCN Bkav eChungtu
                </StyledTextBanner>
              </StyledRow>
            </MobileLayout>
            <StyledRow className="main-banner-left-content">
              <LineContentBannerLeft
                className="wow fadeInLeft bounceInLeft"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
                style={{ 'animation-delay': '0.2s' }}
              >
                <img alt="" src={iconEasyToUse} />
                <StyledSpan> Dễ sử dụng nhất </StyledSpan>
              </LineContentBannerLeft>
              <LineContentBannerLeft
                className="wow fadeInLeft bounceInLeft"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
                style={{ 'animation-delay': '0.4' }}
              >
                <img alt="" src={iconMoney} />
                <StyledSpan> Tiết kiệm lên đến 80% chi phí</StyledSpan>
              </LineContentBannerLeft>
              <LineContentBannerLeft
                className="wow fadeInLeft bounceInLeft"
                data-wow-duration="2s"
                data-wow-delay="0.6s"
                style={{ 'animation-delay': '0.6s' }}
              >
                <img alt="" src={iconSecurity} />
                <StyledSpan> Bảo mật dữ liệu </StyledSpan>
              </LineContentBannerLeft>
            </StyledRow>
            <WebLayout>
              <AnimationButtonBuy
                className="for-desk wow fadeInLeft bounceInLeft"
                data-wow-duration="2s"
                data-wow-delay="0.8s"
                style={{ 'animation-delay': '0.8' }}
              >
                <div className="btn-buy">
                  <StyledTextBtnBuy href="/dat-mua?s=951111">
                    Đặt mua
                  </StyledTextBtnBuy>
                </div>
              </AnimationButtonBuy>
            </WebLayout>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={4}
            lg={4}
            xl={4}
            style={{ paddingLeft: 14, marginTop: -2 }}
          >
            <AnimationImageBannerRight className="main-banner-right wow  bounceInRight nimate__delay-3s animated">
              <StyledImgBannerRight alt="" src={imgBannerRight} />
            </AnimationImageBannerRight>
            <MobileLayout>
              <ButtonBuyLayout>
                <div className="btn-buy">
                  <StyledTextBtnBuy href="/dat-mua?s=951111">
                    Đặt mua
                  </StyledTextBtnBuy>
                </div>
              </ButtonBuyLayout>
            </MobileLayout>
          </Col>
        </StyledRow>
      </StyledContainer>
    </BannerContract>
  );
}
export default Banner;
