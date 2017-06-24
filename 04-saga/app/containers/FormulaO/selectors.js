import { createSelector } from 'reselect';

/**
 * Direct selector to the formulaO state domain
 */
const selectFormulaODomain = (state) => state.get('FormulaO');

/**
 * Other specific selectors
 */

const selectConstructors = () => createSelector(
  selectFormulaODomain,
  (state) => state.get('constructors')
);


/**
 * Default selector used by FormulaO
 */

const makeSelectFormulaO = () => createSelector(
  selectFormulaODomain,
  (substate) => substate
);

export default makeSelectFormulaO;
export {
  selectFormulaODomain,
  selectConstructors
};
