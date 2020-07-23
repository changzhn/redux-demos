import * as actionTypes from './ACTION_TYPES';

function reducers(store, action) {
    switch(action.type) {
        case actionTypes.ADD:
            return {
                ...store,
                count: store.count + action.payload,
            }
        case actionTypes.MINUS:
            return {
                ...store,
                count: store.count - action.payload,
            }
        default:
            return store;
    }
}

export default reducers;