import React from 'react';
import { MyContext } from './MyContext';

const Provider = ({ store, children }) => {
    const [preState, setPreState] = React.useState(store.getState());

    React.useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            const currentState = store.getState();
            if (preState !== currentState) {
                setPreState(currentState);
            }
        });
        return unsubscribe;
    }, [preState, store]);

    return (
        <MyContext.Provider value={{store, preState}}>
            {children}
        </MyContext.Provider>
    )
}

export default Provider;