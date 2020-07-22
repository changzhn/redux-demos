import React, { useContext } from 'react';
import { MyContext } from './MyContext';

const connect = (mapState2props, mapDispatch2props) => WrapperedComponent => props => {
    const { store } = useContext(MyContext);
    const state = store.getState();
    const state4props = mapState2props(state);
    const dispatch4props = mapDispatch2props(store.dispatch);
    return (
        <WrapperedComponent 
            {...props} 
            {...state4props}
            {...dispatch4props}
        />
    )
}

export default connect;