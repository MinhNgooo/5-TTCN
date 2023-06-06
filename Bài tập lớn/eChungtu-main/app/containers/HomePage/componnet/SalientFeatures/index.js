import React from 'react';
import { Col, Row } from 'react-bootstrap';
import iconCompletelyOnline from 'images/icon-completely-online.svg';
import iconSupport from 'images/icon-support.svg';
import iconGuide from 'images/icon-guide.svg';
import iconPermission from 'images/icon-permission.svg';
import {
  MobileLayout,
  StyledContainer,
  WebLayout,
} from '../../../../global-styles';
import {
  BoxFeature,
  IconFeature,
  ListFeature,
  RowCustom,
  TextFeature,
  TextHeader,
} from './styles';

function SalientFeatures() {
  return (
    <StyledContainer>
      <Row>
        <Col>
          <TextHeader className="txtHeadFeature wow cusFadeInUp   animated">
            Tính năng nổi bật của Bkav eChungtu
          </TextHeader>
        </Col>
      </Row>
      <RowCustom>
        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
          <ListFeature className="listFeature wow cusFadeInUp   animated">
            <BoxFeature className="boxFeature leftBox-col1">
              <IconFeature className="iconFeature">
                <img alt="" src={iconCompletelyOnline} />
              </IconFeature>
              <WebLayout>
                <TextFeature className="textContent">
                  Hoàn toàn online <br /> Không cần cài đặt
                </TextFeature>
              </WebLayout>
              <MobileLayout>
                <TextFeature className="textContent">
                  Hoàn toàn online Không cần cài đặt
                </TextFeature>
              </MobileLayout>
            </BoxFeature>
            <BoxFeature className="boxFeature rightBox-col1">
              <IconFeature className="icon">
                <img alt="" src={iconSupport} />
              </IconFeature>
              <WebLayout>
                <TextFeature className="textContent">
                  Hỗ trợ đầy đủ các <br /> nghiệp vụ như Chứng từ giấy
                </TextFeature>
              </WebLayout>
              <MobileLayout>
                <TextFeature className="textContent">
                  Hỗ trợ đầy đủ các nghiệp vụ như Chứng từ giấy
                </TextFeature>
              </MobileLayout>
            </BoxFeature>
          </ListFeature>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
          <ListFeature className="listFeature wow cusFadeInUp   animated">
            <BoxFeature className="boxFeature leftBox-col2">
              <IconFeature className="icon">
                <img alt="" src={iconGuide} />
              </IconFeature>
              <WebLayout>
                <TextFeature className="textContent">
                  Hướng dẫn tối đa ngay <br /> trên giao diện người dùng
                </TextFeature>
              </WebLayout>
              <MobileLayout>
                <TextFeature className="textContent">
                  Hướng dẫn tối đa ngay trên giao diện người dùng
                </TextFeature>
              </MobileLayout>
            </BoxFeature>
            <BoxFeature className="boxFeature rightBox-col2">
              <IconFeature className="icon">
                <img alt="" src={iconPermission} />
              </IconFeature>
              <WebLayout>
                <TextFeature className="textContent">
                  Phân quyền chi tiết đến <br /> từng chức năng/Người sử dụng
                </TextFeature>
              </WebLayout>
              <MobileLayout>
                <TextFeature className="textContent">
                  Phân quyền chi tiết đến từng chức năng/Người sử dụng
                </TextFeature>
              </MobileLayout>
            </BoxFeature>
          </ListFeature>
        </Col>
      </RowCustom>
    </StyledContainer>
  );
}

export default SalientFeatures;
