import styled from 'styled-components';
import { Button } from 'antd';

const StyledTitle = styled.div`
  font-family: ${props => props.theme.fontFamily.openSans};
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 41px;
  margin-top: 109px;
  margin-bottom: 60px;
  margin-left: -2px;

  @media only screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 27px;
    margin-top: 36px;
    margin-bottom: 48px;
  }
`;

const BodyStyled = styled.div`
  margin-left: 0px;
  margin-bottom: 114px;
  @media only screen and (max-width: 768px) {
    margin-bottom: 78px;
  }
`;

const TableContainer = styled.div`
  overflow-x: auto;
  @media only screen and (max-width: 992px) {
    overflow-x: scroll;
  }
`;
export const Table = styled.table`
  width: 1170px;
  table,
  th,
  td {
    border: 1px solid #ced3d6;
    border-collapse: collapse;
    font-size: 18px;
  }
  th {
    text-align: center;
  }
  .thPackName {
    width: 185px;
  }
  .thPrice {
    height: 55px;
  }
  .thNote {
    width: 310px;
  }
  .tdStt {
    text-align: center;
    padding-right: unset;
    width: 45px;
  }
  .tdYear {
    font-weight: 700;
    width: 119px;
    height: 55px;
    text-align: center;
  }
  .tdBtnOrder {
    width: 148px;
    text-align: center;
  }
  td {
    height: 54px;
    text-align: right;
  }
  .packName {
    width: 185px;
    padding-right: 18px;
  }
  .quantity {
    width: 113px;
    padding-right: 21px;
  }
  .tdPrice {
    padding-right: 18px;
  }
  .tdContact {
    padding-right: 25px;
  }
  @media (max-width: 768px) {
    overflow-x: auto;
    width: 1047px;
    table,
    th,
    td {
      border: 1px solid #ced3d6;
      border-collapse: collapse;
      font-size: 16px;
    }
    th {
      text-align: center;
    }
    .thPackName {
      width: 185px;
    }
    .thPrice {
      height: 45px;
    }
    .thNote {
      width: 294px;
    }
    .tdStt {
      text-align: center;
      padding-right: unset;
      width: 41px;
    }
    .tdYear {
      font-weight: 700;
      width: 105px;
      height: 55px;
      text-align: center;
    }
    .tdBtnOrder {
      width: 148px;
      text-align: center;
    }
    td {
      height: 42px;
      text-align: right;
    }
    .packName {
      width: 165px;
      padding-right: 18px;
    }
    .quantity {
      width: 108px;
      padding-right: 21px;
    }
    .tdPrice {
      width: 105px;
      padding-right: 18px;
    }
    .tdContact {
      padding-right: 31px;
    }
  }
`;

export const LiCustom = styled.li`
  margin-bottom: 12px;
  line-height: 26px;
  padding-right: 27px;
  color: #000000;
  ::marker {
    color: #ced3d6;
  }
`;

export const ButtonContact = styled.a`
  width: 93px;
  height: 28px;
  font-size: 18px;
  line-height: 25px;
  color: #191919;
  border-radius: 13.5px;
  border: #007cba solid 1px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  margin: auto;
  :hover {
    color: #007cba;
  }
`;

const ButtonStyled = styled(Button)`
  width: 98px !important;
  height: 33px !important;
  border-radius: 8px;
  font-family: ${props => props.theme.fontFamily.openSans};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: #007cba;
  padding: 1px 6px !important;
  border: 1px solid #007cba !important;

  :hover {
    background-color: #ff6e01 !important;
    border: 1px solid #ff6e01 !important;
    color: white;
  }

  @media only screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 20px;
    width: 82px !important;
    height: 28px !important;
  }
`;

const TitleNote = styled.div`
  font-family: ${props => props.theme.fontFamily.openSans};
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
  color: #191919;
  margin-top: 76px;
  @media only screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 27px;
    margin-top: 67px;
  }
`;

const SubTitleNoteOne = styled.div`
  font-family: ${props => props.theme.fontFamily.openSans};
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 14px;
  margin-left: 0.5px;
  margin-top: 25px;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 22px;
    margin-top: 27px;
    margin-bottom: 9px;
  }
`;

const SubTitleNoteTwo = styled.div`
  font-family: ${props => props.theme.fontFamily.openSans};
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 14px;
  margin-left: 0.5px;
  margin-top: 26px;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 22px;
    margin-top: 29px;
    margin-bottom: 10px;
  }
`;

const ItemNote = styled.div`
  font-family: ${props => props.theme.fontFamily.openSans};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 40px;
  color: #191919;
  display: flex;

  img {
    margin-right: 20.5px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 30px;
    margin-top: 8px;
    img {
      margin-right: 13px;
      width: 13px;
      height: 9px;
      margin-bottom: 4px;
    }
  }
`;

export {
  StyledTitle,
  BodyStyled,
  TableContainer,
  ButtonStyled,
  TitleNote,
  SubTitleNoteOne,
  SubTitleNoteTwo,
  ItemNote,
};
