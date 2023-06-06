import styled from 'styled-components';
import { Col } from 'react-bootstrap';

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
  margin-top: 80px;
  margin-bottom: 50px;
  font-family: ${props => props.theme.fontFamily.openSans};
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 41px;
  margin-left: -2px;
  @media screen and (max-width: 760px) {
    font-size: 20px;
    margin-left: 14px;
    margin-top: 36px;
    margin-bottom: 33px;
    margin-left: unset;
  }
`;

const StyledCol = styled(Col)`
  margin-bottom: 130px;
  @media screen and (max-width: 760px) {
    margin-bottom: 12px;
    &:last-child {
      margin-bottom: 99px;
    }
  }
`;

const StyledCategoryTitle = styled.div`
  font-family: ${props => props.theme.fontFamily.openSans};
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 33px;
  @media screen and (max-width: 760px) {
    font-family: ${props => props.theme.fontFamily.inter};
    font-size: 16px;
    margin-bottom: 27px;
    max-width: 243px;
  }
`;

const StyledCategoryTitleRight = styled.div`
  font-family: ${props => props.theme.fontFamily.openSans};
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 36px;
  padding-top: 1px;
  margin-left: 3px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 24px;
  }
`;

const CategoryContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const CategoryItemContainer = styled.div`
  font-family: ${props => props.theme.fontFamily.openSans};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  margin-bottom: 19px;
  align-items: center;
  display: flex;
  .icon {
    width: 10%;
    align-self: flex-start;
  }
  .sm {
    width: 7%;
  }
  .bold {
    font-family: ${props => props.theme.fontFamily.openSans};
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
  }
  .text {
    max-width: 422px;
    max-height: 60px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
    font-size: 16px;
    .icon {
      text-align: center;
      width: 36px;
      margin-left: unset;
      margin-right: 14px;
    }
    .sm {
      width: 36px;
    }
    .sm img {
      padding-left: 2px;
    }
    .text {
      max-width: 275px;
    }
    .bold {
      font-size: 16px;
    }
  }
`;

export {
  Container,
  ButtonContainer,
  DataContainer,
  StyledTitle,
  StyledCol,
  StyledCategoryTitle,
  CategoryContainer,
  CategoryItemContainer,
  StyledCategoryTitleRight,
};
