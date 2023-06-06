import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { StyledContainer } from '../../global-styles';
import {
  StyledTitle,
  NewsContainer,
  NewsImgContainer,
  StyledArticleView,
  PaginationContainer,
  StyledNewsRow,
} from './styles';

const fakeApi = [
  {
    id: 'thu-tuong-chinh-phu-danh-gia-cao-bieu-duong-Bo-Tai-chinh-va-cuc-thue',
    thumbnail:
      'https://remotesigning.bkavca.vn/image/journal/article?img_id=45828',
    title:
      'Thủ tướng Chính phủ đánh giá cao, biểu dương Bộ Tài chính và Tổng cục Thuế',
    summary:
      'Thủ tướng Chính phủ đánh giá cao, biểu dương Bộ Tài chính, Tổng cục Thuế và các bộ, cơ quan',
  },
  {
    id:
      'bkav-duoc-bo-cong-thuong-trao-giay-xac-nhan-dang-ky-cung-cap-dich-vu-chung-thuc-hop-dong-dien-tu',
    thumbnail:
      'https://remotesigning.bkavca.vn/image/journal/article?img_id=44768',
    title:
      'BKAV được Bộ Công Thương trao Giấy xác nhận đăng ký cung cấp dịch vụ chứng...',
    summary:
      'Đến thời điểm này, sau thời gian hỗ trợ, hướng dẫn về trình tự thủ tục, pháp lý, các tiêu chuẩn',
  },
  {
    id: 'bkav-dong-hanh-cung-thua-thien-hue-chuyen-doi-so-cho-doanh-nghiep',
    thumbnail:
      'https://remotesigning.bkavca.vn/image/journal/article?img_id=43985',
    title: 'Bkav đồng hành cùng Thừa Thiên Huế chuyển đổi số cho Doanh nghiệp',
    summary:
      'Với mục đích phát triển ứng dụng Hue-S trở thành nền tảng ứng dụng đồng hành cùng doanh nghiệp',
  },
  {
    id:
      'trung-tam-chung-thuc-dien-tu-quoc-gia-lam-viec-voi-cau-lac-bo-chu-ky-so-va-giao-dich-dien-tu-viet-nam-ve-ke-hoach-hoat-dong-4-thang-cuoi-nam-2022',
    thumbnail:
      'https://remotesigning.bkavca.vn/image/journal/article?img_id=43590',
    title:
      'Trung tâm Chứng thực điện tử quốc gia làm việc với Câu lạc bộ chữ ký số và...',
    summary:
      'Sáng ngày 11/8/2022, tại Hà Nội, Trung tâm Chứng thực điện tử quốc gia đã có buổi làm việc với Câu',
  },
  {
    id: 'bkav-ra-mat-nen-tang-chung-tu-khau-tru-thue-thu-nhap-ca-nhan-dien-tu',
    thumbnail:
      'https://remotesigning.bkavca.vn/image/journal/article?img_id=42882',
    title:
      'Bkav ra mắt nền tảng Chứng từ khấu trừ thuế thu nhập cá nhân điện tử',
    summary:
      'Nền tảng cho phép các doanh nghiệp dễ dàng tạo lập, quản lý Chứng từ khấu trừ thuế thu nhập cá nhân',
  },
  {
    id: 'bkav-duoc-cap-phep-cung-cap-dich-vu-chu-ky-so-tu-xa',
    thumbnail:
      'https://remotesigning.bkavca.vn/image/journal/article?img_id=42903',
    title:
      'Trung tâm Chứng thực điện tử quốc gia làm việc với Câu lạc bộ chữ ký số và...',
    summary:
      'Ngày 1/6, Tập đoàn công nghệ Bkav chính thức được Bộ Thông tin & Truyền thông trao giấy phép cho',
  },
  {
    id: 'da-nang-lap-duong-day-nong-ve-hoa-don-dien-tu',
    thumbnail:
      'https://remotesigning.bkavca.vn/image/journal/article?img_id=38364',
    title: 'Đà Nẵng lập đường dây nóng về hóa đơn điện tử',
    summary:
      'Chủ tịch UBND TP Đà Nẵng yêu cầu Cục Thuế TP công bố số điện thoại đường dây nóng tại Cục Thuế và các Chỉ cục Thuế,',
  },
  {
    id: 'bkav-ehoadon-du-le-cong-bo-he-thong-hoa-don-dien-tu-toan-quoc',
    thumbnail:
      'https://remotesigning.bkavca.vn/image/journal/article?img_id=38334',
    title:
      'Sáng ngày 21/04, Tổng cục Thuế (Bộ Tài Chính) tổ chức lễ công bố hệ thống hóa đơn điện tử (HĐĐT) toàn quốc.',
    summary:
      'Ngày 1/6, Tập đoàn công nghệ Bkav chính thức được Bộ Thông tin &...',
  },
  {
    id:
      'tiep-tuc-trien-khai-goi-ho-tro-cho-doanh-nghiep-moi-thanh-lap-tren-dia-ban-thanh-pho-ha-noi-nam-2022',
    thumbnail:
      'https://remotesigning.bkavca.vn/image/journal/article?img_id=35015',
    title:
      'Tiếp tục triển khai gói hỗ trợ cho Doanh nghiệp mới thành lập trên địa bàn thành phố Hà Nội năm 2022',
    summary:
      'Thực hiện Nghị quyết số 09/2020/NQ-HĐND ngày 9/12/2020 của HĐND thành phố Hà Nội về việc thông qua chủ trương ban',
  },
];

const NewsPage = () => (
  <StyledContainer>
    <Row>
      <StyledTitle lg={12} md={12} sm={12} xl={12} xxl={12} xs={12}>
        Tin tức
      </StyledTitle>
    </Row>
    <Row>
      {fakeApi.map(item => (
        <NewsContainer
          xxl={6}
          xl={6}
          lg={6}
          md={6}
          sm={12}
          xs={12}
          key={item.id}
          // onClick={() => handleRedirect(item.id)}
        >
          <a href={`/tin-tuc/${item.id}`}>
            <StyledNewsRow>
              <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12}>
                <NewsImgContainer>
                  <img
                    src={item.thumbnail}
                    alt="img news"
                    className="news-img"
                  />
                </NewsImgContainer>
              </Col>
              <StyledArticleView xxl={8} xl={8} lg={8} md={8} sm={12} xs={12}>
                <p className="articleView-title">{item.title}</p>
                <p className="articleView-summary">{item.summary}</p>
              </StyledArticleView>
            </StyledNewsRow>
          </a>
        </NewsContainer>
      ))}
    </Row>
    <PaginationContainer>
      {/* <Row> */}
      {/*  <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}> */}
      {/*    <StyledPagination> */}
      {/*      <StyledPageItem href="/tin-tuc">1</StyledPageItem> */}
      {/*    </StyledPagination> */}
      {/*  </Col> */}
      {/* </Row> */}
    </PaginationContainer>
  </StyledContainer>
);

export default NewsPage;
