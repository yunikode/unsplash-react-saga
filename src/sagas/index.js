import { all } from 'redux-saga/effects';

import ImagesSaga from './ImagesSaga';
import StatsSaga from './StatsSaga';

export default function* rootSaga() {
  yield all([ImagesSaga(), StatsSaga()]);
}
