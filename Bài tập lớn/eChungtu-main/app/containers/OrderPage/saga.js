import { call, put, takeLatest } from 'redux-saga/effects';
import { axiosPost } from '../../utils/request';
import * as constants from './constants';
import * as actions from './actions';

export function* handleOrder(action) {
  yield put(actions.requestBegin());
  const path = '/order';
  try {
    const res = yield call(axiosPost, path, action.body);
    yield put(actions.orderSuccess(res.data));
    action.callback();
  } catch (error) {
    yield put(actions.requestFail(error));
  }
}

export default function* watchFetchMonitor() {
  yield takeLatest(constants.REQUEST_ORDER, handleOrder);
}
