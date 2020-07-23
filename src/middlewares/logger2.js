const logger = store => next => action => {
    console.log("dispatching2", action);
    let result = next(action);
    console.log("next state2", store.getState());
    return result;
};


export default logger;
