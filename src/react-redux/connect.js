import React from 'react';
import { MyContext } from './MyContext';

const connect = (mapState2props, mapDispatch2props) => WrapperedComponent => {

    return class Comp extends React.Component {
        render() {
            return (
                <MyContext.Consumer>
                    {
                        store => {
                            const state = store.getState();
                            const state4props = mapState2props(state);
                            const dispatch4props = mapDispatch2props(store.dispatch);
                            return (
                                <WrapperedComponent 
                                    {...this.props}
                                    {...state4props}
                                    {...dispatch4props}
                                />
                            )
                        }
                    }
                </MyContext.Consumer>
            )
        }
    }
}


export default connect;