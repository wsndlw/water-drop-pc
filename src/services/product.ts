import { message } from "antd"
import { useCommitProductInfoMutation, useDeleteProductMutation, useGetProductInfoLazyQuery, useGetProductInfoQuery, useGetProductsQuery, type ProductInput } from "../graphql/generated"
import { DEFAULT_PAGE_SIZE } from "../utils/constants"



export const useEditProduct = () => {
  const [edit, { loading }] = useCommitProductInfoMutation()
  const editHandler = async (params: ProductInput, cb?: Function, id?: string) => {
    const res = await edit({
      variables: {
        id,
        params: params,
      }
    })

    if (res.data?.commitProductInfo.code === 200) {
      message.info(res.data?.commitProductInfo.message);
      if (cb) {
        cb(true)
      }
      return
    }
    message.error(res.data?.commitProductInfo.message)
  }

  return { editHandler, loading }
}


export const useProducts = (pageNum = 1, pageSize = DEFAULT_PAGE_SIZE) => {
  // if (!sample) {
  const { data, refetch, loading } = useGetProductsQuery({
    variables: {
      page: {
        pageNum,
        pageSize,
      },
    }, skip: true
  })

  const refetchHandler = async (
    // 第一个参数 params 查询表单和 params 参数的结合
    // 第一个参数中一定会有 pageSize 和  current ，这两个参数是 antd 的规范
    params: {
      current?: number;
      pageSize?: number;
      name?: string;
    },
    sort:any,
    filter:any
  ) => {
    // 这里需要返回一个 Promise,在返回之前你可以进行数据转化
    // 如果需要转化参数可以在这里进行修改
    const { data: res, error } = await refetch({

      page: {
        pageNum: params.current || 1,
        pageSize: params.pageSize || DEFAULT_PAGE_SIZE,
      },
      name: params.name
    });
    if (error) {
      return {
        success: false,
      };
    }
    return {
      data: res?.getProducts.data || [],
      // success 请返回 true，
      // 不然 table 会停止解析数据，即使有数据
      success: true,
      // 不传会使用 data 的长度，如果是分页一定要传
      total: res?.getProducts.page.total,
    };
  }



  return {
    loading,
    refetch: refetchHandler,
    page: data?.getProducts.page,
    data: data?.getProducts.data,
  }
}

export const useDelProduct = () => {
  const [del, { loading }] = useDeleteProductMutation()

  const delHandler = async (id: string, callback?: () => void) => {
    const res = await del({
      variables: {
        id
      }
    })
    if (res.data?.deleteProduct.code === 200) {
      message.success(res.data?.deleteProduct.message);
      callback && callback();
      return;
    }
    message.error(res.data?.deleteProduct.message);
  }
  return { delHandler, loading }
}

/**
 * 获取商品详情的 Hook
 * 支持响应式数据获取和手动触发获取
 */
export const useProductInfo = (id?: string) => {
  const [get, { data, loading }] = useGetProductInfoLazyQuery({
    fetchPolicy: "network-only",
  });

  const getProduct = async (idOverride?: string) => {
    const targetId = idOverride || id;
    if (!targetId) return;
    return await get({
      variables: { id: targetId },
    });
  };

  return {
    data: data?.getProductInfo.data,
    getProduct,
    loading,
  };
};