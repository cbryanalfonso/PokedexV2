import {createStore ,applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import reduxSaga from 'redux-saga';

import rootSaga from '../sagas'

const sagaMiddleware = reduxSaga();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga);

export default store
