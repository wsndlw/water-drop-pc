import { connectFactory, useAppContext } from "./contextFactory"
import { useGetUserInfoQuery } from "../graphql/generated"

const KEY = 'userInfo'
const DEFAULT_VALUE = {

}

export const useUserContext = () => useAppContext(KEY)

export const connect = connectFactory(KEY, DEFAULT_VALUE)

export const useGetUser = async () => {
  const { setStore } = useUserContext()
  const { refetch } = useGetUserInfoQuery({
    skip: true
  })
  {const res = await refetch()
  const data = res.data
  if (data?.getUserInfo) {
    const { id, tel } = data.getUserInfo
    setStore({ id, tel })
    return
  }
  window.location.href = '/login'}
}