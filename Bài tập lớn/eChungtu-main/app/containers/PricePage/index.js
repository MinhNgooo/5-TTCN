import React from 'react';
import tickNote from 'images/tick-note.svg';
import { Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useHistory } from 'react-router-dom';
import {
  BodyStyled,
  ButtonStyled,
  StyledTitle,
  TableContainer,
  TitleNote,
  ItemNote,
  SubTitleNoteTwo,
  SubTitleNoteOne,
  Table,
  LiCustom,
} from './styled';
import { StyledContainer } from '../../global-styles';
import dataItem from './dataItem.json';
import * as actions from './actions';
import reducer from './reducer';
import { REDUX_KEY } from '../../utils/constants';
const PricePage = () => {
  const dataTable = [
    {
      stt: 2,
      packName: 'eChungtu - 100',
      quantity: '100',
      oneYear: '517.000',
      twoYear: '693.000',
      threeYear: '737.000',
    },
    {
      stt: 3,
      packName: 'eChungtu - 200',
      quantity: '200',
      oneYear: '550.000',
      twoYear: '770.000',
      threeYear: '825.000',
    },
    {
      stt: 4,
      packName: 'eChungtu - 300',
      quantity: '300',
      oneYear: '660.000',
      twoYear: '924.000',
      threeYear: '1.100.000',
    },
    {
      stt: 5,
      packName: 'eChungtu - 500',
      quantity: '500',
      oneYear: '990.000',
      twoYear: '1.386.000',
      threeYear: '1.485.000',
    },
    {
      stt: 6,
      packName: 'eChungtu - 1000',
      quantity: '1.000',
      oneYear: '1.210.000',
      twoYear: '1.694.000',
      threeYear: '1.815.000',
    },
    {
      stt: 7,
      packName: 'eChungtu - 1500',
      quantity: '1.500',
      oneYear: '1.485.000',
      twoYear: '2.079.000',
      threeYear: '2.200.000',
    },
    {
      stt: 8,
      packName: 'eChungtu - 3000',
      quantity: '3.000',
      oneYear: '2.310.000',
      twoYear: '3.234.000',
      threeYear: '4.158.000',
    },
    {
      stt: 9,
      packName: 'eChungtu - 5000',
      quantity: '5.000',
      oneYear: '3.300.000',
      twoYear: '4.620.000',
      threeYear: '5.940.000',
    },
    {
      stt: 10,
      packName: 'eChungtu - 10000',
      quantity: '10.000',
      oneYear: '5.500.000',
      twoYear: '7.700.000',
      threeYear: '9.900.000',
    },
  ];
  const key = REDUX_KEY.pricePage;
  const dispatch = useDispatch();
  const history = useHistory();
  useInjectReducer({ key, reducer });

  const handleOrder = (packName, valueQuantity) => {
    const data = {
      packName,
      valueQuantity,
    };
    dispatch(actions.setValueQuantity(data));
    history.push('/dat-mua?s=951112');
    // if (quantityGetPricePage !== 0) {
    //   history.push('/dat-mua?s=951112');
    // }
  };
  return (
    <StyledContainer>
      <BodyStyled>
        <StyledTitle>
          Báo giá dịch vụ chứng từ điện tử - Bkav eChungtu
        </StyledTitle>
        <TableContainer>
          {/* <img src={imageTable} alt="bang-gia" /> */}
          <Table>
            <tr>
              <th className="tdStt" rowSpan="2">
                STT
              </th>
              <th className="thPackName" rowSpan="2">
                Tên Gói Cước
              </th>
              <th rowSpan="2">Số Lượng</th>
              <th className="thPrice" colSpan="4">
                Giá Tiền (VNĐ)
              </th>
              <th className="thNote" rowSpan="2">
                Ghi chú
              </th>
            </tr>
            <tr>
              <td className="tdYear">1 Năm</td>
              <td className="tdYear">2 Năm</td>
              <td className="tdYear">3 Năm</td>
              <td className="tdBtnOrder" />
            </tr>
            <tr>
              <td className="tdStt">1</td>
              <td className="packName">eChungtu - 50</td>
              <td className="quantity">50</td>
              <td className="tdPrice">495.000</td>
              <td className="tdPrice">550.000</td>
              <td className="tdPrice">660.000</td>
              <td className="tdBtnOrder">
                <ButtonStyled onClick={() => handleOrder('eChungtu - 50', 50)}>
                  Đặt mua
                </ButtonStyled>
              </td>
              <td style={{ textAlign: 'left' }} rowSpan="11">
                <ul>
                  <LiCustom>
                    Dịch vụ dễ sử dụng nhất: hoàn toàn online, không cần cài đặt
                  </LiCustom>
                  <LiCustom>
                    Tiết kiệm lên đến 80% so với chứng từ giấy
                  </LiCustom>
                  <LiCustom>Bảo mật an toàn dữ liệu chứng từ</LiCustom>
                  <LiCustom>Không giới hạn số lao động</LiCustom>
                </ul>
              </td>
            </tr>
            {dataTable.map(item => (
              <tr>
                <td className="tdStt">{item.stt}</td>
                <td className="packName">{item.packName}</td>
                <td className="quantity">{item.quantity}</td>
                <td className="tdPrice">{item.oneYear}</td>
                <td className="tdPrice">{item.twoYear}</td>
                <td className="tdPrice">{item.threeYear}</td>
                <td className="tdBtnOrder">
                  <ButtonStyled
                    onClick={() => handleOrder(item.packName, item.quantity)}
                  >
                    Đặt mua
                  </ButtonStyled>
                </td>
              </tr>
            ))}
            <tr>
              <td className="tdStt">11</td>
              <td className="packName">eChungtu - DA</td>
              <td className="quantity">&gt;10.000</td>
              <td className="tdContact" colSpan="4">
                <ButtonStyled href="/lien-he">Liên hệ</ButtonStyled>
              </td>
            </tr>
          </Table>
        </TableContainer>

        <TitleNote>Ghi chú</TitleNote>
        <SubTitleNoteOne className="sub-title">
          Giá trên đã bao gồm:
        </SubTitleNoteOne>
        <Row>
          <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
            {dataItem.rowOneColOne.map(item => (
              <ItemNote>
                <div>
                  <img src={tickNote} alt="icon-note" className="icon-tick" />
                </div>
                <span>{item}</span>
              </ItemNote>
            ))}
          </Col>
          <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
            {dataItem.rowOneColeTwo.map(item => (
              <ItemNote>
                <div>
                  <img src={tickNote} alt="icon-note" className="icon-tick" />
                </div>
                <span>{item}</span>
              </ItemNote>
            ))}
          </Col>
        </Row>
        <SubTitleNoteTwo className="sub-title">
          Báo giá trên chưa bao gồm:
        </SubTitleNoteTwo>
        {dataItem.rowTwo.map(item => (
          <ItemNote>
            <div>
              <img src={tickNote} alt="icon-note" className="icon-tick" />
            </div>
            <span>{item}</span>
          </ItemNote>
        ))}
      </BodyStyled>
    </StyledContainer>
  );
};

export default PricePage;
