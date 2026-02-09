import { message } from "antd";
import { useCommitTeacherInfoMutation, useDeleteTeacherMutation, useGetTeacherInfoQuery, useGetTeachersQuery, type PageInput, type TeacherType } from "../graphql/generated";
import { DEFAULT_PAGE_SIZE } from "../utils/constants";


export const useTeachers = (
  pageNum = 1,
  pageSize = DEFAULT_PAGE_SIZE,
) => {
  const { data, loading, error, refetch } = useGetTeachersQuery({
    variables: {
      page: {
        pageNum,
        pageSize
      },
    }
  })
  const fetch = (page?: PageInput, name?: string) => {
    refetch({
      page: {
        pageNum,
        pageSize,
      },
      name: name || ''
    })
  }
  console.log('data', data);
  return {
    data: data?.getTeachers.data,
    loading,
    error,
    refetch,
    page: data?.getTeachers.page || {
      pageNum,
      pageSize,
      total: 0
    }
  }
}


export const useTeacher = (id?: string) => {

  const { loading, error, data } = useGetTeacherInfoQuery(
    {
      skip: !id,
      variables: {
        id: id || '',
      }, fetchPolicy: 'network-only',
    },
  );
  return {
    loading,
    error,
    data: id ? data?.getTeacherInfo.data : undefined,
  };
}

export const useEditTeacherInfo = (): [handleEdit: Function, loading: boolean] => {
  const [edit, { loading }] = useCommitTeacherInfoMutation();

  const handleEdit = async (
    params: TeacherType,
    callback: (isReload: boolean) => void,
    id?: string,
  ) => {
    const res = await edit({
      variables: {
        id,
        params,
      },
    });
    if (res.data?.commitTeacherInfo.code === 200) {
      message.success(res.data.commitTeacherInfo.message);
      callback(true);
      return;
    }
    message.error(res.data?.commitTeacherInfo.message);
  };

  return [handleEdit, loading];
};

export const useDeleteTeacher = (): [handleEdit: Function, loading: boolean] => {
  const [del, { loading }] = useDeleteTeacherMutation();

  const delHandler = async (id: string, callback: () => void) => {
    const res = await del({
      variables: {
        id,
      },
    });
    if (res.data?.deleteTeacher.code === 200) {
      message.success(res.data.deleteTeacher.message);
      callback();
      return;
    }
    message.error(res.data?.deleteTeacher.message);
  };

  return [delHandler, loading];
};
