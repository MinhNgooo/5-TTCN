import * as constants from './constants';

export function resetRedux() {
  return {
    type: constants.RESET_REDUX,
  };
}

export function requestBegin() {
  return {
    type: constants.REQUEST_BEGIN,
  };
}
export function requestFail(errorMessage) {
  return {
    type: constants.REQUEST_FAIL,
    errorMessage,
  };
}

// Dat mua
export function order(body, callback) {
  return {
    type: constants.REQUEST_ORDER,
    body,
    callback,
  };
}
export function orderSuccess(res) {
  return {
    type: constants.REQUEST_ORDER_SUCCESS,
    res,
  };
}
