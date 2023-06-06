import produce from 'immer';
import * as constants from './constants';

export const initialState = {
  isLoading: false,
  errorMessage: '',
  orderInformation: null,
};

/* eslint-disable default-case, no-param-reassign */
const orderPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.REQUEST_BEGIN:
        draft.isLoading = true;
        break;
      case constants.REQUEST_FAIL:
        draft.isLoading = false;
        draft.errorMessage = action.messages;
        break;

      case constants.REQUEST_ORDER_SUCCESS:
        draft.orderInformation = action.res.data;
        break;
    }
  });

export default orderPageReducer;
