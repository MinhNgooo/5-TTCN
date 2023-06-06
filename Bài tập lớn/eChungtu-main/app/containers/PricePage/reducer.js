import produce from 'immer';
import * as constants from './constants';

export const initialState = {
  isLoading: false,
  errorMessage: '',
  packName: '',
  quantity: 0,
};

/* eslint-disable default-case, no-param-reassign */
const pricePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.REQUEST_BEGIN:
        draft.isLoading = true;
        break;
      case constants.REQUEST_FAIL:
        draft.isLoading = false;
        draft.errorMessage = action.messages;
        break;

      case constants.REQUEST_QUANTITY:
        draft.packName = action.data.packName;
        draft.quantity = action.data.quantity;
        break;
    }
  });

export default pricePageReducer;
