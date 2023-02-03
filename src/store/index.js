// store.js
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import {
  watchFetchUsers,
  watchCreateUser,
  watchUpdateUser,
  watchDeleteUser,
} from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchFetchUsers);
sagaMiddleware.run(watchCreateUser);
sagaMiddleware.run(watchUpdateUser);
sagaMiddleware.run(watchDeleteUser);

export default store;
