import React from 'react';
import { useSelector } from 'react-redux';
import { Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { selectOrderInformation } from './selectors';
import { StyledContainer } from '../../global-styles';
import {
  ContactRow,
  ContentInfo,
  ContentSupport,
  HeaderInfo,
  RowInfo,
  SpanPhone,
  TextContact,
  StyledCol,
  StyledTitle,
} from './styleOrderInformation';

function OrderInformation() {
  const history = useHistory();
  const orderInformation = useSelector(selectOrderInformation());
  return (
    <StyledContainer>
      {orderInformation === null ? (
        history.push('/dat-mua')
      ) : (
        <>
          <StyledTitle>
            Cảm ơn bạn đã đặt mua phần mềm Bkav eChungtu
          </StyledTitle>
          <Row>
            <StyledCol>
              <div>
                <div>
                  <HeaderInfo className="success-head-title mb-4">
                    Thông tin đặt mua của bạn như sau:
                  </HeaderInfo>
                  <RowInfo>
                    Họ tên:
                    <ContentInfo>{orderInformation.customerName}</ContentInfo>
                  </RowInfo>
                  <RowInfo>
                    Số điện thoại:
                    <ContentInfo>{orderInformation.phone}</ContentInfo>
                  </RowInfo>
                  <RowInfo>
                    Tỉnh/Thành phố:
                    <ContentInfo>{orderInformation.address}</ContentInfo>
                  </RowInfo>
                  <RowInfo>
                    Gói cước:
                    <ContentInfo>{orderInformation.packName}</ContentInfo>
                  </RowInfo>
                  <RowInfo>
                    Thành tiền:
                    <ContentInfo style={{ fontFamily: 'Open Sans Bold' }}>
                      {`${orderInformation.stringMoney} VND`}
                    </ContentInfo>
                  </RowInfo>
                </div>
                <div>
                  <TextContact>
                    Bkav sẽ liên hệ với bạn để xác nhận thông tin và cấp tài
                    khoản sử dụng <br />
                    Phần mềm Bkav eChungtu
                  </TextContact>
                </div>
                <hr />
                <Row className="col-12 mb-5">
                  <div>
                    <strong>Trung tâm hỗ trợ khách hàng Bkav eChungtu</strong>
                    <ContentSupport>
                      <div>
                        Tư vấn dịch vụ: <span>1900 54 54 14</span>
                      </div>
                    </ContentSupport>
                    <ContentSupport>
                      <div>
                        Hỗ trợ kỹ thuật: <span>1900 18 54</span>
                      </div>
                    </ContentSupport>
                    <ContentSupport className="fax">
                      Fax: (024) 3782 2139
                    </ContentSupport>
                  </div>
                  <ContactRow>
                    <strong className="contact-1">
                      Liên hệ các vấn đề khác
                    </strong>{' '}
                    <br />
                    <strong className="contact-1">Bkav Corporation</strong>
                    <ContentSupport>
                      Địa chỉ: Tòa nhà Bkav, Khu đô thị Yên Hòa, Cầu Giấy, Hà
                      Nội
                    </ContentSupport>
                    <ContentSupport>
                      Điện thoại:
                      <SpanPhone>(024) 3868 4755</SpanPhone>
                    </ContentSupport>
                    <ContentSupport>
                      Email: <a href="mailto:bkav@bkav.com">Bkav@bkav.com</a>
                    </ContentSupport>
                    <ContentSupport>
                      Fax: <SpanPhone>(024) 3868 4755</SpanPhone>
                    </ContentSupport>
                  </ContactRow>
                </Row>
              </div>
            </StyledCol>
          </Row>
        </>
      )}
    </StyledContainer>
  );
}

export default OrderInformation;
