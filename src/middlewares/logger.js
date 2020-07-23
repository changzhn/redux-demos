const logger = store => next => action => {
    console.log("dispatching1", action);
    let result = next(action);
    console.log("next state1", store.getState());
    return result;
};


export default logger;
