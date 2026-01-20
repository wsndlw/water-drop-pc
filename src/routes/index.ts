import Login from "../containers/Login"
import Home from "../containers/Home"

export const ROUTE_CONFIG = [
  {
    path: '/login',
    key: 'login',
    element: Login,
    title: '登录'
  },
  {
    path: '/',
    key: 'home',
    element: Home,
    title: '登录'
  },
]