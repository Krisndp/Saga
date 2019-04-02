import {INCREASE,DECREASE} from '../action/actionTypes';
import {delay} from 'redux-saga';
import {put, takeEvery} from 'redux-saga/effects';

export function* Hello(){
    console.log('Hello')
}

function* increment(){
    console.log('This is increment saga')
}

export function* watchIncrement(){
    yield takeEvery(INCREASE, increment)
}

function* decrease(){
    console.log('This is decrement saga')
}

export function* watchDecrement(){
    yield takeEvery(DECREASE, decrease)
}