import type {SidebarConfig} from "~/composables/store/useSidebarConfig";

export const sidebarConfig: SidebarConfig[] = [
  {
    idx: 0,
    depth: 1,
    title: '이용자 관리',
    type: 'internalLink',
    link: '/users',
    path: 'users'
  },
  {
    idx: 1,
    depth: 1,
    title: '사이트 관리',
    type: 'expendMenu',
    path: 'site',
    children: [
      {
        idx: 0,
        depth: 2,
        title: '공지사항 관리',
        type: 'internalLink',
        link: '/site/notice',
        path: 'notice'
      }
    ]
  },
  {
    idx: 2,
    depth: 1,
    title: '예약 현황',
    type: 'expendMenu',
    path: 'reservation',
    children: [
      {
        idx: 0,
        depth: 2,
        title: '전체 예약 현황',
        type: 'internalLink',
        link: '/reservation/status',
        path: 'status'
      },
      {
        idx: 1,
        depth: 2,
        title: '예약 관리',
        type: 'internalLink',
        link: '/reservation/manage',
        path: 'manage'
      }
    ]
  },
  {
    idx: 3,
    depth: 1,
    title: '예약 설정',
    type: 'expendMenu',
    path: 'reservation-config',
    children: [
      {
        idx: 0,
        depth: 2,
        title: '공간 관리',
        type: 'internalLink',
        link: '/reservation-config/space',
        path: 'space'
      },
      {
        idx: 1,
        depth: 2,
        title: 'Black Out 관리',
        type: 'internalLink',
        link: '/reservation-config/blackout',
        path: 'blackout'
      },
      {
        idx: 2,
        depth: 2,
        title: '기본 설정',
        type: 'internalLink',
        link: '/reservation-config/default',
        path: 'default'
      }
    ]
  },
  {
    idx: 4,
    depth: 1,
    title: '담당자 관리',
    type: 'internalLink',
    link: '/admin',
    path: 'admin'
  },
]