import * as actionTypes from './ACTION_TYPES';

const defaultStore = {
    count: 1
}

function reducers(store = defaultStore, action) {
    switch(action.type) {
        case actionTypes.ADD1:
            return {
                ...store,
                count: store.count + (action.payload || 1),
            }
        case actionTypes.MINUS1:
            return {
                ...store,
                count: store.count - (action.payload || 1),
            }
        default:
            return store;
    }
}

export default reducers;
