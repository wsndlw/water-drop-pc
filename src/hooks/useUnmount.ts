import { useEffect } from "react"
import useLatest from "./useLatest"



const useUnmount = (fn: () => void) => {
  const latest = useLatest(fn)
  useEffect(() => {
    return () => latest.current()
  })
    , []
}

export default useUnmount