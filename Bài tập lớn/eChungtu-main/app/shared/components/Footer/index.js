import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import logo from 'images/logo-footer.svg';
import copyring from 'images/copyring.svg';
import { StyledContainer } from '../../../global-styles';

const FooterLayout = styled.div`
  width: 100%;
  font-style: normal;
  display: block;
  font-family: ${props => props.theme.fontFamily.openSans};
  display: block;
  background: ${props => props.theme.background.footer};
  color: ${props => props.theme.fontColor.white};
  height: 200px;
  @media (max-width: 768px) {
    height: 304px;
  }
`;

const ImageLogo = styled.div`
  margin-top: 49px;
  margin-bottom: 28.17px;

  @media (max-width: 768px) {
    margin-top: 35px;
    margin-bottom: 18.18px;
    img {
      width: 244.14px;
      height: 28px;
    }
  }
`;

const TextLayout = styled.div`
  font-size: 13px;
  font-weight: 400;
  line-height: 15px;
  margin-bottom: 33.92px;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 13.82px;
  }
`;

const LinkStyled = styled.a`
  color: ${props => props.theme.fontColor.white};
  text-decoration: none;
  :hover {
    color: #c5dbfc;
  }
  @media (max-width: 768px) {
    line-height: 20px;
  }
`;

const InfoStyled = styled.p`
  font-style: normal;
  font-family: ${props => props.theme.fontFamily.openSans};
  font-weight: 400;
  font-size: 13px;
  line-height: 30px;
  margin: 0px;
  text-align: right;
  @media (max-width: 768px) {
    text-align: left;
    font-size: 12px;
    line-height: 20px;
  }
`;

const CopyStyled = styled.div`
  height: 25px;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  @media (max-width: 768px) {
    line-height: 15px;
    font-size: 12px;
  }
`;

const ContentRightFooter = styled(Row)`
  margin-top: 64px !important;
  .for-mobile {
    display: none;
  }
  @media (max-width: 768px) {
    margin-top: 0px !important;
    .for-des {
      display: none;
    }
    .for-mobile {
      display: inline;
    }
  }
`;

const ColRight = styled(Col)`
  padding-left: 68px;

  @media (max-width: 768px) {
    padding-left: 0px;
  }
`;

function Footer() {
  return (
    <FooterLayout>
      <StyledContainer>
        <Row>
          <Col xs={12} sm={12} md={4}>
            <ImageLogo>
              <img src={logo} alt="logo" />
            </ImageLogo>
            <TextLayout>
              <CopyStyled>
                <img
                  src={copyring}
                  alt="copyring"
                  style={{ paddingBottom: '4px' }}
                />
                <span>1995 - 2021 Bkav Corporation</span>
              </CopyStyled>
              <LinkStyled href="#" about="">
                Điều khoản bảo mật
              </LinkStyled>
              <span> | </span>
              <LinkStyled href="/dieu-khoan-su-dung" about="">
                Điều khoản sử dụng
              </LinkStyled>
              <span> | </span>
              <LinkStyled href="/lien-he" about="">
                Liên hệ
              </LinkStyled>
            </TextLayout>
          </Col>
          <ColRight xs={12} sm={12} md={8}>
            <ContentRightFooter>
              <InfoStyled className="for-des">
                Tập đoàn công nghệ Bkav - Điện thoại: (84-24) 3763 2552, Email:
                Bkav@bkav.com.vn
              </InfoStyled>
              <InfoStyled className="for-mobile">
                <span style={{ lineHeight: '26px' }}>
                  TẬP ĐOÀN CÔNG NGHỆ BKAV
                </span>{' '}
                <br /> Điện thoại: (84-24) 3763 2552, Email: Bkav@bkav.com.vn
              </InfoStyled>
              <InfoStyled>
                Địa chỉ: Tầng 2 - Tòa nhà HH1 - Khu đô thị Yên Hòa - Phường Yên
                Hòa - Cầu Giấy - Hà Nội
              </InfoStyled>
              <InfoStyled>
                Giấy chứng nhận ĐKKD số 0101360697 do Sở Kế hoạch và đầu tư
                Thành Phố Hà Nội cấp lần đầu ngày 17/04/2003
              </InfoStyled>
            </ContentRightFooter>
          </ColRight>
        </Row>
      </StyledContainer>
    </FooterLayout>
  );
}

export default Footer;
