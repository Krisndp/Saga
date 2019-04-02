
import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer/reducers';
import saga from '../sage/saga';
import createSaga from 'redux-saga';

const sagaMiddleware = createSaga();

const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(saga);

export default store;