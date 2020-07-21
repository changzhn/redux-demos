import React, { Component } from "react";
import { connect } from 'react-redux';
import { add as addAction, minus as minusAction } from '../actionCreators/demo3';

class Demo3 extends Component {
    state = {
        count: null
    };

    render() {
        const { count } = this.props;
        return (
            <div className="App">
                <div>demo3: react-redux</div>
                <br />
                <button onClick={() => this.props.minus(2)}>-2</button>{" "}
                &nbsp;&nbsp;&nbsp;&nbsp;
                { count } &nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={() => this.props.add(1)}>+1</button>
            </div>
        );
    }
}

const mapState2props = state => ({
    count: state.count,
})

const mapDispatch2props = dispatch => ({
    add: (...args) => dispatch(addAction(...args)),
    minus: (...args) => dispatch(minusAction(...args)),
})

export default connect(mapState2props, mapDispatch2props)(Demo3);
