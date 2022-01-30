export interface Auth {
	fullname: string;
	username: string;
	password: string;
}

export type AuthLogin = Omit<Auth, "fullname">;
