import React from 'react';
import { Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { CustomerImg, CustomerListContainer, RowCustom, Title } from './styles';
import {
  MobileLayout,
  StyledContainer,
  WebLayout,
} from '../../../../global-styles';
import iconHoaSenCustomer from '../../../../images/iconHoaSenCustomer.svg';
import iconRedsunCustomer from '../../../../images/iconrRedsunCustomer.svg';
import iconPizzahutCustomer from '../../../../images/iconPizzaHutCustomer.svg';
import iconHighlandsCoffeeCustomer from '../../../../images/iconHighlandCoffeeCustomer.svg';
import iconJollibeeCustomer from '../../../../images/iconJollibeeCustomer.svg';
import iconDNSECustomer from '../../../../images/iconDNSECustomer.svg';
// import iconFunanCustomer from '../../../../images/iconFunanCustomer.svg';
import iconSonHaCustomer from '../../../../images/iconSonHaCustomer.svg';
// import iconVietinBankCustomer from '../../../../images/iconVietinBankCustomer.svg';
// import iconDongABankCustomer from '../../../../images/iconDongABankCustomer.svg';
import iconDaikinCustomer from '../../../../images/iconDaikinCustomer.svg';
// import iconPinetreeCustomer from '../../../../images/iconPinetreeCustomer.svg';
import logoMasCom from '../../../../images/logoMasCom.svg';
import logoHIPT from '../../../../images/logoHIPT.svg';
import logoNamDuoc from '../../../../images/logoNamDuoc.svg';
import logoSapporo from '../../../../images/logoSapporo.svg';
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';

const CustomerList = () => (
  <CustomerListContainer>
    <StyledContainer>
      <Row>
        <Title className="wow cusFadeInUp animated">Khách hàng tiêu biểu</Title>
      </Row>
      <WebLayout>
        <RowCustom className="wow cusFadeInUp animated">
          <CustomerImg alt="" src={iconHoaSenCustomer} />
          <CustomerImg alt="" src={iconRedsunCustomer} />
          <CustomerImg alt="" src={iconPizzahutCustomer} />
          <CustomerImg alt="" src={iconHighlandsCoffeeCustomer} />
          <CustomerImg alt="" src={iconJollibeeCustomer} />
          <CustomerImg alt="" src={iconDNSECustomer} />
          <CustomerImg alt="" src={logoMasCom} />
          <CustomerImg alt="" src={iconSonHaCustomer} />
          <CustomerImg alt="" src={logoHIPT} />
          <CustomerImg alt="" src={logoNamDuoc} />
          <CustomerImg alt="" src={iconDaikinCustomer} />
          <CustomerImg alt="" src={logoSapporo} />
        </RowCustom>
      </WebLayout>
      <MobileLayout>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <RowCustom className="wow cusFadeInUp animated">
              <CustomerImg alt="" src={iconHoaSenCustomer} />
              <CustomerImg alt="" src={iconRedsunCustomer} />
              <CustomerImg alt="" src={iconPizzahutCustomer} />
              <CustomerImg alt="" src={iconHighlandsCoffeeCustomer} />
              <CustomerImg alt="" src={iconJollibeeCustomer} />
              <CustomerImg alt="" src={iconDNSECustomer} />
            </RowCustom>
          </SwiperSlide>
          <SwiperSlide>
            <RowCustom className="wow cusFadeInUp animated">
              <CustomerImg alt="" src={logoMasCom} />
              <CustomerImg alt="" src={iconSonHaCustomer} />
              <CustomerImg alt="" src={logoHIPT} />
              <CustomerImg alt="" src={logoNamDuoc} />
              <CustomerImg alt="" src={iconDaikinCustomer} />
              <CustomerImg alt="" src={logoSapporo} />
            </RowCustom>
          </SwiperSlide>
        </Swiper>
      </MobileLayout>
    </StyledContainer>
  </CustomerListContainer>
);

export default CustomerList;
