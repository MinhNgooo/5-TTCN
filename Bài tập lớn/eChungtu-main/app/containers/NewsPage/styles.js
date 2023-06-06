import styled from 'styled-components';
import { Col, Row, Pagination } from 'react-bootstrap';

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  align-items: center;
  flex-direction: column;
  background: ${props => props.theme.colors.background};
`;

const BodyStyled = styled.div`
  @media screen and (max-width: 767px) {
    padding-left: 12px;
    padding-right: 12px;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

const DataContainer = styled.div`
  display: flex;
  width: 100%;
  height: 850px;
  margin: 20px;
  padding: 10px;
  overflow-y: auto;
  border: 1px solid red;
  column-gap: 10px;
`;

const StyledTitle = styled(Col)`
  font-family: ${props => props.theme.fontFamily.openSans};
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 40px;
  margin-top: 101px !important;
  margin-bottom: 51px !important;
  @media screen and (max-width: 768px) {
    margin-top: 24px !important;
    margin-bottom: 36px !important;
    padding-left: 12px !important;
    font-size: 20px;
  }
`;

const NewsContainer = styled(Col)`
  margin-bottom: 45px;
  cursor: pointer;
  a {
    color: unset;
    text-decoration: none;
    :hover {
      color: unset;
    }
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 36px;
    &:last-child {
      margin-bottom: 102px;
    }
  }
`;

const StyledNewsRow = styled(Row)`
  @media screen and (max-width: 768px) {
    //padding: 0 16px;
  }
`;

const NewsImgContainer = styled.div`
  overflow: hidden;

  .news-img {
    width: 178px;
    height: 113px;
    border: 1px solid #707070;
  }

  @media screen and (max-width: 767px) {
    .news-img {
      height: 208px;
      width: 100%;
      margin-bottom: 17px;
    }
  }
`;

const StyledArticleView = styled(Col)`
  .articleView-title {
    font-family: ${props => props.theme.fontFamily.openSans};
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 0;
    max-width: 370px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    @supports (-webkit-line-clamp: 2) {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: initial;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }

  .articleView-summary {
    font-family: ${props => props.theme.fontFamily.openSans};
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 0;
    max-width: 360px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    @supports (-webkit-line-clamp: 2) {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: initial;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 8px;
    .articleView-title {
      margin-bottom: 8px !important;
      font-size: 16px;
      line-height: 26px;
    }

    .articleView-summary {
      font-size: 16px;
      line-height: 26px;
    }
  }
`;

const PaginationContainer = styled.div`
  margin-top: 35px;
  margin-bottom: 83px;
  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;

const StyledPageItem = styled(Pagination.Item)`
  .page-link {
    background-color: #007cba;
    width: 25.44px !important;
    height: 25.44px !important;
    text-align: center;
    vertical-align: middle;
    line-height: 23.44px;
    padding: 0 !important;
    margin-left: 10px !important;
    border-radius: 2px !important;
    font-family: ${props => props.theme.fontFamily.openSans};
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #ffffff;
  }
`;

const StyledPagination = styled(Pagination)`
  justify-content: flex-end;
`;

export {
  Container,
  ButtonContainer,
  DataContainer,
  StyledTitle,
  NewsContainer,
  NewsImgContainer,
  StyledArticleView,
  PaginationContainer,
  StyledPageItem,
  StyledPagination,
  StyledNewsRow,
  BodyStyled,
};
