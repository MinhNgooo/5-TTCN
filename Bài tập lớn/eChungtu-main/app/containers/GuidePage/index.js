import React from 'react';
import { Row, Col } from 'react-bootstrap';

import imgContact from 'images/img-contact.svg';
import iconSetting from 'images/icon-setting.svg';
import iconEmail from 'images/icon-mail.svg';
import iconTelephone from 'images/icon-telephone.svg';
import { useHistory } from 'react-router-dom';
import mockDataFocus from './mockDataFocus.json';

import {
  BtnSearch,
  ContainerCustom,
  FocusHeader,
  FormSearch,
  ItemGuide,
  RowRight,
  SpanNumber,
  StyledInput,
  StyledTitle,
  StyleSpan,
  SubContent,
  SubContentCustom,
  SubContentLayout,
  SubContentLayoutCustom,
  SubContentRight,
  SubContentRow,
  SubContentRowCustom,
  SubContentRowRight,
  BodyStyled,
} from './styles';
import mockDataGuide from './mockDataGuide.json';
const GuidePage = () => {
  const history = useHistory();
  const handleRedirect = id => {
    history.push(`/tin-tuc/${id}`);
  };
  const handleRedirectGuideHtml = pathname => {
    if (pathname !== '') history.push(`/${pathname}`);
  };
  return (
    <ContainerCustom>
      <BodyStyled>
        <StyledTitle>Hướng dẫn</StyledTitle>
        <Row>
          <Col xs={12} sm={12} md={8}>
            <FormSearch className="form-search">
              <StyledInput placeholder="Nhập thông tin cần tìm kiếm" />
              <BtnSearch type="primary">Tìm kiếm</BtnSearch>
            </FormSearch>
            <SubContentLayout>
              {mockDataGuide.map(item => (
                <SubContentRow
                  onClick={() => handleRedirectGuideHtml(item.pathname)}
                >
                  <ItemGuide>
                    <SpanNumber>{item.number}</SpanNumber>
                  </ItemGuide>
                  <SubContent>{item.title}</SubContent>
                </SubContentRow>
              ))}
            </SubContentLayout>{' '}
          </Col>
          <Col xs={12} sm={12} md={4}>
            <RowRight>
              <div>
                <div className="guide-right-top">
                  <img alt="" src={imgContact} />
                </div>
                <SubContentLayoutCustom>
                  <SubContentRowCustom>
                    <img alt="" src={iconTelephone} />
                    <SubContentCustom>
                      Tư vấn: <StyleSpan>1900 54 54 14</StyleSpan>
                    </SubContentCustom>
                  </SubContentRowCustom>
                  <SubContentRowCustom>
                    <img alt="" src={iconSetting} />
                    <SubContent>
                      Hỗ trợ kỹ thuật: <StyleSpan>1900 18 54</StyleSpan>
                    </SubContent>
                  </SubContentRowCustom>
                  <SubContentRowCustom>
                    <img alt="" src={iconEmail} />
                    <SubContent>
                      Email: <StyleSpan>eChungtu@bkav.com</StyleSpan>
                    </SubContent>
                  </SubContentRowCustom>
                </SubContentLayoutCustom>{' '}
              </div>
              <div>
                <FocusHeader> Tiêu điểm </FocusHeader>
                <SubContentLayoutCustom>
                  {mockDataFocus.map(item => (
                    <SubContentRowRight onClick={() => handleRedirect(item.id)}>
                      <img
                        style={{
                          width: '79px',
                          height: '53px',
                          float: 'left',
                          marginRight: '20px',
                        }}
                        alt=""
                        src={item.thumbnail}
                      />
                      <SubContentRight>{item.title}</SubContentRight>
                    </SubContentRowRight>
                  ))}
                </SubContentLayoutCustom>{' '}
              </div>
            </RowRight>
          </Col>
        </Row>
      </BodyStyled>
    </ContainerCustom>
  );
};

export default GuidePage;
