/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { Form, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import packApi from '../../mookData/mookPack';
import { StyledContainer } from '../../global-styles';
import {
  StyledTitle,
  FormContainer,
  StyledSelectAmount,
  AmountContainer,
  StyledFlexWidth,
  StyledTimeOption,
  TimeContainer,
  PriceContainer,
  StyledOrderButton,
  StyledNotice,
  StyledPolicy,
  StyledSelect,
  StyledFormItem,
  StyledInput,
  StyledFormItemPrice,
  LinkStyled,
} from './styles';
import { validatePhoneNumber } from '../../shared/commonFunction';
import { INVALID_PHONE_NUMBER, PHONE_NUMBER_NULL } from './constants';
import * as actions from './actions';
import { selectPackName, selectQuantity } from '../PricePage/selectors';

const OrderPage = () => {
  const packNameGetPricePage = useSelector(selectPackName());
  const quantityGetPricePage = useSelector(selectQuantity());
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');
  const [taxCode, setTaxCode] = useState('');
  const [packName, setPackName] = useState(
    packNameGetPricePage || 'eChungtu - 50',
  );
  const [itemCount, setItemCount] = useState(quantityGetPricePage || 50);
  const [yearCount, setYearCount] = useState(1);
  const [money, setMoney] = useState(495000);
  const [productId, setProductId] = useState(2868);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const key = 'orderPage';
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const handlePrevOption = () => {
    const currPack = packApi.find(item => item.name === packName);
    const currIndex = packApi.indexOf(currPack);
    if (currIndex > 0) {
      setPackName(packApi[currIndex - 1].name);
    }
  };

  const handleNextOption = () => {
    const currPack = packApi.find(item => item.name === packName);
    const currIndex = packApi.indexOf(currPack);
    if (currIndex < packApi.length - 1) {
      setPackName(packApi[currIndex + 1].name);
    }
  };

  const handleInputCustomerName = e => {
    setCustomerName(e.target.value.trim());
  };

  const handleInputAddress = e => {
    setAddress(e.target.value.trim());
  };

  const handleInputTaxCode = e => {
    setTaxCode(e.target.value.trim());
  };

  const handleCheckYear = value => {
    const currPack = packApi.find(item => item.name === packName);
    const price = currPack.price[value];
    setYearCount(value);
    setMoney(price);
    setProductId(currPack.productId[value]);
  };

  const handleOrder = () => {
    // eslint-disable-next-line no-unused-vars
    const pathOrder = window.location.href;
    form.validateFields().then(values => {
      const body = {
        ...values,
        packName,
        stringMoney: money.toLocaleString(),
        doubleMoney: money,
        productId,
        referrer: pathOrder,
      };
      dispatch(
        actions.order(body, () => {
          history.push('/thong-tin-dat-mua');
        }),
      );
    });
  };

  const handleChangePack = value => {
    const currPack = packApi.find(item => item.name === value);
    const price = currPack.price[yearCount];
    setMoney(price);
    setPackName(value);
    setItemCount(currPack.amount);
    setProductId(currPack.productId[yearCount]);
  };

  useEffect(() => {
    const currPack = packApi.find(item => item.name === packName);
    const price = currPack.price[yearCount];
    setItemCount(currPack.amount);
    setMoney(price);
    setProductId(currPack.productId[yearCount]);
  }, [packName]);

  return (
    <StyledContainer>
      <StyledTitle>Mời bạn đặt mua Bkav eChungtu tại đây</StyledTitle>
      <FormContainer form={form}>
        <StyledFormItem
          name="customerName"
          label="Tên người liên hệ"
          labelCol={{ span: 4 }}
        >
          <StyledInput
            placeholder="Nhập họ và tên người liên hệ"
            value={customerName}
            onChange={handleInputCustomerName}
            style={{ paddingLeft: '21.5px' }}
          />
        </StyledFormItem>
        <StyledFormItem
          name="phone"
          label={
            <p className="label" style={{ marginBottom: 0 }}>
              Số điện thoại <span className="star">*</span>
            </p>
          }
          rules={[
            {
              required: true,
              message: 'Bạn cần nhập số điện thoại',
              validator(rule, value) {
                if (value.trim() === '') {
                  return Promise.reject(new Error(PHONE_NUMBER_NULL));
                }
                if (validatePhoneNumber(value.trim())) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error(INVALID_PHONE_NUMBER));
              },
            },
          ]}
          labelCol={{ span: 4 }}
        >
          <StyledInput placeholder="Nhập số điện thoại di động" />
        </StyledFormItem>

        <StyledFormItem
          name="address"
          label="Tỉnh/Thành phố:"
          labelCol={{ span: 4 }}
        >
          <StyledInput
            placeholder="Tỉnh/Thành phố"
            value={address}
            onChange={handleInputAddress}
          />
        </StyledFormItem>

        <StyledFormItem
          name="taxCode"
          label="Mã số thuế:"
          labelCol={{ span: 4 }}
          className="form-tax"
        >
          <StyledInput
            placeholder="Mã số thuế"
            onChange={handleInputTaxCode}
            value={taxCode}
          />
        </StyledFormItem>

        <StyledFormItem
          name="packName"
          style={{ marginBottom: '0' }}
          label="Gói cước:"
          labelCol={{ span: 4 }}
        >
          <AmountContainer>
            <StyledFlexWidth>
              <StyledSelectAmount>
                <StyledSelect
                  className="name"
                  defaultValue={packName}
                  value={packName}
                  onChange={handleChangePack}
                >
                  {packApi.map(pack => (
                    <Select.Option value={pack.name} key={pack.id}>
                      {pack.name}
                    </Select.Option>
                  ))}
                </StyledSelect>
                <div className="btn-change-container">
                  <div className="increase-amount" onClick={handleNextOption} />
                  <div className="decrease-amount" onClick={handlePrevOption} />
                </div>
              </StyledSelectAmount>
              <div name="itemCount" className="amount-display">
                Số lượng: {itemCount}
              </div>
            </StyledFlexWidth>
            <TimeContainer name="yearCount">
              <StyledTimeOption>
                <input
                  type="radio"
                  className="checker"
                  onChange={() => handleCheckYear(1)}
                  checked={yearCount === 1}
                />
                <span className="time">1 năm</span>
              </StyledTimeOption>
              <StyledTimeOption>
                <input
                  type="radio"
                  className="checker"
                  onChange={() => handleCheckYear(2)}
                  checked={yearCount === 2}
                />
                <span className="time">2 năm</span>
              </StyledTimeOption>
              <StyledTimeOption>
                <input
                  type="radio"
                  className="checker"
                  onChange={() => handleCheckYear(3)}
                  checked={yearCount === 3}
                />
                <span className="time">3 năm</span>
              </StyledTimeOption>
            </TimeContainer>
          </AmountContainer>
        </StyledFormItem>
        <StyledFormItemPrice
          name="doubleMoney"
          style={{ marginTop: 4 }}
          label="Thành tiền"
        >
          <PriceContainer style={{ position: 'relative' }}>
            <div className="money-mobile">Thành tiền: </div>
            <div>
              <span className="price">
                {money.toLocaleString().replaceAll(',', '.')} VND
              </span>
              /
              <span
                className="bold"
                style={{ fontFamily: 'Open Sans', fontWeight: 'unset' }}
              >
                {' '}
                Tài khoản
              </span>
              <span> (Đã bao gồm 10% VAT)</span>
            </div>
          </PriceContainer>
          <StyledOrderButton onClick={() => handleOrder()}>
            <span>Đặt mua</span>
          </StyledOrderButton>
        </StyledFormItemPrice>
      </FormContainer>
      <StyledNotice>
        <span className="hightlight">Lưu ý: </span>
        Để sử dụng Dịch vụ Chứng từ điện tử - Bkav eChungtu, Khách hàng cần phải
        có Chữ ký số.
        <br />
        <span>Nếu chưa có Chữ ký số, Khách hàng có thể đặt mua</span>
        <LinkStyled href="https://dangky.bkavca.vn/dat-mua-chu-ky-so?lcks=1&code=902420">
          {' '}
          tại đây
        </LinkStyled>
      </StyledNotice>
      <StyledPolicy>
        Bằng cách đặt mua, bạn đồng ý với Điều khoản sử dụng của Bkav
      </StyledPolicy>
    </StyledContainer>
  );
};

export default OrderPage;
