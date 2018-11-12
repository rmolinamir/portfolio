import { put } from 'redux-saga/effects';

import { mobileActions } from '../actions/mobile';

export const mobileSagas = {
    mobileCheck: function* () {
        yield put(mobileActions.mobileCheck())
    }
}