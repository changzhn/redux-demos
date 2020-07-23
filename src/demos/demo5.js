import React from "react";
import Demo5Context from '../redux5/context';
import * as actionTypes from '../redux5/ACTION_TYPES';

const Demo5 = props => {
    const { state, dispatch } = React.useContext(Demo5Context);
    const { count } = state;
    return (
        <div className="App">
            <div>demo5: useReducer</div>
            <br />
            <button onClick={() => dispatch({
                type: actionTypes.MINUS,
                payload: 2,
            })}>-2</button>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;
            { count } &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => dispatch({
                type: actionTypes.ADD,
                payload: 1,
            })}>+1</button>
        </div>
    );
}


export default Demo5;
