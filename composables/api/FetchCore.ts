import type { CookieRef, UseFetchOptions } from 'nuxt/app';
import type {RuntimeConfig} from "nuxt/schema";
import defu from "defu";
import {FetchMethod} from "~/composables/api/types";
import { showError } from '#app';

interface FetchOptions {
  body?: any;
  query?: any;
  headers?: Record<string, string> | [key: string, value: string][] | Headers;
}

const createFetchDefaultsOption = <T>(
    url: string,
    method: FetchMethod,
    config: RuntimeConfig,
    userAuth: CookieRef<string | null | undefined>
): UseFetchOptions<T> => {
  return {
    baseUrl: config.public.apiEndpoint ?? 'http://localhost',
    key: url,
    method,
    headers: userAuth.value ? { Authorization: `${userAuth.value}` } : {},
    timeout: 10000,
    onResponse({request, response, options }) {
      alert(response)
      // const loginRegex = /\/api\/v1\/login/g;
      // const { url, headers } = response;
      // const isLoginResponse = loginRegex.test(url);
      // if (isLoginResponse) {
      //   userAuth.value = headers.get('authorization')
      // }
    },
    onResponseError({ response }) {
      alert(response)
      // showError({ statusCode: response.status })
    }
  }
}

const fetchCoreConfig = (url: string, method: FetchMethod) => {
  const userAuth = useCookie('token', {
    httpOnly: false,
    secure: true,
    sameSite: true,
  });
  const config = useRuntimeConfig();
  return createFetchDefaultsOption(url, method, config, userAuth);
}

export const postFetch = <Response>(url: string, options: FetchOptions = {}) => {
  const config = fetchCoreConfig(url, FetchMethod.POST);
  const params = defu(options, config);
  return $fetch<Response>(url, params);
}