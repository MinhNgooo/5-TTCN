import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  ArrowButtonMore,
  ButtonMore,
  ContentLayout,
  ContentTitle,
  NewsContainer,
  CustomRow,
  SubContent,
  SubContentLayout,
  SubContentRow,
  Title,
  LinkStyled,
  ImgNews,
} from './styles';
import { StyledContainer } from '../../../../global-styles';
import iconArrowList from '../../../../images/arrowList.svg';
import iconArrowButton from '../../../../images/arrowButton.svg';
import imgNews from '../../../../images/imgNews.svg';

const News = () => (
  <NewsContainer>
    <StyledContainer>
      <Row style={{ justifyContent: 'center' }}>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <Title className="wow cusFadeInUp animated">Tin tức</Title>
        </Col>
      </Row>
      <CustomRow className="wow cusFadeInUp animated">
        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
          <ImgNews alt="" src={imgNews} />
        </Col>
        <Col xs={0} sm={0} md={0} lg={1} xl={1} />
        <Col xs={12} sm={12} md={12} lg={5} xl={5}>
          <ContentLayout>
            <a href="/tin-tuc/bkav-ra-mat-nen-tang-chung-tu-khau-tru-thue-thu-nhap-ca-nhan-dien-tu">
              <ContentTitle>
                Bkav ra mắt nền tảng Chứng từ khấu trừ thuế thu nhập cá nhân
                điện tử
              </ContentTitle>
            </a>
            <SubContentLayout>
              <SubContentRow>
                <img alt="" src={iconArrowList} />
                <SubContent>
                  <LinkStyled href="/tin-tuc/da-nang-lap-duong-day-nong-ve-hoa-don-dien-tu">
                    Đà Nẵng lập đường dây nóng về hóa đơn điện tử
                  </LinkStyled>
                </SubContent>
              </SubContentRow>
              <SubContentRow>
                <img alt="" src={iconArrowList} />
                <SubContent>
                  <LinkStyled href="/tin-tuc/thu-tuong-chinh-phu-danh-gia-cao-bieu-duong-Bo-Tai-chinh-va-cuc-thue">
                    Thủ tướng Chính phủ đánh giá cao, biểu dương Bộ Tài chính và
                    Tổng cục Thuế
                  </LinkStyled>
                </SubContent>
              </SubContentRow>
            </SubContentLayout>
            <ButtonMore
              onClick={() => {
                window.open('/tin-tuc', '_parent');
              }}
            >
              Xem thêm
              <ArrowButtonMore alt="" src={iconArrowButton} />
            </ButtonMore>
          </ContentLayout>
        </Col>
      </CustomRow>
    </StyledContainer>
  </NewsContainer>
);

export default News;
