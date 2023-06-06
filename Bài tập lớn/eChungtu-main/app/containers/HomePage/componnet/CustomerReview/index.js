import React from 'react';
import { Row } from 'react-bootstrap';
import {
  Arrow,
  Avatar,
  Comment,
  CustomerReviewContainer,
  Label,
  Name,
  Position,
  ReviewItem,
  ReviewLayout,
  RowCustom,
  Title,
} from './styles';
import { StyledContainer } from '../../../../global-styles';
import arrowLeft from '../../../../images/arrowLeft.svg';
import arrowRight from '../../../../images/arrowRight.svg';
import avatarA from '../../../../images/avatarA.svg';
import avatarB from '../../../../images/avatarB.svg';

const CustomerReview = () => (
  <CustomerReviewContainer>
    <StyledContainer>
      <Row>
        <Title className="wow cusFadeInUp animated">Ý kiến khách hàng</Title>
      </Row>
      <RowCustom>
        <Arrow alt="" src={arrowLeft} />
        <ReviewLayout className="wow cusFadeInUp animated">
          <ReviewItem>
            <Avatar alt="" src={avatarA} />
            <Label>
              <Name>Bà: Nguyễn Thanh Duyên</Name>
              <Position>TP kế toán Công Ty Đông Âu</Position>
            </Label>
            <Comment>
              Khá hài lòng với cách tiếp cận nhanh chóng của Bkav về khâu phát
              triển các hệ thống phần mềm điện tử đáp ứng các yêu cầu của Cơ
              quan thuế và đặc biệt là các Khách hàng doanh nghiệp như công ty
              chúng tôi. Tôi đã sử dụng một vài sản phẩm của Bkav như eHoadon,
              Chữ ký số và bây giờ là eChungtu. Nhìn chung eChungtu rất dễ sử
              dụng, đáp ứng đầy đủ các nghiệp vụ như chứng từ giấy và giá thành
              cũng rất hợp lý
            </Comment>
          </ReviewItem>
          <ReviewItem>
            <Avatar alt="" src={avatarB} />
            <Label>
              <Name>Ông: Chu Mạnh Hiệp</Name>
              <Position>GĐ Công ty TNHH công nghệ số Mạnh Hiệp</Position>
            </Label>
            <Comment>
              Để chuyển từ nghiệp vụ chứng từ giấy chuyển sang nghiệp vụ chứng
              từ điện tử, bản thân tôi ban đầu có đôi chút bỡ ngỡ và khó khăn để
              tiếp cận và sử dụng. Tuy nhiên sau đó những khó khăn này đã được
              giải quyết bằng việc sử dụng Bkav eChungtu. Bkav có một đội ngũ hỗ
              trợ hướng dẫn hết sức tuyệt vời đã giúp tôi tạo lập và ký chứng từ
              đơn giản và nhanh chóng. Sử dụng eChungtu của Bkav cũng giúp công
              ty chúng tôi tiết kiệm rất nhiều chi phí và không còn lo về vấn đề
              lưu trữ và bảo mật chứng từ nữa
            </Comment>
          </ReviewItem>
        </ReviewLayout>
        <Arrow alt="" src={arrowRight} />
      </RowCustom>
    </StyledContainer>
  </CustomerReviewContainer>
);

export default CustomerReview;
