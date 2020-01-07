

import { call, put, takeEvery } from 'redux-saga/effects';
import { getInfor } from './api';
import * as actions from './actions';
import * as actionTypes from './actionTypes';

function* getInforSaga(action) {
    try {
        const info = yield call(getInfor, action.name);
        yield put(actions.getInforSuccess(info));
    } catch (e) {
        yield put(actions.getInforFailed());
    }
}


function* root() {
    yield takeEvery(actionTypes.GET_INFOR, getInforSaga);
}

export default root;