import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { REDUX_KEY } from '../../utils/constants';

export function selectOrderPage(state) {
  return state[REDUX_KEY.pricePage] || initialState;
}

function selectPackName() {
  return createSelector(
    selectOrderPage,
    function(state) {
      return state.packName;
    },
  );
}
function selectQuantity() {
  return createSelector(
    selectOrderPage,
    function(state) {
      return state.quantity;
    },
  );
}
export { selectPackName, selectQuantity };
