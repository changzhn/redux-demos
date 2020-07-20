import React, { Component } from "react";
import store from "../redux1/store";
import * as actionTypes from "../redux1/ACTION_TYPES";

class Demo1 extends Component {
    state = {
        count: null
    };

    componentDidMount() {
        const state = store.getState();
        this.setState({
            count: state.count
        });
        store.subscribe(() => {
            const newState = store.getState();
            this.setState({
                count: newState.count
            });
        });
    }

    add = () => {
        store.dispatch({
            type: actionTypes.ADD,
            payload: 1
        });
    };

    minus = () => {
        store.dispatch({
            type: actionTypes.MINUS,
            payload: 2
        });
    };

    render() {
        const state = this.state;
        return (
            <div className="App">
                <div>demo1: 原生redux</div>
                <br />
                <button onClick={this.minus}>-2</button>{" "}
                &nbsp;&nbsp;&nbsp;&nbsp;
                {state.count} &nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={this.add}>+1</button>
            </div>
        );
    }
}

export default Demo1;
