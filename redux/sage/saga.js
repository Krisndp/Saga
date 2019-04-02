import { delay } from 'redux-saga';
import { all } from 'redux-saga/effects'
import {Hello, watchDecrement, watchIncrement} from './SagaCreators';


export default function* saga(){
    yield all([
        Hello(),
        watchDecrement(),
        watchIncrement(),
    ]);
}