import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_USERS_FETCH, GET_USERS_SUCCESS, UPDATE_USER, UPDATE_USER_SUCCESS } from './actions'

function usersFetch() {
    return fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
}

function* workGetUsersFetch() {
    const users = yield call(usersFetch)
    yield put({ type: GET_USERS_SUCCESS, users })
}

function* updateUser(action) {
    //do somthing
    yield put({ type: UPDATE_USER_SUCCESS, id: action.payload })
}

function* mySaga() {
    yield takeEvery(GET_USERS_FETCH, workGetUsersFetch)
    yield takeEvery(UPDATE_USER, updateUser)
}

export default mySaga