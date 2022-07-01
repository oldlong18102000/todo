import { DECREMENT, INCREMENT, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from "./types";
import axios from "axios";

export const increaseCounter = () => {
    return {
        type: INCREMENT,
    };
};

export const decreaseCounter = () => {
    return {
        type: DECREMENT,
    };
};

// start doing finish
export const fetchAllUsers = () => {
    return async (dispatch, getState) => {
        dispatch(fetchUserRequest());
        try {
            const res = await axios.get("http://localhost:8080/users/all");
            const data = res && res.data ? res.data : []
            dispatch(fetchUserSucess(data));
        } catch (error) {
            console.log(error);
            dispatch(fetchUserError(error));
        }
    };
};

export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST,
    };
};

export const fetchUserSucess = (data) => {
    return {
        type: FETCH_USER_SUCCESS,
        dataUsers: data
    };
};

export const fetchUserError = () => {
    return {
        type: FETCH_USER_ERROR
    };
};