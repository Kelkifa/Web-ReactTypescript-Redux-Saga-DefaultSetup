import {AuthLogin, DefaultResponse} from "../../models";
import {PayloadAction, createSlice} from "@reduxjs/toolkit";

import {User} from "../../models/user";

export const LOCALSTORAGE_TOKEN_NAME = "token";

interface InitialState {
	loading: boolean;
	error?: string;
	isAuth: boolean;
	user?: User;
}

const initialState: InitialState = {
	loading: true,
	error: undefined,
	isAuth: Boolean(localStorage.getItem(LOCALSTORAGE_TOKEN_NAME)),
	user: undefined,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login(state, action: PayloadAction<AuthLogin>) {
			state.loading = true;
		},
		loginSuccess(state, action: PayloadAction<User>) {
			state.loading = false;
			state.isAuth = true;
			state.error = undefined;
			state.user = action.payload;
		},
		loginFailed(state, action: PayloadAction<DefaultResponse>) {
			state.loading = false;
			state.isAuth = false;
			state.error = action.payload.message;
			state.user = undefined;
		},

		logout(state) {
			state.loading = false;
			state.error = undefined;
			state.isAuth = false;
			state.user = undefined;
		},
	},
});

export const authActions = authSlice.actions;

const authReducer = authSlice.reducer;

export default authReducer;
