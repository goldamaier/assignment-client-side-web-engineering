// import { take, call, put, select } from 'redux-saga/effects';

import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import request from 'utils/request';
import { fetchDataSuccess } from './actions';

// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
}

// function* watchFetchData() {
//   yield takeEvery('FETCH_REQUESTED', fetchData)
// }


export function* fetchData(action) {
  // const constructor = action.constructor;
  const requestURL = `http://ergast.com/api/f1/constructors.json?limit=10000`;

   try {
      const data = yield call(request, requestURL);
      const constructors = data.MRData.ConstructorTable.Constructors;
      yield put(fetchDataSuccess(constructors));
   } catch (error) {
      yield put({type: "FETCH_FAILED", error});
   }
}



// All sagas to be loaded
export default [
  defaultSaga,
  fetchData,
];
