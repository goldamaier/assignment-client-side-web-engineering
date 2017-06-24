
import { fromJS } from 'immutable';
import formulaOReducer from '../reducer';

describe('formulaOReducer', () => {
  it('returns the initial state', () => {
    expect(formulaOReducer(undefined, {})).toEqual(fromJS({}));
  });
});
