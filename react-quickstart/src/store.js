
import { createStore, combineReducers, applyMiddleware } from 'redux';
import helloWorld from './helloWorld/reducer';
import createSagaMiddleware from 'redux-saga';
import helloWroldSaga from './helloWorld/sagas';

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    helloWorld,
});

export default createStore(rootReducer, applyMiddleware(sagaMiddleware));


sagaMiddleware.run(helloWroldSaga);