import React, { Component } from 'react';
import store from '../redux2/store';
import * as actionTypes from "../redux2/ACTION_TYPES";

export default class Demo2 extends Component {
    state = {
        count1: null,
        count2: null,
    }

    componentDidMount() {
        const state = store.getState();
        this.setState({
            count1: state.state1.count,
            count2: state.state2.count,
        });
        store.subscribe(() => {
            const state = store.getState();
            this.setState({
                count1: state.state1.count,
                count2: state.state2.count,
            });
        })
    }

    render() {
        const state = this.state;
        return (
            <div>
                demo2：combineReducers & applyMiddleware
                <div>
                    <button onClick={() => store.dispatch({type: actionTypes.MINUS1})}>-1</button> &nbsp;&nbsp;&nbsp;&nbsp;
                    { state.count1 } &nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={() => store.dispatch({type: actionTypes.ADD1})}>+1</button>
                </div>
                <div>
                    <button onClick={() => store.dispatch({type: actionTypes.MINUS2})}>-1</button> &nbsp;&nbsp;&nbsp;&nbsp;
                    { state.count2 } &nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={() => store.dispatch({type: actionTypes.ADD2})}>+1</button>
                </div>
            </div>
        )
    }
}
