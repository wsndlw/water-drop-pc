import { useState, useEffect } from 'react';

import style from './index.module.less';
import { Button, Col, Drawer, Form, Input, InputNumber, Row, Select, Space, Spin } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useEditTeacherInfo, useTeacher } from '../../../../services/teacher';
import UploadMedia from '../../../../components/OSSImageUpload';
import type { TeacherType } from '../../../../graphql/generated';


interface IProps {
  onClose: (refetch?: boolean) => void;
  id?: string;
}

/**
*创建教师组件
*/
const CreateTeacher = ({ onClose, id }: IProps) => {

  const [form] = Form.useForm()
  const { data, loading } = useTeacher(id)
  console.log('data,id', data, id);
  const [edit, editLoading] = useEditTeacherInfo()
  useEffect(() => {
    if (id && data) {
      const formData = {
        ...data,
        photoUrl: [{ url: data.photoUrl }],
        tags: data.tags?.split(',')
      }
      console.log('data', data);
      form.setFieldsValue(formData)
    } else {
      form.resetFields()
    }
  }, [data, form])

  const onSubmitHandler = async () => {
    const res = await form.validateFields()
    if (res) {
      const formres = {
        ...res,
        photoUrl: res.photoUrl[0].url,
        tags: res.tags.join(',')
      }
      if (id) {
        edit(formres, () => onClose(true), id)
      } else {
        console.log('id', id);
        edit(formres, () => onClose(true))
      }
    }

  }
  return (
    <Drawer
      onClose={() => onClose()}
      open
      size="70vw"
      title="创建教师"
      extra={(
        <Space>
          <Button onClick={() => onClose()}>取消</Button>
          <Button loading={editLoading} onClick={onSubmitHandler} type="primary">
            提交
          </Button>
        </Space>
      )}
    >
      <Spin spinning={editLoading || loading}>
        {(
          <Form
            form={form}
            layout="vertical"
          >
            <Form.Item
              label="头像"
              name="photoUrl"
              rules={[{ required: true }]}
            >
              <UploadMedia />
            </Form.Item>
            <Row className={style.row} gutter={20}>
              <Col span={16}>
                <Form.Item
                  label="名称"
                  name="name"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="教龄"
                  name="teacherTime"
                  rules={[{ required: true }]}
                >
                  <InputNumber />
                </Form.Item>
              </Col>
            </Row>
            <Row className={style.row} gutter={20}>
              <Col span={11}>
                <Form.Item
                  label="标签"
                  name="tags"
                  rules={[{ required: true }]}
                >
                  <Select
                    mode="tags"
                  />
                </Form.Item>
              </Col>
              <Col span={5}>
                <Form.Item
                  label="资历"
                  name="seniority"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="学历"
                  name="education"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        )}
      </Spin>
    </Drawer>);
};

export default CreateTeacher;
