import styled from 'styled-components';
import { Select, Form, Input } from 'antd';

const StyledTitle = styled.div`
  font-family: ${props => props.theme.fontFamily.openSans};
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 41px;
  margin-top: 102px;
  margin-bottom: 48px;
  margin-left: -2.5px;
  @media only screen and (max-width: 768px) {
    margin-top: 36px;
    margin-bottom: 15px;
    line-height: 27px;
    font-size: 20px;
  }
`;

export const LinkStyled = styled.a`
  color: #007cba;
  font-family: ${props => props.theme.fontFamily.openSans};
  font-weight: 600;
  cursor: pointer;
  font-style: normal;
  font-size: 18px;
  line-height: 30px;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 16px !important;
  }
`;

const FormContainer = styled(Form)`
  padding: 10px 0;
`;

const StyledFormItem = styled(Form.Item)`
  margin-bottom: 20px;
  .ant-form-item-label label {
    font-family: ${props => props.theme.fontFamily.openSans} !important;
    font-style: normal;
    font-weight: 600;
    font-size: 18px !important;
    margin-bottom: 0;
    margin-top: 4px;
    margin-left: 0.5px;
    width: 200px;
  }
  .label {
    font-family: ${props => props.theme.fontFamily.openSans};
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 0;
  }
  .star {
    font-family: ${props => props.theme.fontFamily.openSans};
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #ff0000;
  }
  .ant-form-item-label > label::after {
    content: ':';
    position: relative;
    top: -0.5px;
    margin: 2.5px 8px 0 0px;
  }

  .ant-form-item-explain-error {
    color: red;
    font-size: 16px;
    padding-left: 5px;
    padding-bottom: 15px;
    font-style: italic;
  }
  .ant-form-item-label
    > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before {
    display: none;
    margin-right: 4px;
    color: #ff4d4f;
    font-size: 14px;
    font-family: SimSun, sans-serif;
    line-height: 1;
    content: '*';
  }
  @media only screen and (max-width: 768px) {
    margin-bottom: 5px;
    .label {
      font-size: 16px;
    }
    .ant-form-item-label label {
      font-size: 16px !important;
      display: none;
    }
  }
`;

const StyledFormItemTax = styled(Form.Item)`
  margin-bottom: 20px;
  .ant-form-item-label {
    margin-left: -0.5px !important;
  }
  .ant-form-item-label label {
    font-family: ${props => props.theme.fontFamily.openSans} !important;
    font-style: normal;
    font-weight: 600;
    font-size: 18px !important;
    margin-bottom: 0;
    margin-top: 4px;
    width: 200px;
  }
  .label {
    font-family: ${props => props.theme.fontFamily.openSans};
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 0;
  }
  .star {
    font-family: ${props => props.theme.fontFamily.openSans};
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #ff0000;
  }
  .ant-form-item-label > label::after {
    content: ':';
    position: relative;
    top: -0.5px;
    margin: 2.5px 8px 0 0px;
  }
`;

const StyledFormItemPrice = styled(Form.Item)`
  margin-bottom: 20px;
  .ant-form-item-label {
    margin-left: 0.5px !important;
  }
  .ant-form-item-label label {
    font-family: ${props => props.theme.fontFamily.openSans} !important;
    font-style: normal;
    font-weight: 600;
    font-size: 18px !important;
    margin-bottom: 0;
    margin-top: -1px;
    width: 200px;
  }
  .label {
    font-family: ${props => props.theme.fontFamily.openSans};
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 0;
  }
  .star {
    font-family: ${props => props.theme.fontFamily.openSans};
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #ff0000;
  }
  .ant-form-item-label > label::after {
    content: ':';
    position: relative;
    margin: 1px 8px 0 0px;
  }

  .money-mobile {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    .ant-form-item-label label {
      font-size: 16px !important;
      display: none;
    }
    .money-mobile {
      display: inline;
      font-weight: 400;
      min-width: 90px;
    }
  }
`;

const StyledInput = styled(Input)`
  padding: 0 22.5px;
  padding-top: 9px !important;
  padding-bottom: 7px !important;
  font-family: 'Open Sans' !important;
  padding-top: 10px;
  padding-left: 22.5px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #000;
  border: 1px solid #b5b5b5;
  border-radius: 3px;
  width: 670px;
  height: 40px;
  line-height: 25px;
  margin-left: 6px;
  &::placeholder {
    color: #b5b5b5;
    font-family: ${props => props.theme.fontFamily.openSans};
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    opacity: 1;
  }

  @media only screen and (max-width: 768px) {
    //width: 328px;
    width: 100%;
    margin-left: unset;
    font-size: 16px;
    height: 32px;

    &::placeholder {
      font-size: 16px;
      line-height: 19px;
    }
  }
`;

const StyledInputTax = styled(Input)`
  padding: 0 22.5px;
  padding-top: 9px !important;
  padding-bottom: 7px !important;
  font-family: 'Open Sans' !important;
  padding-top: 10px;
  padding-left: 22.5px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #000;
  border: 1px solid #b5b5b5;
  border-radius: 3px;
  width: 670px;
  height: 40px;
  line-height: 25px;
  margin-left: 7px;
  &::placeholder {
    color: #b5b5b5;
    font-family: ${props => props.theme.fontFamily.openSans};
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    opacity: 1;
  }
`;

const AmountContainer = styled.div`
  display: grid;

  .amount-display {
    font-family: ${props => props.theme.fontFamily.openSans};
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    margin-left: 26px;
    letter-spacing: -0.2px;
    margin-top: -2px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 16px;
    .amount-display {
      font-size: 16px;
    }
  }
`;

const StyledSelectAmount = styled.div`
  width: 212px;
  border: 1px solid #b5b5b5;
  border-radius: 3px;
  display: flex;
  background-color: #fff;
  margin-left: 1px;
  height: 40px;
  text-align: center;

  .ant-select-selector {
    padding: unset !important;
    letter-spacing: -0.2px;
  }

  .ant-select-selection-item {
    margin-left: -7.5px;
  }

  .name {
    width: 166px;
    font-family: ${props => props.theme.fontFamily.openSans};
    font-style: normal;
    font-weight: 400;
    font-size: 18.5px;
    line-height: 25px;
    margin-bottom: 0;
  }

  .btn-change-container {
    padding: 14px 16px;
    border-left: 1px solid #b5b5b5;
  }

  .increase-amount {
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #007cba;
    width: 9px;
    height: 5px;
    margin-bottom: 2px;
    cursor: pointer;
  }

  .decrease-amount {
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #007cba;
    width: 9px;
    height: 5px;
    cursor: pointer;
  }
  @media only screen and (max-width: 768px) {
    height: 33px;
    width: 170px;
    span {
      font-size: 16px;
      line-height: 19px;
    }

    .btn-change-container {
      padding: 10px 8px;
      border-left: unset;
    }
  }
`;

const StyledFlexWidth = styled.div`
  display: flex;
  align-items: center;
  margin-left: 6px;
  @media only screen and (max-width: 768px) {
    margin-left: -1px;
  }
`;
const TimeContainer = styled.div`
  margin-top: 22.5px;
  margin-left: 28px;
  margin-bottom: 5px;
  @media only screen and (max-width: 768px) {
    margin-left: unset;
    margin-top: 11.5px;
    margin-bottom: 2px;
  }
`;
const StyledTimeOption = styled.span`
  margin-right: 22px;
  &:last-child {
    margin-right: 0;
  }

  .checker {
    width: 16px;
    height: 16px;
    margin-right: 15px;
  }

  .time {
    font-family: ${props => props.theme.fontFamily.openSans};
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
  }

  @media only screen and (max-width: 768px) {
    .time {
      font-size: 16px;
      line-height: 22px;
    }

    .checker {
      width: 16px;
      height: 16px;
      margin-right: 10px;
    }
  }
`;

const PriceContainer = styled.div`
  padding-left: 2px;
  display: inline-flex;
  //width: 670px;
  font-family: ${props => props.theme.fontFamily.openSans};
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 38px;
  span {
    font-family: ${props => props.theme.fontFamily.openSans};
  }

  .price {
    color: #007cba;
    font-family: ${props => props.theme.fontFamily.openSans};
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    letter-spacing: 0.5px;
  }

  .italic {
    font-style: italic;
  }

  .bold {
    font-family: ${props => props.theme.fontFamily.openSans};
    font-style: normal;
    font-weight: 600 !important;
    font-size: 19px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 16px;
    padding-left: unset;
    margin-bottom: 2px;
    margin-bottom: 2px;
    span {
      font-size: 16px !important;
    }
  }
`;

const StyledOrderButton = styled.div`
  /* margin-bottom: 99px; */
  position: absolute;
  font-family: ${props => props.theme.fontFamily.openSans};
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  color: #fff;
  line-height: 23px;
  background-color: #007cba;
  border-radius: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  height: 48px;
  width: 134px;
  cursor: pointer;

  .text-wrapper {
    cursor: pointer;
    width: 73px;
    height: 31px;
    margin-left: 2px;
  }

  :hover {
    background-color: #ff6e01;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 14px;
    height: 43.74px;
    padding-top: 10px;
    padding-bottom: 10px;

    span {
      font-size: 20px;
    }
  }
`;

const StyledNotice = styled.div`
  margin-left: -1px;
  margin-top: 84px;
  font-family: ${props => props.theme.fontFamily.openSans};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  height: 60px;
  margin-bottom: 15px;
  margin-left: -0.3px;
  .hightlight {
    color: #e91a1a;
  }

  .link {
    color: #007cba;
    font-family: ${props => props.theme.fontFamily.openSans};
    font-weight: 600;
    cursor: pointer;
  }
  @media only screen and (max-width: 768px) {
    font-size: 16px;
    margin-top: 71px;
  }
`;

const StyledPolicy = styled.div`
  font-family: ${props => props.theme.fontFamily.openSans};
  font-style: italic;
  font-weight: 400;
  line-height: 30px;
  font-size: 17px;
  color: #b5b5b5;
  margin-bottom: 81px;
  height: 30px;
  @media only screen and (max-width: 768px) {
    margin-top: 30px;
    font-size: 16px;
  }

  @media only screen and (max-width: 480px) {
    margin-top: 106px;
  }
`;

const StyledSelect = styled(Select)`
  .ant-select-selector {
    border: none !important;
    height: 100% !important;
    align-items: center;
  }

  .ant-select-arrow {
    display: none;
  }

  .ant-select-selection-item {
    padding: 0 !important;
  }
`;

export {
  StyledTitle,
  FormContainer,
  StyledSelectAmount,
  AmountContainer,
  StyledFlexWidth,
  TimeContainer,
  StyledTimeOption,
  PriceContainer,
  StyledOrderButton,
  StyledNotice,
  StyledPolicy,
  StyledSelect,
  StyledFormItem,
  StyledInput,
  StyledFormItemTax,
  StyledInputTax,
  StyledFormItemPrice,
};
