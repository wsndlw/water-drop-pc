import { Button, Col, Drawer, Form, Input, InputNumber, Row, Space } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useEffect } from 'react';
import { useCourse, useEditCourse } from '../../../../services/course';

interface IEdit {
  id?: string,
  onClose: Function
}
/**
*编辑课程页面
*/
const EditCourse = ({ id, onClose }: IEdit) => {
  const [form] = Form.useForm()
  const { editHandler, loading: editLoading } = useEditCourse()
  const onSubmitHandler = async () => {
    const formRes = await form.validateFields()
    if (formRes) {
      if (id) {
        editHandler(formRes, () => onClose(true), id)
      } else {
        editHandler(formRes, () => onClose(true))
      }
    }
  }
  const { getCourse } = useCourse()
  useEffect(() => {
    const init = async () => {
      if (id) {
        const res = await getCourse(id)
        form.setFieldsValue(res)
      } else {
        form.resetFields()
      }
    }
    init()
  }, [id])

  return (<Drawer
    title={id ? '编辑课程' : '新建课程'}
    onClose={() => onClose(false)}
    open
    size={700}
    extra={(
      <Space>
        <Button onClick={() => onClose(false)}>取消</Button>
        <Button loading={editLoading} onClick={onSubmitHandler} type="primary">
          提交
        </Button>
      </Space>
    )}
  >
    <Form
      form={form}
    >
      <Form.Item
        label="课程名称"
        name="name"
        rules={[{
          required: true,
        }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="课程描述"
        name="desc"
        rules={[{
          required: true,
        }]}
      >
        <TextArea rows={5} showCount maxLength={200} />
      </Form.Item>
      <Row gutter={20}>
        <Col>
          <Form.Item
            label="限制人数"
            name="limitNumber"
            rules={[{
              required: true,
            }]}
          >
            <InputNumber min={0} addonAfter="人" />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item
            label="持续时长"
            name="duration"
            rules={[{
              required: true,
            }]}
          >
            <InputNumber min={0} addonAfter="分钟" />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        label="适龄人群"
        name="group"
        rules={[{
          required: true,
        }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="基础能力"
        name="baseAbility"
        rules={[{
          required: true,
        }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="预约信息"
        name="reserveInfo"
        rules={[{
          required: true,
        }]}
      >
        <TextArea rows={5} showCount maxLength={200} />
      </Form.Item>
      <Form.Item
        label="退款信息"
        name="refundInfo"
        rules={[{
          required: true,
        }]}
      >
        <TextArea rows={5} showCount maxLength={200} />
      </Form.Item>
      <Form.Item label="其他信息" name="otherInfo">
        <TextArea rows={5} showCount maxLength={200} />
      </Form.Item>
    </Form>
  </Drawer>)
};

export default EditCourse;
