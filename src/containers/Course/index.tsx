import { PageContainer, ProTable, type ActionType } from "@ant-design/pro-components";
import { getColums } from "./constants";
import { useCourses } from "../../services/course";
import type { CourseType } from "../../graphql/generated";
import { DEFAULT_PAGE_SIZE } from "../../utils/constants";
import type { RowCourse } from "../../utils/types";
import EditCourse from "./components/EditCourse";
import { useRef, useState } from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import OrderTime from "./components/OrderTime";
import ConsumeCard from "./components/ConsumeCard";



/**
*课程页面，包括课程列表、修改表单（抽屉）
*/
const Course = ({ }) => {
  const [showEdit, setShowEdit] = useState(false)
  const [showOrd, setShowOrd] = useState(false)
  const [showCard, setShowCard] = useState(false)
  const [curId, setCurId] = useState('')
  const { refetch, loading } = useCourses()
  const ref = useRef<ActionType>(undefined)
  const addClickHandler = (id?: string) => {
    setShowEdit(pre => !pre)
    if (id) {
      setCurId(id)
    } else {
      setCurId('')
    }
  }
  const onOrderHandler = (id: string) => {
    setCurId(id);
    setShowOrd(true);
  }
  const onCardHandler = (id: string) => {
    setCurId(id);
    setShowCard(true);
  }
  const closeEditHandler = (isLoading = false) => {
    setShowEdit(pre => !pre)
    isLoading && ref.current?.reload();
  }

  return (
    <PageContainer header={{ title: '当前门店下开设的课程' }}>
      <ProTable<RowCourse>
        loading={loading}
        rowKey='id'
        actionRef={ref}  //可以通过ref来使用它自带的reload功能
        pagination={{
          pageSize: DEFAULT_PAGE_SIZE
        }}
        columns={getColums({
          onEditHandler: addClickHandler,
          onOrderHandler,
          onCardHandler
        })}
        request={refetch}
        toolBarRender={() => [
          <Button key="add" onClick={() => addClickHandler()} type="primary" icon={<PlusOutlined />}>新建课程</Button>
        ]}
      />
      {showEdit && <EditCourse onClose={closeEditHandler} id={curId} />}
      {showOrd && <OrderTime onClose={() => setShowOrd(pre => !pre)} id={curId} />}
      {showCard && <ConsumeCard onClose={() => setShowCard(pre => !pre)} id={curId} />}
    </PageContainer>);
};

export default Course;
