import * as actionTypes from "../redux4/ACTION_TYPES";

export const add = num => ({
    type: actionTypes.ADD,
    payload: num,
})

export const minus = num => ({
    type: actionTypes.MINUS,
    payload: num,
})