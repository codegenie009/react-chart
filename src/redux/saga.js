import { put, takeLatest, takeEvery, all } from 'redux-saga/effects';

function* fetchData() {
    const res = yield fetch('https://api.coincap.io/v2/assets/?limit=15').then(response => response.json());
    yield put({ type: "DATA_RECEIVED", payload: res, });
}
function* actionWatcher() {
    yield takeLatest('GET_DATA', fetchData)
}
export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}