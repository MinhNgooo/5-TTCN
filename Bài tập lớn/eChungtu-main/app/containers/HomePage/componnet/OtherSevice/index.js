import React from 'react';
import { Row } from 'react-bootstrap';
import {
  IconLayout,
  ItemLayout,
  OtherServiceContainer,
  RowCustom,
  Text,
  Title,
} from './styles';
import { StyledContainer } from '../../../../global-styles';
import iconEHoadon from '../../../../images/iconEHoadon.svg';
import iconEkyc from '../../../../images/iconEkyc.svg';
import iconNOP from '../../../../images/iconNOP.svg';
import iconEContract from '../../../../images/iconEContract.svg';
import iconAI from '../../../../images/iconAI.svg';

const OtherService = () => (
  <OtherServiceContainer>
    <StyledContainer>
      <Row>
        <Title className="wow cusFadeInUp animated">Dịch vụ khác</Title>
      </Row>
      <RowCustom className="wow cusFadeInUp animated">
        <ItemLayout>
          <IconLayout
            onClick={() => {
              window.open('https://www.bkav.com.vn/ehoadon/', '_parent');
            }}
          >
            <img alt="" src={iconEHoadon} />
          </IconLayout>
          <Text>Dịch vụ hóa đơn điện tử</Text>
        </ItemLayout>
        <ItemLayout
          onClick={() => {
            window.open('https://bkavca.vn/', '_parent');
          }}
        >
          <IconLayout>
            <img alt="" src={iconEkyc} />
          </IconLayout>
          <Text>Dịch vụ chữ ký số</Text>
        </ItemLayout>
        <ItemLayout
          onClick={() => {
            window.open('https://noptokhai.vn/ivan', '_parent');
          }}
        >
          <IconLayout>
            <img alt="" src={iconNOP} />
          </IconLayout>
          <Text>Dịch vụ bảo hiểm xã hội</Text>
        </ItemLayout>
        <ItemLayout
          onClick={() => {
            window.open('https://econtract.vn', '_parent');
          }}
        >
          <IconLayout>
            <img alt="" src={iconEContract} />
          </IconLayout>
          <Text>Dịch vụ hợp đồng điện tử</Text>
        </ItemLayout>
        <ItemLayout
          onClick={() => {
            window.open('https://noptokhai.vn/tvan', '_parent');
          }}
        >
          <IconLayout>
            <img alt="" src={iconNOP} />
          </IconLayout>
          <Text>Dịch vụ thuế điện tử</Text>
        </ItemLayout>
        <ItemLayout
          onClick={() => {
            window.open('https://aibooks.vn', '_parent');
          }}
        >
          <IconLayout>
            <img alt="" src={iconAI} />
          </IconLayout>
          <Text>Phần mềm kế toán</Text>
        </ItemLayout>
      </RowCustom>
    </StyledContainer>
  </OtherServiceContainer>
);

export default OtherService;
