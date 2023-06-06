import React from 'react';
import { Col, Row } from 'react-bootstrap';

import bestPrice from 'images/best-price.svg';
import reputableBrand from 'images/reputable-brand.svg';
import satisfyAllTypesEnterprise from 'images/satisfy-all types-enterprise.svg';
import dataSecurity from 'images/data-security.svg';
import easiestToUse from 'images/easiest-to-use.svg';
import fullfillTheNeeds from 'images/fullfill-the-needs.svg';
import number1 from 'images/number-1.svg';
import number2 from 'images/number-2.svg';
import number3 from 'images/number-3.svg';
import number4 from 'images/number-4.svg';
import number5 from 'images/number-5.svg';
import number6 from 'images/number-6.svg';

import {
  BoxReason,
  BoxUse,
  ImgBox1,
  ImgBox2,
  ImgBox3,
  ImgBox4,
  ImgBox5,
  ImgBox6,
  NumberImg,
  ReasonsContainer,
  RowContainer,
  RowContainer2,
  StyledCol,
  SubContentLayout,
  TextHeader,
  TitleBox,
} from './styles';
import { StyledContainer } from '../../../../global-styles';
import { SubContent, SubContentRow } from '../News/styles';
import iconArrowList from '../../../../images/arrowList.svg';

function ReasonsForUse() {
  return (
    <ReasonsContainer fluid>
      <StyledContainer>
        <Row>
          <Col>
            <TextHeader className="txtHeadFeature wow cusFadeInUp   animated">
              Vì sao nên sử dụng Bkav eChungtu
            </TextHeader>
          </Col>
        </Row>
        <RowContainer className="list1  wow cusFadeInUp   animated">
          <StyledCol xs={12} sm={12} md={4}>
            <BoxReason className="boxReason">
              <BoxUse className="boxUse">
                <NumberImg className="number">
                  <img alt="" src={number1} />
                </NumberImg>
                <TitleBox className="titleBox">Giá tốt nhất</TitleBox>
                <ImgBox1 className="imgBox1">
                  <img alt="" src={bestPrice} />
                </ImgBox1>
              </BoxUse>
              <SubContentLayout>
                <SubContentRow>
                  <img alt="" src={iconArrowList} />
                  <SubContent>Tiết kiệm lên tới 80% chi phí</SubContent>
                </SubContentRow>
                <SubContentRow>
                  <img alt="" src={iconArrowList} />
                  <SubContent>Chỉ 550 VNĐ/Chứng từ</SubContent>
                </SubContentRow>
                <SubContentRow>
                  <img alt="" src={iconArrowList} />
                  <SubContent> Không giới hạn số lượng lao động</SubContent>
                </SubContentRow>
                <SubContentRow>
                  <img alt="" src={iconArrowList} />
                  <SubContent> Đáp ứng mọi loại chứng từ </SubContent>
                </SubContentRow>
              </SubContentLayout>
            </BoxReason>
          </StyledCol>
          <StyledCol xs={12} sm={12} md={4}>
            <BoxReason className="boxReason">
              <BoxUse className="boxUse">
                <NumberImg className="number">
                  <img alt="" src={number2} />
                </NumberImg>
                <TitleBox className="titleBox"> Dễ sử dụng nhất </TitleBox>
                <ImgBox2 className="imgBox">
                  <img alt="" src={easiestToUse} />
                </ImgBox2>
              </BoxUse>
              <SubContentLayout>
                <SubContentRow>
                  <img alt="" src={iconArrowList} />
                  <SubContent>Hoàn toàn online, không cần cài đặt</SubContent>
                </SubContentRow>
                <SubContentRow>
                  <img alt="" src={iconArrowList} />
                  <SubContent>
                    Tích hợp dễ dàng với dịch vụ ký số tốc độ cao của Bkav
                  </SubContent>
                </SubContentRow>
                <SubContentRow>
                  <img alt="" src={iconArrowList} />
                  <SubContent>Hướng dẫn sử dụng theo ngữ cảnh</SubContent>
                </SubContentRow>
              </SubContentLayout>
            </BoxReason>
          </StyledCol>
          <StyledCol xs={12} sm={12} md={4}>
            <BoxReason className="boxReason">
              <BoxUse className="boxUse">
                <NumberImg className="number">
                  <img alt="" src={number3} />
                </NumberImg>
                <TitleBox className="titleBox"> Thương hiệu uy tín </TitleBox>
                <ImgBox3 className="imgBox">
                  <img alt="" src={reputableBrand} />
                </ImgBox3>
              </BoxUse>
              <SubContentLayout>
                <SubContentRow>
                  <img alt="" src={iconArrowList} />
                  <SubContent>Hơn 200,000 Khách hàng</SubContent>
                </SubContentRow>
                <SubContentRow>
                  <img alt="" src={iconArrowList} />
                  <SubContent>
                    Top 10 dịch vụ hoàn hảo, Top 10 nhãn hiệu nổi tiếng nhất
                    Việt Nam
                  </SubContent>
                </SubContentRow>
              </SubContentLayout>
            </BoxReason>
          </StyledCol>
        </RowContainer>
        <RowContainer2 className="list2 mt-2  wow cusFadeInUp   animated">
          <StyledCol xs={12} sm={12} md={4}>
            <BoxReason className="boxReason">
              <BoxUse className="boxUse">
                <NumberImg className="number">
                  <img alt="" src={number4} />
                </NumberImg>
                <TitleBox className="titleBox">
                  Bảo mật an toàn <br /> dữ liệu
                </TitleBox>
                <ImgBox4 className="imgBox">
                  <img alt="" src={dataSecurity} />
                </ImgBox4>
              </BoxUse>
              <SubContentLayout>
                <SubContentRow>
                  <img alt="" src={iconArrowList} />
                  <SubContent>
                    Được phát triển bởi Công ty hàng đầu về An ninh mạng
                  </SubContent>
                </SubContentRow>
                <SubContentRow>
                  <img alt="" src={iconArrowList} />
                  <SubContent>
                    Dữ liệu, chứng từ được sao lưu dự phòng ít nhất 10 năm
                  </SubContent>
                </SubContentRow>
                <SubContentRow>
                  <img alt="" src={iconArrowList} />
                  <SubContent>Đáp ứng tiêu chuẩn ISO</SubContent>
                </SubContentRow>
              </SubContentLayout>
            </BoxReason>
          </StyledCol>
          <StyledCol xs={12} sm={12} md={4}>
            <BoxReason className="boxReason">
              <BoxUse className="boxUse">
                <NumberImg className="number">
                  <img alt="" src={number5} />
                </NumberImg>
                <TitleBox className="titleBox">
                  Đáp ứng đầy đủ các <br /> Biểu mẫu chứng từ
                </TitleBox>
                <ImgBox5 className="imgBox">
                  <img alt="" src={fullfillTheNeeds} />
                </ImgBox5>
              </BoxUse>
              <SubContentLayout>
                <SubContentRow>
                  <img alt="" src={iconArrowList} />
                  <SubContent>
                    Chứng từ khấu trừ thuế thu nhập cá nhân
                  </SubContent>
                </SubContentRow>
              </SubContentLayout>
            </BoxReason>
          </StyledCol>
          <StyledCol xs={12} sm={12} md={4}>
            <BoxReason className="boxReason">
              <BoxUse className="boxUse">
                <NumberImg className="number">
                  <img alt="" src={number6} />
                </NumberImg>
                <TitleBox className="titleBox">
                  Đáp ứng mọi loại hình <br /> Doanh nghiệp
                </TitleBox>
                <ImgBox6 className="imgBox">
                  <img alt="" src={satisfyAllTypesEnterprise} />
                </ImgBox6>
              </BoxUse>
              <SubContentLayout>
                <SubContentRow>
                  <img alt="" src={iconArrowList} />
                  <SubContent>Đáp ứng mọi nhu cầu của Doanh nghiệp</SubContent>
                </SubContentRow>
                <SubContentRow>
                  <img alt="" src={iconArrowList} />
                  <SubContent>Phân quyền theo nhu cầu của KH</SubContent>
                </SubContentRow>
              </SubContentLayout>
            </BoxReason>
          </StyledCol>
        </RowContainer2>
      </StyledContainer>
    </ReasonsContainer>
  );
}
export default ReasonsForUse;
