import React from 'react';
import { MyContext } from './MyContext';

export default class Provider extends React.Component {
    render() {
        return (
            <MyContext.Provider value={this.props.store}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}