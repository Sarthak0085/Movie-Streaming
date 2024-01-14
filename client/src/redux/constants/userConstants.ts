import { UserInfoType } from "../../types/type";

export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";
export const USER_LOGIN_RESET = "USER_LOGIN_RESET";
export const USER_LOGOUT = "USER_LOGOUT";

export const USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAIL = "USER_REGISTER_FAIL";
export const USER_REGISTER_RESET = "USER_REGISTER_RESET";

export const USER_UPDATE_PROFILE_REQUEST = "USER_UPDATE_PROFILE_REQUEST";
export const USER_UPDATE_PROFILE_SUCCESS = "USER_UPDATE_PROFILE_SUCCESS";
export const USER_UPDATE_PROFILE_FAIL = "USER_UPDATE_PROFILE_FAIL";
export const USER_UPDATE_PROFILE_RESET = "USER_UPDATE_PROFILE_RESET";

export const USER_DELETE_PROFILE_REQUEST = "USER_DELETE_PROFILE_REQUEST";
export const USER_DELETE_PROFILE_SUCCESS = "USER_DELETE_PROFILE_SUCCESS";
export const USER_DELETE_PROFILE_FAIL = "USER_DELETE_PROFILE_FAIL";
export const USER_DELETE_PROFILE_RESET = "USER_DELETE_PROFILE_RESET";

export const USER_CHANGE_PASSWORD_REQUEST = "USER_CHANGE_PASSWORD_REQUEST";
export const USER_CHANGE_PASSWORD_SUCCESS = "USER_CHANGE_PASSWORD_SUCCESS";
export const USER_CHANGE_PASSWORD_FAIL = "USER_CHANGE_PASSWORD_FAIL";
export const USER_CHANGE_PASSWORD_RESET = "USER_CHANGE_PASSWORD_RESET";

export const GET_USER_FAVOURITE_MOVIE_REQUEST = "GET_USER_FAVOURITE_MOVIE_REQUEST";
export const GET_USER_FAVOURITE_MOVIE_SUCCESS = "GET_USER_FAVOURITE_MOVIE_SUCCESS";
export const GET_USER_FAVOURITE_MOVIE_FAIL = "GET_USER_FAVOURITE_MOVIE_FAIL";
export const GET_USER_FAVOURITE_MOVIE_RESET = "GET_USER_FAVOURITE_MOVIE_RESET";

export const DELETE_USER_ALL_FAVOURITE_MOVIE_REQUEST = "DELETE_USER_ALL_FAVOURITE_MOVIE_REQUEST";
export const DELETE_USER_ALL_FAVOURITE_MOVIE_SUCCESS = "DELETE_USER_ALL_FAVOURITE_MOVIE_SUCCESS";
export const DELETE_USER_ALL_FAVOURITE_MOVIE_FAIL = "DELETE_USER_ALL_FAVOURITE_MOVIE_FAIL";
export const DELETE_USER_ALL_FAVOURITE_MOVIE_RESET = "DELETE_USER_ALL_FAVOURITE_MOVIE_RESET";

export const GET_ALL_USERS_REQUEST = "GET_ALL_USERS_REQUEST";
export const GET_ALL_USERS_SUCCESS = "GET_ALL_USERS_SUCCESS";
export const GET_ALL_USERS_FAIL = "GET_ALL_USERS_FAIL";
export const GET_ALL_USERS_RESET = "GET_ALL_USERS_RESET";

export const DELETE_USER_BY_ADMIN_REQUEST = "DELETE_USER_BY_ADMIN_REQUEST";
export const DELETE_USER_BY_ADMIN_SUCCESS = "DELETE_USER_BY_ADMIN_SUCCESS";
export const DELETE_USER_BY_ADMIN_FAIL = "DELETE_USER_BY_ADMIN_FAIL";
export const DELETE_USER_BY_ADMIN_RESET = "DELETE_USER_BY_ADMIN_RESET";

export const LIKE_MOVIE_REQUEST = "LIKE_MOVIE_REQUEST";
export const LIKE_MOVIE_SUCCESS = "LIKE_MOVIE_SUCCESS";
export const LIKE_MOVIE_FAIL = "LIKE_MOVIE_FAIL";
export const LIKE_MOVIE_RESET = "LIKE_MOVIE_RESET";

export interface UserRegisterRequest {
    type: typeof USER_REGISTER_REQUEST;
}

export interface UserRegisterSuccess {
    type: typeof USER_REGISTER_SUCCESS;
    payload: UserInfoType;
}

export interface UserRegisterFail {
    type: typeof USER_REGISTER_FAIL;
    payload: {
        error: string;
    };
}

export interface UserRegisterReset {
    type: typeof USER_REGISTER_RESET;
}

export interface UserLoginRequest {
    type: typeof USER_LOGIN_REQUEST;
}

export interface UserLoginSuccess {
    type: typeof USER_LOGIN_SUCCESS;
    payload: UserInfoType; // Replace 'any' with the actual type of your payload
}

export interface UserLoginFail {
    type: typeof USER_LOGIN_FAIL;
    payload: {
        error: string;
    }; // Replace 'any' with the actual type of your payload
}

export interface UserLoginReset {
    type: typeof USER_LOGIN_RESET;
}

export interface UserLogout {
    type: typeof USER_LOGOUT;
}

export interface UserDeleteRequest {
    type: typeof USER_DELETE_PROFILE_REQUEST;
}

export interface UserDeleteSuccess {
    type: typeof USER_DELETE_PROFILE_SUCCESS;
    payload: UserInfoType;
}

export interface UserDeleteFail {
    type: typeof USER_DELETE_PROFILE_FAIL;
    payload: {
        error: string;
    };
}

export interface UserDeleteReset {
    type: typeof USER_DELETE_PROFILE_RESET;
}

export interface UserUpdateRequest {
    type: typeof USER_UPDATE_PROFILE_REQUEST;
}

export interface UserUpdateSuccess {
    type: typeof USER_UPDATE_PROFILE_SUCCESS;
    payload: UserInfoType;
}

export interface UserUpdateFail {
    type: typeof USER_UPDATE_PROFILE_FAIL;
    payload: {
        error: string;
    };
}

export interface UserUpdateReset {
    type: typeof USER_UPDATE_PROFILE_RESET;
}

export interface UserChangePasswordRequest {
    type: typeof USER_CHANGE_PASSWORD_REQUEST;
}

export interface UserChangePasswordSuccess {
    type: typeof USER_CHANGE_PASSWORD_FAIL;
    payload: UserInfoType;
}

export interface UserChangePasswordFail {
    type: typeof USER_CHANGE_PASSWORD_FAIL;
    payload: {
        error: string;
    };
}

export interface UserChangePasswordReset {
    type: typeof USER_CHANGE_PASSWORD_RESET;
}

export interface UserFavouritesMovieRequest {
    type: typeof GET_USER_FAVOURITE_MOVIE_REQUEST;
}

export interface UserFavouritesMovieSuccess {
    type: typeof GET_USER_FAVOURITE_MOVIE_SUCCESS;
    payload: UserInfoType;
}

export interface UserFavouritesMovieFail {
    type: typeof GET_USER_FAVOURITE_MOVIE_FAIL;
    payload: {
        error: string;
    };
}

export interface UserFavouritesMovieReset {
    type: typeof GET_USER_FAVOURITE_MOVIE_RESET;
}

export interface DeleteAllUserFavouritesMovieRequest {
    type: typeof DELETE_USER_ALL_FAVOURITE_MOVIE_REQUEST;
}

export interface DeleteAllUserFavouritesMovieSuccess {
    type: typeof DELETE_USER_ALL_FAVOURITE_MOVIE_SUCCESS;
    payload: UserInfoType;
}

export interface DeleteAllUserFavouritesMovieFail {
    type: typeof DELETE_USER_ALL_FAVOURITE_MOVIE_FAIL;
    payload: {
        error: string;
    };
}

export interface DeleteAllUserFavouritesMovieReset {
    type: typeof DELETE_USER_ALL_FAVOURITE_MOVIE_RESET;
}

export interface GetAllUsersrequest {
    type: typeof GET_ALL_USERS_REQUEST;
}

export interface GetAllUsersSuccess {
    type: typeof GET_ALL_USERS_SUCCESS;
    payload: UserInfoType;
}

export interface GetAllUsersFail {
    type: typeof GET_ALL_USERS_FAIL;
    payload: {
        error: string;
    };
}

export interface GetAllUsersReset {
    type: typeof GET_ALL_USERS_RESET;
}

export interface DeleteUserRequest {
    type: typeof DELETE_USER_BY_ADMIN_REQUEST;
}

export interface DeleteUserSuccess {
    type: typeof DELETE_USER_BY_ADMIN_SUCCESS;
    payload: UserInfoType;
}

export interface DeleteUserFail {
    type: typeof DELETE_USER_BY_ADMIN_FAIL;
    payload: {
        error: string;
    };
}

export interface DeleteUserReset {
    type: typeof DELETE_USER_BY_ADMIN_RESET;
}

// Create a union type for all user action types
export type UserActionTypes =
    | UserRegisterRequest
    | UserRegisterSuccess
    | UserRegisterFail
    | UserRegisterReset
    | UserLoginRequest
    | UserLoginSuccess
    | UserLoginFail
    | UserLoginReset
    | UserLogout
    | UserUpdateRequest
    | UserUpdateSuccess
    | UserUpdateFail
    | UserUpdateReset
    | UserDeleteRequest
    | UserDeleteSuccess
    | UserDeleteFail
    | UserDeleteReset
    | UserChangePasswordRequest
    | UserChangePasswordSuccess
    | UserChangePasswordFail
    | UserChangePasswordReset
    | UserFavouritesMovieRequest
    | UserFavouritesMovieSuccess
    | UserFavouritesMovieFail
    | UserFavouritesMovieReset
    | DeleteAllUserFavouritesMovieRequest
    | DeleteAllUserFavouritesMovieSuccess
    | DeleteAllUserFavouritesMovieFail
    | DeleteAllUserFavouritesMovieReset
    | GetAllUsersrequest
    | GetAllUsersSuccess
    | GetAllUsersFail
    | GetAllUsersReset
    | DeleteUserRequest
    | DeleteUserSuccess
    | DeleteUserFail
    | DeleteUserReset;