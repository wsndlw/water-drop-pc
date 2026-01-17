import { useCallback, useState } from "react"
import useMount from "./useMount"

/**通用的request钩子
 * 实现发送请求，获取数据，
 * 支持手动与加载时触发
 */
interface IOption {
  params: Record<string, string>,  //传入参数，供service使用
  mannual: boolean,   //标记手动还是加载时候触发
  onSuccess: (res: unknown) => void,
  onError: (error: unknown) => void
}

const useRequest = (service: (params: Record<string, string>) => Promise<unknown>,
  option: IOption
) => {

  const [data, setData] = useState<unknown>()
  const [loading, setLoading] = useState<boolean>(false)

  const init = useCallback((curParams: Record<string, string>) => {
    service(curParams)
      .then(res => {
        setLoading(true)
        setData(res)
        setLoading(false)
        option.onSuccess && option.onSuccess(res)
      }).catch(e => {
        setLoading(false)
        console.log(e);
        option.onError && option.onError(e)
      })
  }
    , [service]
  )

  useMount(
    () => {
      if (!option.mannual) {
        init(option.params)
      }
    }
  )
  const run = (runParams: Record<string, string>) => {
    init(runParams)
  }


  return { data, loading, run }
}


export default useRequest