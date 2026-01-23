import { message } from "antd"
import { useCommitOrganizationInfoMutation, useDeleteOrgMutation, useGetOrganizationInfoQuery, useGetOrganizationsQuery, type OrganizationInput } from "../graphql/generated"
import { DEFAULT_PAGE_SIZE } from "../utils/constants"


export const useOrganizations = (pageNum = 1, pageSize = DEFAULT_PAGE_SIZE) => {
  const { data, refetch, loading } = useGetOrganizationsQuery({
    variables: {
      params: {
        pageNum,
        pageSize,
      },
    },
  })
  return {
    loading,
    refetch,
    page: data?.getOrganizations.page,
    data: data?.getOrganizations.data,
  }
}

export const useOrganization = (id: string) => {
  const { data, loading } = useGetOrganizationInfoQuery({
    variables: {
      id
    },
  })
  console.log('data', data?.getOrganizationInfo);
  return {
    loading,
    data: data?.getOrganizationInfo.data,
  }
}

export const useEditOrg = () => {
  const [edit, { loading }] = useCommitOrganizationInfoMutation()
  const editHandler = async (id: string, params: OrganizationInput) => {
    const res = await edit({
      variables: {
        id,
        params
      }
    })
    message.info(res.data?.commitOrganizationInfo.message);

  }

  return { editHandler, loading }
}

export const useDelOrg = () => {
  const [del, { loading }] = useDeleteOrgMutation()

  const delHandler = async (id: string, callback: () => void) => {
    const res = await del({
      variables: {
        id
      }
    })
    if (res.data?.deleteOrg.code === 200) {
      message.success(res.data?.deleteOrg.message);
      callback();
      return;
    }
    message.error(res.data?.deleteOrg.message);
  }
  return { delHandler, loading }
}