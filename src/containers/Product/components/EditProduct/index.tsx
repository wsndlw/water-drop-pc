
import { useState, useEffect } from 'react';

import style from './index.module.less';
import { Button, Col, Divider, Drawer, Form, Input, InputNumber, Row, Space } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import OSSImageUpload from '../../../../components/OSSImageUpload';
import { useEditProduct, useProductInfo } from '../../../../services/product';

interface IProps {
  id?: string,
  onClose: () => void
}
/**
*商品编辑页面
*/
const EditProduct = ({ id, onClose }: IProps) => {
  const [form] = Form.useForm()
  const [open, setOpen] = useState(true)
  const { getProduct, loading } = useProductInfo()
  const { editHandler, loading: editLoading } = useEditProduct()
  const init = async () => {
    if (id) {
      const res = await getProduct(id)
      if (res?.data?.getProductInfo.data) {
        const data = res.data.getProductInfo.data
        form.setFieldsValue({
          ...data,
          coverUrl: data.coverUrl ? [{ url: data.coverUrl }] : [],
          bannerUrl: data.bannerUrl ? [{ url: data.bannerUrl }] : []
        })
      }
    } else {
      form.resetFields()
    }

  }
  useEffect(() => {
    init()
  }, [id])

  const submitHandler = async () => {
    const values = await form.validateFields()
    const newData = {
      ...values,
      coverUrl: values.coverUrl?.[0]?.url || '',
      bannerUrl: values.bannerUrl?.[0]?.url || '',
    }
    if (id) {
      editHandler(newData, onClose, id)
    } else {
      editHandler(newData, onClose)
    }
  }
  return (<Space>
    <Drawer
      size={'56vw'}
      onClose={() => setOpen(false)}
      open={open}
      afterOpenChange={(o) => !o && onClose()}
      title={id ? '编辑商品' : '新建商品'}
      loading={loading || editLoading}
      extra={<Space>
        <Button type='primary' onClick={submitHandler}>提交</Button>
        <Button>取消</Button>
      </Space>


      }
    >
      <Form
        form={form}
      >
        <Form.Item
          label="商品名称"
          name="name"
          rules={[{
            required: true,
          }]}
        >
          <Input />
        </Form.Item>

        <Row gutter={20}>
          <Col>
            <Form.Item
              label="库存总额"
              name="stock"
              rules={[{
                required: true,
              }]}
            >
              <InputNumber min={0} />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              label="限购数量"
              name="limitBuyNum"
              rules={[{
                required: true,
              }]}
            >
              <InputNumber min={1} />
            </Form.Item>
          </Col>

          <Col>
            <Form.Item
              label="原价"
              name="originPrice"
              rules={[{
                required: true,
              }]}
            >
              <InputNumber min={0} suffix="元" />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              label="优惠价"
              name="preferentialPrice"
              rules={[{
                required: true,
              }]}
            >
              <InputNumber min={0} suffix="元" />
            </Form.Item>
          </Col>

        </Row>
        <Form.Item
          label="商品简介"
          name="desc"
          rules={[{
            required: true,
          }]}
        >
          <TextArea rows={5} showCount maxLength={200} />
        </Form.Item>
        <Divider>上传图片</Divider>
        <Row gutter={20}>
          <Col >
            <Form.Item
              name='coverUrl'
              label="商品封面图：图片长宽要求比例为16：9"
              rules={[{ required: true }]}
              labelCol={{ span: 24 }}
            >
              <OSSImageUpload
                label="上传封面图"
                maxCount={1}
                imgCropAspect={3 / 2}
              />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              name='bannerUrl'
              label="商品Banner图：图片长宽要求比例为16：9"
              rules={[{ required: true }]}
              labelCol={{ span: 24 }}
            >
              <OSSImageUpload
                label="上传Banner图片"
                maxCount={1}
                imgCropAspect={3 / 2}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Drawer>
  </Space>);
};

export default EditProduct;
