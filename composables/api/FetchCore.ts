import defu from "defu";
import {FetchMethod} from "~/composables/api/types";
import type {CookieRef} from "nuxt/app";
import type {RuntimeConfig} from "nuxt/schema";

interface CoreFetchOptions {
  baseURL: string;
  key: string;
  method: 'get' | 'post' | 'put' | 'delete';
  headers: any;
  timeout: number;
  onRequestError: ({ request, options, error }) => void;
  onResponse: ({ request, response, options }) => void;
  onResponseError: ({ request, response, options }) => void;
}

interface FetchOptions {
  body?: any;
  query?: any;
  headers?: Record<string, string> | [key: string, value: string][] | Headers;
}

const createFetchDefaultsOption = (
    url: string,
    method: FetchMethod,
    config: RuntimeConfig,
    userAuth: CookieRef<string>
): CoreFetchOptions => {
  return {
    // @ts-ignore
    baseURL: config.public.apiEndpoint ?? 'http://localhost',
    // cache request
    key: url,
    method,
    headers: userAuth ? { Authorization: userAuth } : {},
    timeout: 10000,
    onResponse({ request, response, options }) {
      // const loginRegex = /\/api\/v1\/login/g;
      const { url, headers } = response;
      // const isLoginResponse = loginRegex.test(url);
      // if (isLoginResponse) {
      // console.log(headers.get('authorization'));
      // useSession('token', headers.get('authorization'));
      // }
      // console.log(request, response, options);
    },
    onRequestError() {
      /**
       * Client에서 요청시 실패 했을 때, 페이지 렌딩 및 오류 체크
       * 일단 서버 측 에러로 노출시킴
       */
      showError({ statusCode: 500 });
    },
    /**
     * 모든 API에 대한 로직 구현
     */
    onResponseError({ response }) {
      showError({ statusCode: response.status });
    }
  };
};

const fetchCoreConfig = (url: string, method: FetchMethod) => {
  // const userAuth = useSession('token');
  const config = useRuntimeConfig();
  // return createFetchDefaultsOption(url, method, config, userAuth);
  return createFetchDefaultsOption(url, method, config);
};

export const getFetch = <Res>(url: string, options: FetchOptions = {}) => {
  const config = fetchCoreConfig(url, FetchMethod.GET);
  const params = defu(options, config);
  return $fetch<Res>(url, params);
};

export const postFetch = <Res>(url: string, options: FetchOptions = {}) => {
  const config = fetchCoreConfig(url, FetchMethod.POST);
  const params = defu(options, config);
  return $fetch<Res>(url, params);
};