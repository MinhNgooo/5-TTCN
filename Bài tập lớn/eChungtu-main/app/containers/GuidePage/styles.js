import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import { Button, Input } from 'antd';
import { StyledContainer } from '../../global-styles';

export const ContainerCustom = styled(StyledContainer)`
  margin-bottom: 70px;
  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const BodyStyled = styled.div`
  margin-left: 0px;
  margin-bottom: 70px;
`;

export const StyledTitle = styled.div`
  margin-top: 104px;
  margin-bottom: 48px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 32px;
  margin-left: -2px;
  @media screen and (max-width: 768px) {
    margin-top: 36px;
    margin-bottom: 30px;
    font-size: 20px;
  }
`;

export const FormSearch = styled.div`
  display: flex;
  gap: 0 0px;
  align-items: baseline;
  margin-top: 7px;
  text-align: center;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledInput = styled(Input)`
  width: 640.74px;
  height: 41px;
  margin-right: 0px;
  border-radius: 7px 0 0 7px !important;
  border: 1px solid #d9d9d9;
  font-family: ${props => props.theme.fontFamily.openSans};
  font-size: 18px !important;
  font-weight: 400;
  padding-left: 27px !important;
  line-height: 25px;
  ::placeholder {
    color: #b7b7b7 !important;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px !important;
    border-radius: 0 !important;
    border: 0.75px solid rgba(0, 0, 0, 0.3);
    padding-left: 12px !important;
  }
`;

export const BtnSearch = styled(Button)`
  background-color: #007cba !important;
  border-radius: 0 7px 7px 0;
  height: 41px;
  width: 130px !important;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  z-index: 100;
  position: relative;
  bottom: 1px;
  .ant-btn-primary {
    color: #fff;
    border-color: #1890ff;
    background: #1890ff;
    text-shadow: none !important;
    box-shadow: none !important;
  }

  @media screen and (max-width: 768px) {
    border-radius: 7px;
    font-size: 16px;
    line-height: 19px;
    width: 118px !important;
    height: 37.22px;
    margin-top: 24.78px;
  }
`;

export const SubContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 52px 0;
  gap: 39px 0;

  @media screen and (max-width: 768px) {
    margin: 39px 0px;
    gap: 17px 0;
  }
`;

export const SubContentRow = styled.div`
  display: flex;
  gap: 0 15px;
  align-items: baseline;
  cursor: pointer;
`;

export const ItemGuide = styled.div`
  width: 32px;
  min-width: 32px;
  height: 30px;
  background-color: #f1f1f1;
  border-radius: 3px;
  display: flex;
  justify-content: center;
`;

export const SubContent = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: #191919;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 32px;
  }
`;
export const SpanNumber = styled.span`
  font-family: ${props => props.theme.fontFamily.openSans};
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #007cba;
  display: flex;
  align-items: center;
`;

export const RowRight = styled(Row)`
  padding-left: 73px;
  margin-top: 7px !important;

  @media screen and (max-width: 768px) {
    display: none !important;
  }
`;

export const SubContentLayoutCustom = styled(SubContentLayout)`
  display: flex;
  margin: 32px 0 !important;
  gap: 25px 0;
`;

export const SubContentRowCustom = styled(SubContentRow)`
  display: flex;
  gap: 0 20px;
  align-items: center;
`;

export const SubContentCustom = styled(SubContent)`
  line-height: 25px;
`;

export const StyleSpan = styled.span`
  font-weight: 600;
  font-size: 18px;
  line-height: 24.51px;
`;

export const FocusHeader = styled.div`
  font-weight: 400;
  font-size: 26px;
  line-height: 40px;
  color: #3a3a3a;
  margin-bottom: -13px;
`;

export const SubContentRowRight = styled(SubContentRow)`
  display: inline-block;
  align-items: start;
  cursor: pointer;
`;

export const SubContentRight = styled(SubContent)`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
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
`;

export const SubContentLayoutLeft = styled(SubContentLayout)`
  display: flex;
  gap: 0 0;
  @media screen and (max-width: 768px) {
    margin-top: 50px !important;
  }
`;

export const SubContentRowLeft = styled(SubContentRow)`
  display: flex;
  gap: 0 21px;
  align-items: baseline;
`;

export const SubContentLeft = styled(SubContent)`
  font-weight: 400;
  font-size: 18px;
  line-height: 44px;
  color: #007cba;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 26px;
  }
`;

export const ImgStep = styled.img`
  width: 100%;
  height: 100%;
`;

export const ImgSmallStep = styled.img`
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
