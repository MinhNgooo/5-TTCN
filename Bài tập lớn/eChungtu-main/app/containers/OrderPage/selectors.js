import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { REDUX_KEY } from '../../utils/constants';

export function selectOrderPage(state) {
  return state[REDUX_KEY.orderPage] || initialState;
}

function selectOrderInformation() {
  return createSelector(
    selectOrderPage,
    function(state) {
      return state.orderInformation;
    },
  );
}

export { selectOrderInformation };
