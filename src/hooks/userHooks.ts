import { connectFactory, useAppContext } from "../utils/contextFactory"
import { useGetUserInfoQuery } from "../graphql/generated"
import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import type { IUser } from "../utils/types"

const KEY = 'userInfo'
const DEFAULT_VALUE = {

}

export const useUserContext = () => useAppContext<IUser>(KEY)

export const connect = connectFactory(KEY, DEFAULT_VALUE)

export const useGetUser = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { store, setStore } = useUserContext()
  const { data, error, loading, refetch } = useGetUserInfoQuery()
  const user = data?.getUserInfo
  const isLoginPage = location.pathname === '/login'
  useEffect(() => {
    if (error) {
      navigate(`/login?orgUrl=${location.pathname}`, { replace: true });
    }
  }, [error])

  useEffect(() => {
    if (isLoginPage) return
  }, [isLoginPage])
  useEffect(() => {
    if (store?.id === user?.id) {
      return
    }
    if (user) {
      setStore({
        tel: user?.tel,
        id: user?.id,
        name: user?.name,
        desc: user?.desc,
        avatar: user?.avatar,
        refetchHandler: refetch
      })
      if (location.pathname === '/login') {
        setStore({ refetchHandler: refetch })
        navigate('/', { replace: true });
      }
      return
    }
    setStore({ refetchHandler: refetch })

    if (location.pathname !== '/login') {

      navigate(`/login?orgUrl=${location.pathname}`, { replace: true });
    }
  }, [data])
  return { loading }
  // if (window.location.pathname !== '/login') {
  //   window.location.href = '/login'
  // }

}