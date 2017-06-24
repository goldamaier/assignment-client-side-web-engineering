/*
 *
 * FormulaO actions
 *
 */

import {
  DEFAULT_ACTION,
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function fetchData() {
  return {
    type: FETCH_DATA,
  };
}

export function fetchDataSuccess(constructors) {
  return {
    type: FETCH_DATA_SUCCESS,
    constructors
  };
}
