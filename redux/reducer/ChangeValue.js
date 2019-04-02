import {INCREASE, DECREASE} from '../action/actionTypes'

const defaultState = { value: 0 };

const ChangeValue = (state = defaultState, action) => {
    switch (action.type) {
        case INCREASE:
            return { value: state.value + 1 };
        case DECREASE:
            return { value: state.value - 1 };
        default:
            return state;
    }
}

export default ChangeValue;