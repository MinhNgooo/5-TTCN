import styled from 'styled-components';
import { Pagination, Col } from 'react-bootstrap';

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  align-items: center;
  flex-direction: column;
  background: ${props => props.theme.colors.background};
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

const StyledTitle = styled.div`
  font-family: ${props => props.theme.fontFamily.openSans};
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 44px;
  margin-top: 104px;
  @media screen and (max-width: 768px) {
    margin-top: 36px;
    font-size: 20px;
    font-weight: 600;
    line-height: 27px;

    color: #191919;
  }
`;

const StyledCreatedTime = styled.div`
  margin-bottom: 46px;
  margin-top: 5px;
  margin-left: 1px;
  line-height: 30px;
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
    .time,
    .date {
      font-size: 13px !important;
    }
  }

  .time,
  .date {
    font-family: ${props => props.theme.fontFamily.openSans};
    font-style: italic;
    font-weight: 600;
    font-size: 18px;
    line-height: 32px;
    color: #dadada;
  }
`;

const StyledText = styled.div`
  font-family: ${props => props.theme.fontFamily.openSans};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  margin-bottom: 15px;
  text-align: justify;

  &:last-child {
    margin-bottom: 0px;
  }
  @media screen and (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 22px;
    line-height: 30px;
  }
`;

const StyledImg = styled.div`
  text-align: center;

  .quote {
    font-size: 18px !important;
    font-family: 'Inner' sans-serif;
    line-height: 26px !important;
    font-style: italic;
    color: #393939;
  }

  img {
    height: auto !important;
    max-width: 100% !important;
    margin-bottom: 16px;
  }
  @media screen and (max-width: 768px) {
    .quote {
      margin-bottom: 22px;
      font-size: 16px !important;
    }
  }
`;

const StyledSource = styled.div`
  font-family: ${props => props.theme.fontFamily.openSans};
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  text-align: right;
  margin-top: 10px;
  margin-bottom: 102px;
  @media screen and (max-width: 768px) {
    margin-top: 0;
    font-size: 15px;
    line-height: 32px;
  }
`;

const OtherNewsContainer = styled.div`
  margin-top: 84px;

  .sub-title {
    font-family: ${props => props.theme.fontFamily.openSans};
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 32px;
    margin-bottom: 30px;
  }

  ul {
    padding-left: 1.2rem;
  }

  li {
    font-family: ${props => props.theme.fontFamily.openSans};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
  }

  li::marker {
    color: #b8b7b7;
  }
  @media screen and (max-width: 768px) {
    .sub-title {
      margin-bottom: 24px;
      font-size: 20px;
    }
    ul {
      font-size: 15px;
    }

    li {
      font-family: ${props => props.theme.fontFamily.openSans};
      font-size: 15px;
      line-height: 26px;
    }
  }
`;

const PaginationContainer = styled.div`
  margin-top: 28px;
  margin-bottom: 61px;
  @media screen and (max-width: 768px) {
    margin-top: 53.6px;
    margin-bottom: 35.4px;
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
  margin-bottom: 0;
`;

const StyledLink = styled(Col)`
  cursor: pointer;

  span.title-other-news {
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
`;

export {
  Container,
  ButtonContainer,
  DataContainer,
  StyledTitle,
  StyledCreatedTime,
  StyledText,
  StyledImg,
  StyledSource,
  OtherNewsContainer,
  PaginationContainer,
  StyledPagination,
  StyledPageItem,
  StyledLink,
};
