/*
 *
 * FormulaO reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  FETCH_DATA_SUCCESS
} from './constants';

const initialState = fromJS({});

function formulaOReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case FETCH_DATA_SUCCESS:
      return state.set('constructors', action.constructors);
    default:
      return state;
  }
}

export default formulaOReducer;
