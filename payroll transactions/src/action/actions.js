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
            const res = await axios.get("https://62ad1db69fa81d00a7bd4d8d.mockapi.io/api/v1/transactions");
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

export const statusFilterChange = (status) => {
    return {
        type: 'filters/statusFilterChange',
        payload: status,
    };
};

export const clientFilterChange = (client) => {
    return {
        type: 'filters/clientFilterChange',
        payload: client,
    };
};

export const searchFilterChange = (search) => {
    return {
        type: 'filters/searchFilterChange',
        payload: search,
    };
};

export const deleteUser = (id) => {
    return {
        type: 'DELETE_USER',
        payload: id,
    };
};