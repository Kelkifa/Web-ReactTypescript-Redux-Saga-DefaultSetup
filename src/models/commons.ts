export interface DataResponse<T> {
	success: boolean;
	message: string;
	response: T;
}

export type DefaultResponse = Omit<DataResponse<any>, "response">;
