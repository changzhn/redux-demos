import * as actionTypes from './ACTION_TYPES';

const initState = {
    loading: false,
    text: '空数据'
}

const reducers = (state = initState, action) => {
    switch(action.type) {
        case actionTypes.START_FETCH:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.END_FETCH:
            return {
                ...state,
                loading: false,
                text: action.payload
            }
        default:
            return state;
    }
};

export default reducers;