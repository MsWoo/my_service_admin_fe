import type {LoginRequestBody, LoginResponseData} from "~/composables/api/loginAPI/types";
import {postFetch} from "~/composables/api/FetchCore";

export const postLogin = (body: LoginRequestBody) =>
    postFetch<LoginResponseData>('/api/v1/login', {
      body
    });