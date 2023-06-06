import { REDUX_KEY } from 'utils/constants';

export const RESET_REDUX = `${REDUX_KEY.orderPage}/RESET_REDUX`;

export const REQUEST_BEGIN = `${REDUX_KEY.orderPage}/REQUEST_BEGIN`;

export const REQUEST_FAIL = `${REDUX_KEY.orderPage}/REQUEST_FAIL`;

export const REQUEST_ORDER = `${REDUX_KEY.orderPage}/REQUEST_ORDER`;
export const REQUEST_ORDER_SUCCESS = `${
  REDUX_KEY.orderPage
}/REQUEST_ORDER_SUCCESS`;

export const INVALID_PHONE_NUMBER = 'Số điện thoại không đúng định dạng';
export const PHONE_NUMBER_NULL = 'Bạn cần nhập số điện thoại';
