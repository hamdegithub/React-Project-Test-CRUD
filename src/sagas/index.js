
import {
    call,
    put,
    takeEvery,
    takeLatest,} from 'redux-saga/effects';
  import axios from 'axios';
  import {
    FETCH_USERS_REQUEST,
    fetchUsersSuccess,
    fetchUsersError,
    CREATE_USER_REQUEST,
    createUserSuccess,
    createUserError,
    UPDATE_USER_REQUEST,
    updateUserSuccess,
    updateUserError,
    DELETE_USER_REQUEST,
    deleteUserSuccess,
    deleteUserError,
  } from '../actions';
  
  const api = 'https://jsonplaceholder.typicode.com/users';
  
  function* fetchUsers() {
    try {
      const response = yield call(axios.get, api);
      yield put(fetchUsersSuccess(response.data));
    } catch (error) {
      yield put(fetchUsersError(error));
    }
  }
  
function* createUser(action) {
    try {
      const response = yield call(axios.post, api, action.user);
      yield put(createUserSuccess(response.data));
    } catch (error) {
      yield put(createUserError(error));
    }
  }
  
  function* updateUser(action) {
    try {
      const response = yield call(
        axios.put,
        `${api}/${action.user.id}`,
        action.user
      );
      yield put(updateUserSuccess(response.data));
    } catch (error) {
      yield put(updateUserError(error));
    }
  }
  
  function* deleteUser(action) {
    try {
      yield call(axios.delete, `${api}/${action.id}`);
      yield put(deleteUserSuccess(action.id));
    } catch (error) {
      yield put(deleteUserError(error));
    }
  }
  
  export function* watchFetchUsers() {
    yield takeEvery(FETCH_USERS_REQUEST, fetchUsers);
  }
  
  export function* watchCreateUser() {
    yield takeLatest(CREATE_USER_REQUEST, createUser);
  }
  
  export function* watchUpdateUser() {
    yield takeLatest(UPDATE_USER_REQUEST, updateUser);
  }
  
  export function* watchDeleteUser() {
    yield takeLatest(DELETE_USER_REQUEST, deleteUser);
  }
  