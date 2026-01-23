
import { arEGIntl, PageContainer, ProForm, ProFormText, ProFormTextArea } from '@ant-design/pro-components';
import type { ProFormInstance } from '@ant-design/pro-components';

import { Row, Col, Form, message } from 'antd';
import style from './index.module.less';
import OSSImageUpload from '../../components/OSSImageUpload';
import { useEffect, useRef } from 'react';
import { useUserContext } from '../../hooks/userHooks';
import { useUpdateUserInfoMutation } from '../../graphql/generated';

/**
*个人信息页面
*/
const My = ({ }) => {
  const formRef = useRef<ProFormInstance>(null)
  const { store, setStore } = useUserContext()
  const [updateRun] = useUpdateUserInfoMutation()

  const onFinish = async (value: Record<string, any>) => {
    console.log('avatar', value.avatar);
    try {
      const res = await updateRun({
        variables: {
          id: store.id,
          params: {
            avatar: value.avatar.url ||store.avatar,
            name: value.name,
            desc: value.desc,
          }
        }
      })
      if (!res.data) throw new Error('更新失败')
      if (res.data.updateUserInfo.code === 200) {
        store.refetchHandler()
        message.success(res.data.updateUserInfo.message)
        return
      }
      message.error(res.data.updateUserInfo.message)

    } catch (e) {
      message.error((e as Error).message)
    }
  }
  useEffect(() => {
    formRef.current?.setFieldsValue({
      tel: store.tel,
      name: store.name,
      desc: store.desc,
      avatar: store.avatar,
    })
  }, [store])

  return (
    <PageContainer>
      <ProForm

        onFinish={(value) => onFinish(value)}
        submitter={{
          resetButtonProps: {
            style: { display: 'none' }
          }
        }}
        formRef={formRef}
      >
        <Row gutter={40}>
          <Col>
            <ProFormText
              name="tel"
              label="手机号"
              tooltip="不能修改"
              disabled
            />
            <ProFormText
              name="name"
              label="昵称"
              placeholder="请输入昵称"
            />
            <ProFormTextArea
              name="desc"
              label="简介"
              placeholder="请输入简介信息"
            />
          </Col>
          <Col>
            <Form.Item name="avatar">
              <OSSImageUpload />
            </Form.Item>
          </Col>
        </Row>
      </ProForm>
    </PageContainer>

  );
};

export default My;
