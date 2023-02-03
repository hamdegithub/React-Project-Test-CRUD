// actions.js
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';
export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_ERROR = 'CREATE_USER_ERROR';
export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_ERROR = 'UPDATE_USER_ERROR';
export const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_ERROR = 'DELETE_USER_ERROR';

export const fetchUsersRequest = () => ({ type: FETCH_USERS_REQUEST });
export const fetchUsersSuccess = users => ({ type: FETCH_USERS_SUCCESS, users });
export const fetchUsersError = error => ({ type: FETCH_USERS_ERROR, error });
export const createUserRequest = user => ({ type: CREATE_USER_REQUEST, user });
export const createUserSuccess = user => ({ type: CREATE_USER_SUCCESS, user });
export const createUserError = error => ({ type: CREATE_USER_ERROR, error });
export const updateUserRequest = user => ({ type: UPDATE_USER_REQUEST, user });
export const updateUserSuccess = user => ({ type: UPDATE_USER_SUCCESS, user });
export const updateUserError = error => ({ type: UPDATE_USER_ERROR, error });
export const deleteUserRequest = id => ({ type: DELETE_USER_REQUEST, id });
export const deleteUserSuccess = id => ({ type: DELETE_USER_SUCCESS, id });
export const deleteUserError = error => ({ type: DELETE_USER_ERROR, error });
