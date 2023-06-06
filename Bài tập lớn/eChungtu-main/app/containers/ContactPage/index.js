import React from 'react';
import { Row } from 'react-bootstrap';
import ChatSVG from '../../images/chat.svg';
import LetterSVG from '../../images/letter.svg';
import GearSVG from '../../images/gear.svg';
import LocationSVG from '../../images/location.svg';

import {
  StyledTitle,
  StyledCol,
  StyledCategoryTitle,
  CategoryContainer,
  CategoryItemContainer,
  StyledCategoryTitleRight,
} from './styles';
import { StyledContainer } from '../../global-styles';

const ContactPage = () => (
  <StyledContainer>
    <StyledTitle>Liên hệ</StyledTitle>
    <Row style={{ marginBottom: '-27px' }}>
      <StyledCol xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
        <StyledCategoryTitle>
          Trung tâm hỗ trợ khách hàng Bkav eChungtu
        </StyledCategoryTitle>
        <CategoryContainer>
          <CategoryItemContainer>
            <span className="icon mgr-17">
              <img src={ChatSVG} alt="" />
            </span>
            <span className="text">
              <span>Tư vấn: </span>
              <span className="bold">1900 54 54 14</span>
            </span>
          </CategoryItemContainer>
          <CategoryItemContainer>
            <span className="icon">
              <img src={GearSVG} alt="" />
            </span>
            <span className="text">
              <span>Hỗ trợ kỹ thuật: </span>
              <span className="bold">1900 18 54</span>
            </span>
          </CategoryItemContainer>
          <CategoryItemContainer>
            <span className="icon">
              <img src={LetterSVG} alt="" />
            </span>
            <span className="text">
              <span>Email: </span>
              <span className="bold">eChungtu@bkav.com</span>
            </span>
          </CategoryItemContainer>
        </CategoryContainer>
      </StyledCol>
      <StyledCol xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
        <StyledCategoryTitleRight>
          Liên hệ các vấn đề khác
        </StyledCategoryTitleRight>
        <CategoryContainer>
          <CategoryItemContainer>
            <span className="icon sm" style={{ paddingLeft: '3px' }}>
              <img src={LocationSVG} alt="" />
            </span>
            <span className="text">
              <span className="bold">Tập đoàn Bkav: </span>
              <span>
                Toà nhà HH1, Khu đô thị Yên Hoà, Phường Yên Hoà, Cầu Giấy, Hà
                Nội
              </span>
            </span>
          </CategoryItemContainer>
        </CategoryContainer>
      </StyledCol>
    </Row>
  </StyledContainer>
);

export default ContactPage;
