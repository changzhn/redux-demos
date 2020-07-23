import { createStore, combineReducers, applyMiddleware } from 'redux';
import reudcer1 from './reducer1';
import reudcer2 from './reducer2';
import logger from '../middlewares/logger';
import logger2 from '../middlewares/logger2';

// export default createStore(reudcers, {count: 1});

const enhancedCreateStore = applyMiddleware(
    logger, 
    logger2,
)(createStore)

const reducers = combineReducers({
    state1: reudcer1,
    state2: reudcer2,
})

export default enhancedCreateStore(reducers);
