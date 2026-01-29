import { message } from "antd";
import { useCommitCourseInfoMutation, useGetCourseInfoLazyQuery, useGetCourseInfoQuery, useGetCoursesLazyQuery, useGetCoursesQuery, type CourseInput } from "../graphql/generated"
import { DEFAULT_PAGE_SIZE } from "../utils/constants"
import { stripTypename } from "@apollo/client/utilities";


export const useCourses = (pageNum = 1, pageSize = DEFAULT_PAGE_SIZE) => {  //为什么这个就要这么复杂，card就不用这么复杂
  const { data, refetch, loading } = useGetCoursesQuery({
    variables: {
      page: {
        pageNum,
        pageSize,
      },
    }, skip: true
  })

  //这是根据antd组件中，table组件的request改造来的
  const refetchHandler = async (params: {
    name?: string;
    pageSize?: number;
    current?: number;
  }) => {
    const { data: res, error } = await refetch({
      name: params.name,
      page: {
        pageNum: params.current || 1,
        pageSize: params.pageSize || DEFAULT_PAGE_SIZE,
      },
    });

    if (error) {
      return {
        success: false,
      };
    }
    return {
      total: res?.getCourses.page.total,
      data: res?.getCourses.data || [],
      success: true,
    };
  };

  return {
    loading,
    refetch: refetchHandler,
    page: data?.getCourses.page,
    data: data?.getCourses.data || [],
  }
}

//由于上一个useCourses是为了ProTable的request封装的，搜索课程不需要那么多数据，所以这里重新写一个更合适的
export const useSimpleCourses = () => {
  const [executeQuery, { data, loading }] = useGetCoursesLazyQuery()

  const searchHandler = (name: string) => {
    executeQuery({
      variables: {
        name,
        page: {
          pageNum: 1,  //这里的分页设置，都是这么写成1吗？那后面换页是怎么操作的？
          pageSize: DEFAULT_PAGE_SIZE
        }
      }
    })
  }
  return {
    data: data?.getCourses.data || [],
    loading,
    searchHandler
  }
}


export const useEditCourse = () => {
  const [edit, { loading }] = useCommitCourseInfoMutation()
  const editHandler = async (params: CourseInput, cb?: Function, id?: string) => {
    const res = await edit({
      variables: {
        id,
        params: stripTypename(params),
      }
    })

    if (res.data?.commitCourseInfo.code === 200) {
      message.info(res.data?.commitCourseInfo.message);
      if (cb) {
        cb(true)
      }
      return
    }
    message.error(res.data?.commitCourseInfo.message)
  }

  return { editHandler, loading }
}

export const useCourse = () => {
  const [executeQuery, { loading }] = useGetCourseInfoLazyQuery({
    fetchPolicy: "network-only",
  });

  const getCourse = async (id: string) => {
    const res = await executeQuery({
      variables: {
        id,
      },

    });
    return res.data?.getCourseInfo.data;
  };

  return { getCourse, loading };
};
