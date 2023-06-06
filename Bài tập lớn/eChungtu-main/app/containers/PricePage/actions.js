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

export function setValueQuantity(data) {
  return {
    type: constants.REQUEST_QUANTITY,
    data,
  };
}
