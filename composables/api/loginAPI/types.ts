import type {CommonResponse} from "~/composables/api/types";

export interface LoginRequestBody {
  userId : string;
  password : string;
}

export interface LoginResponseData extends CommonResponse {
  data : {
    accessToken: string;
    refreshToken: string;
  }
}