import React from 'react';
import { Provider } from 'react-redux';
import Demo2_1 from './demo2.1';
import store from "../redux2.1/store";

export default () => (
    <Provider store={store}>
        <Demo2_1 />
    </Provider>
)