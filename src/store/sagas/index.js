import { takeEvery } from 'redux-saga/effects'

import { mobileSagas } from './mobile'

import * as actionTypes from '../actions/actionTypes'

export function * watchMobileCheck () {
  yield takeEvery(actionTypes.MOBILE_SAGA_INIT, mobileSagas.mobileCheck)
}
