import React, { useReducer } from 'react';
import reducers from '../redux5/reducers';
import Demo5Context, { initValues } from '../redux5/context';
import Demo5 from './demo5';

export default () => {
    const [state, dispatch] = useReducer(reducers, initValues);
    return (
        <Demo5Context.Provider value={{state, dispatch}}>
            <Demo5 />
        </Demo5Context.Provider>
    )
}