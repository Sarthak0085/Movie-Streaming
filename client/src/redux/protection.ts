import { Dispatch } from "@reduxjs/toolkit";
import { logoutAction } from "./actions/userAction";

// type ActionPayload = {
//     type: string;
//     payload?: string;
// };

// Define the type for the ErrorsAction function
type ErrorsActionType = (error: any, dispatch: Dispatch, action: string) => void;

export const ErrorsAction: ErrorsActionType = (error, dispatch, action) => {
    const message = error.response && error.response?.data.message ? error.response.data.message : error.message;
    if (message === "Not Authorized") {
        dispatch(logoutAction());
    }
    return dispatch({ type: action, payload: message });
}

export const tokenProtection = (getState) => {
    console.log("hello");

    const { userLogin: { userInfo } } = getState();
    if (!userInfo.token) {
        console.log("bye");

        return null;
    }
    console.log(userInfo?.token);

    return userInfo?.token;
}