import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  ColCustom,
  Icon,
  InfoLayout,
  OutstandingNumbersContainer,
  RowCustom,
  SubText,
  Text,
  Title,
} from './styles';
import { StyledContainer } from '../../../../global-styles';
import iconOutstandingNumberLeft from '../../../../images/iconOutstandingNumberLeft.svg';
import iconOutstandingNumberRight from '../../../../images/iconOutstandingNumberRight.svg';

const OutstandingNumbers = () => (
  <OutstandingNumbersContainer>
    <StyledContainer>
      <Row>
        <Title>Những con số nổi bật</Title>
      </Row>
      <RowCustom>
        <Col xs={0} sm={0} md={0} lg={2} xl={2} />
        <ColCustom
          xs={8}
          sm={10}
          md={4}
          lg={3}
          xl={3}
          className="wow bounceInLeft"
          style={{ 'animation-name': 'bounceInLeft' }}
        >
          <Icon alt="" src={iconOutstandingNumberLeft} />
          <InfoLayout>
            <Text>Hàng trăm nghìn</Text>
            <SubText>chứng từ được phát hành</SubText>
          </InfoLayout>
        </ColCustom>

        <Col xs={0} sm={0} md={2} lg={2} xl={2} />
        <ColCustom
          xs={8}
          sm={10}
          md={4}
          lg={3}
          xl={3}
          className="wow bounceInRight"
          style={{ 'animation-name': 'bounceInRight' }}
        >
          <Icon alt="" src={iconOutstandingNumberRight} />
          <InfoLayout>
            <Text>10.000</Text>
            <SubText>khách hàng đang sử dụng</SubText>
          </InfoLayout>
        </ColCustom>
        <Col xs={0} sm={0} md={0} lg={2} xl={2} />
      </RowCustom>
    </StyledContainer>
  </OutstandingNumbersContainer>
);

export default OutstandingNumbers;
