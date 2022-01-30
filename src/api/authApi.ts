import {Auth, AuthLogin} from "../models";
import {DataResponse, DefaultResponse} from "../models/commons";

import axiosClient from "./axiosClient";

const authApi = {
	login(data: AuthLogin): Promise<DefaultResponse> {
		const url = "/auth/login";
		return axiosClient.post(url, data);
	},
	register(data: Auth): Promise<DefaultResponse> {
		const url = "/auth/register";
		return axiosClient.post(url, data);
	},
	firstAccess(): Promise<DefaultResponse> {
		const url = "/auth/firstAccess";
		return axiosClient.get(url);
	},
};

export default authApi;
