import {LOCALSTORAGE_TOKEN_NAME, authActions} from "./authSlice";
import {call, fork, take} from "redux-saga/effects";

import {AuthLogin} from "../../models";
import {PayloadAction} from "@reduxjs/toolkit";

function* handleLogin(payload: AuthLogin) {
	console.log(payload);
}

function* handleLogout() {
	localStorage.removeItem(LOCALSTORAGE_TOKEN_NAME);
}

function* watchLoginFlow() {
	while (true) {
		const isLoggedIn = Boolean(localStorage.getItem(LOCALSTORAGE_TOKEN_NAME));
		if (!isLoggedIn) {
			const action: PayloadAction<AuthLogin> = yield take(
				authActions.login.toString()
			);
			yield fork(handleLogin, action.payload);
		}

		yield take(authActions.logout.toString());
		yield call(handleLogout);
	}
}

export function* authSaga() {
	yield fork(watchLoginFlow);
}
