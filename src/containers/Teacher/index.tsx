import { useState, useEffect } from 'react';

import style from './index.module.less';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Card, Input, Pagination, Popconfirm, Result, Tag } from 'antd';
import { Button } from 'antd/lib';
import CreateTeacher from './components/CreateTeacher';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import type { TeacherType } from '../../graphql/generated';
import { useDeleteTeacher, useTeacher, useTeachers } from '../../services/teacher';

/**
*教师页面
*/
const Teacher = ({ }) => {
  const [show, setShow] = useState(false)
  const [curId, setCurId] = useState('')
  const [delHandler, delLoading] = useDeleteTeacher()
  const { teacherLoading, error: teacherError, teacher } = useTeacher()

  const { loading: dataLoading, error: dataError, refetch, data, page } = useTeachers()

  const onSearchHandler = (name: string) => {

  }
  const editInfoHandler = (id?: string) => {
    if (id) {
      setCurId(id)
    } else {
      setCurId('')
    }
    setShow(pre => !pre)
  }
  const onDeleteHandler = (id: string) => {

  }

  const onPageChangeHandler = () => {

  }
  const closeAndRefetchHandler = () => {
    setShow(pre => !pre)
  }
  return (<div className={style.container}>
    <PageContainer
      header={{
        title: '教师管理',
      }}
    >
      <Card>
        <Input.Search
          placeholder="请输入教师名字进行搜索"
          className={style.teacherSearch}
          onSearch={onSearchHandler}
          enterButton
          allowClear
        />
        <Button
          className={style.addButton}
          type="primary"
          onClick={() => editInfoHandler()}
        >
          新增
        </Button>
      </Card>
      {data?.length === 0 && <Result title="暂无教师数据" />}
      {data?.map((item) => (
        <ProCard
          key={item.id}
          className={style.card}
          actions={[
            <EditOutlined
              key="edit"
              onClick={() => editInfoHandler(item.id)}
            />,
            <Popconfirm
              title="提醒"
              description="确认要删除吗？"
              okButtonProps={{ loading: delLoading }}
              onConfirm={() => onDeleteHandler(item.id)}
            >
              <DeleteOutlined key="del" />
            </Popconfirm>,
          ]}
        >
          <div
            className={style.avatar}
            style={{ backgroundImage: `url(${item.photoUrl})` }}
          />
          <div className={style.content}>
            <div className={style.name}>{item.name}</div>
            <div>
              {item.tags?.split(',').map((it: string) => (
                <Tag
                  key={it}
                  color="green"
                >
                  {it}
                </Tag>
              ))}
            </div>
            <div className={style.education}>{item.education}</div>
            <div className={style.seniority}>{item.seniority}</div>
          </div>
        </ProCard>
      ))}
      <div className={style.page}>
        <Pagination
          pageSize={page?.pageSize}
          current={page?.pageNum}
          total={page?.total}
          onChange={onPageChangeHandler}
        />
      </div>
      {show && (
        <CreateTeacher
          onClose={closeAndRefetchHandler}
          id={curId}
        />
      )}
    </PageContainer>
  </div>);
};

export default Teacher;
