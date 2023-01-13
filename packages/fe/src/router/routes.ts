/* eslint-disable no-unused-vars */
export enum Routes {
  HOME = 'HOME',
}

interface Route {
  title: string
  path: string
  enabled: boolean
}

export const ROUTES: Record<Routes, Route> = {
  [Routes.HOME]: {
    title: 'Home',
    path: '/',
    enabled: true,
  },
}

export const REDIRECT_PATH_PARAM = 'redirect'
