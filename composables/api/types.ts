export enum FetchMethod {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete'
}

export type TypeYesNo = 'Y' | 'N';

export interface CommonResponse {
  result: boolean;
  code: string;
  message: string;
}

export interface AuthMenuList {
  /**
   * 메뉴 시퀀스
   */
  menuSeq: number;
  /**
   * 메뉴 이름
   */
  menuName: string;
  /**
   * 메뉴 단계
   */
  menuDepth: number;
  /**
   * 메뉴 url
   */
  menuUrl?: string;
  /**
   * 순서
   */
  ord: number;
  /**
   * 링크 여부
   * Y: 링크(메뉴이동)가 가능
   * N: 링크(메뉴이동)가 불가능
   */
  linkYn: TypeYesNo;

  children?: AuthMenuList[];
}