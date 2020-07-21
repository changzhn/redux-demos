import React from 'react';
import { Provider } from '../react-redux';
import Demo4 from './demo4';
import store from "../redux4/store";

export default () => (
    <Provider store={store}>
        <Demo4 />
    </Provider>
)