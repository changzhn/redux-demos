import React from 'react';
import { Provider } from 'react-redux';
import Demo3 from './demo3';
import store from "../redux3/store";

export default () => (
    <Provider store={store}>
        <Demo3 />
    </Provider>
)