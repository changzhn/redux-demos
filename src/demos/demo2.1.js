import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../redux2.1/ACTION_TYPES';

function waiting() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('请求成功')
        }, 1000);
    })
}

const Demo2_1 = ({ loading, text, dispatch }) => {

    const fetch = () => (thunkDipatch) => {
        thunkDipatch({ type: actionTypes.START_FETCH })
        waiting().then(res => {
            thunkDipatch({
                type: actionTypes.END_FETCH,
                payload: res
            })
        })
    }

    return (
        <div>
            <div>demo2.1 redux-thunk</div>
            <div>
                {
                    loading ? '正在加载数据...' : text
                }
            </div>
            <button onClick={() => dispatch(fetch())}>开始请求数据</button>
        </div>
    )
};

export default connect(state => ({
    loading: state.loading,
    text: state.text,
}))(Demo2_1);