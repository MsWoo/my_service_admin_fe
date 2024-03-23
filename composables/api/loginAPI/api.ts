import type {LoginRequestBody, LoginResponseData} from "~/composables/api/loginAPI/types";
import {postFetch} from "~/composables/api/FetchCore";

export const postLogin = (body: LoginRequestBody) => {
  console.log(body)
  return false;
  postFetch<LoginResponseData>('/api/v1/login', {
    body,
    onResponse: (res) => {
      alert(res)
      return false;
    },
    onResponseError: (err) => {
      alert(err)
      return false;
    }
  })
}