import { message } from "antd"
import { useCommitCardInfoMutation, useDeleteCardMutation, useGetCardsLazyQuery, useGetCardsQuery, type CardInput } from "../graphql/generated"


export const useCards = (courseId: string) => {
  const { data, refetch, loading } = useGetCardsQuery({
    variables: {
      courseId
    }
  })
  return {
    loading,
    data: data?.getCards.data,
    refetch
  }
}


export const useLazyCards = () => {
  const [get, { data, loading }] = useGetCardsLazyQuery({
    fetchPolicy: "network-only",

  })

  const getCards = (courseId: string) => {
    get({
      variables: {
        courseId
      }
    })
  }

  return {
    loading,
    data: data?.getCards.data,
    getCards
  }
}


export const useEditCard = () => {
  const [edit, { loading }] = useCommitCardInfoMutation()
  const editHandler = async (
    params: CardInput,
    courseId: string,
    cb?: () => void,
    id?: string,
  ) => {
    const res = await edit({
      variables: {
        params,
        courseId,
        id: id === 'new' ? '' : id
      }
    })
    if (res.data?.commitCardInfo.code === 200) {
      message.info(res.data?.commitCardInfo.message);
      if (cb) {
        cb()
      }
      return
    }
    message.error(res.data?.commitCardInfo.message)
  }
  return { editHandler, loading }
}

export const useDelCard = () => {
  const [del, { loading }] = useDeleteCardMutation()

  const delHandler = async (id: string, callback: () => void) => {
    const res = await del({
      variables: {
        id
      }
    })
    if (res.data?.deleteCard.code === 200) {
      message.success(res.data?.deleteCard.message);
      callback();
      return;
    }
    message.error(res.data?.deleteCard.message);
  }
  return { delHandler, loading }
}

