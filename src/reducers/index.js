
import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_ERROR,
    CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS,
    CREATE_USER_ERROR,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_ERROR,
  } from '../actions';
  
  const initialState = {
    loading: false,
    users: [],
    error: null,
  };
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
   case FETCH_USERS_REQUEST:
    return {
      ...state,
      loading: true,
      error: null,
    };
  case FETCH_USERS_SUCCESS:
    return {
      ...state,
      loading: false,
      users: action.users,
    };
  case FETCH_USERS_ERROR:
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  case CREATE_USER_REQUEST:
    return {
      ...state,
      loading: true,
      error: null,
    };
  case CREATE_USER_SUCCESS:
    return {
      ...state,
      loading: false,
      users: [...state.users, action.user],
    };
  case CREATE_USER_ERROR:
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  case UPDATE_USER_REQUEST:
    return {
      ...state,
      error: null,
    };
  case UPDATE_USER_SUCCESS:
    return {
      ...state,
      loading: false,
      users: state.users.map(user =>
        user.id === action.user.id ? action.user : user
      ),
    };
  case UPDATE_USER_ERROR:
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  case DELETE_USER_REQUEST:
    return {
      ...state,
      loading: true,
      error: null,
    };
  case DELETE_USER_SUCCESS:
    return {
      ...state,
      loading: false,
      users: state.users.filter(user => user.id !== action.id),
    };
  case DELETE_USER_ERROR:
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  default:
    return state;
}
}
