import {
  LockOutlined,
  MobileOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  LoginForm,
  ProConfigProvider,
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
} from '@ant-design/pro-components';
import { Tabs, message, theme } from 'antd';
import { useState } from 'react';
import styles from './index.module.less'
import { useMutation } from '@apollo/client/react';
import { GET_CODE_MSG, LOGIN } from '../../graphql/auth';
import { AUTH_TOKEN } from '../../utils/constants';

import { useLoginMutation, useGetCodeMsgMutation } from '../../graphql/generated';
import type { GetCodeMsgMutation } from '../../graphql/generated'
type LoginType = 'phone' | 'account';
//获取验证码的传参类型和返回值类型
// interface IGetCodeMsgData {
//   getCodeMsg: {
//     code: number,
//     message: string,

//   }
// }
// interface IGetCodeMsgVars {
//   tel: string
// }
// //登录信息类型
interface ILoginVars {
  tel: string,
  code: string,
  autoLogin?: boolean
}
// interface ILoginData {
//   login: {
//     code: number,
//     message: string,
//     data?: string
//   }
// }

const Login = () => {
  const { token } = theme.useToken();
  const [loginType, setLoginType] = useState<LoginType>('phone');

  const [getCode] = useGetCodeMsgMutation({
    onCompleted: (data:GetCodeMsgMutation) => {
      console.log('data', data);
      if (data.getCodeMsg.code === 200) {
        message.success(data.getCodeMsg.message)
      } else {
        message.error(data.getCodeMsg.message)
      }
    },
    onError: () => message.error('获取验证码失败')
  });
  const [loginRun] = useLoginMutation(
    // onCompleted: (data) => {
    //   if (data.login.code === 200) {
    //     message.success(data.login.message)
    //     //不加判断，他就不让赋值
    //     if (data.login.data) {
    //       localStorage.setItem(AUTH_TOKEN, data.login.data)
    //     }
    //   } else {
    //     message.error(data.login.message)
    //   }
    // }
  )
  const loginHandler = async (entity: ILoginVars) => {
    const res = await loginRun({
      variables: {
        tel: entity.tel,
        code: entity.code
      }
    })
    console.log('res', res);
    if(!res.data) {return} 
    if (res.data.login.code === 200) {

      message.success(res.data.login.message)

      //不加判断，他就不让赋值
      if (res.data.login.data && entity.autoLogin) {
        localStorage.setItem(AUTH_TOKEN, res.data.login.data)
      }
    } else {
      message.error(res.data?.login.message)
    }
  }



  return (
    <ProConfigProvider hashed={false}>
      <div style={{ backgroundColor: token.colorBgContainer }} className={styles.container}>
        <LoginForm
          onFinish={loginHandler}
          logo="http://water-drop-assets.oss-cn-hangzhou.aliyuncs.com/images/henglogo.png"
        >
          <Tabs
            centered
            activeKey={loginType}
            onChange={(activeKey) => setLoginType(activeKey as LoginType)}
            items={[
              { key: 'phone', label: '手机号登录' },
            ]}
          />
          {loginType === 'account' && (
            <>
              <ProFormText
                name="username"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={'prefixIcon'} />,
                }}
                placeholder={'用户名: admin or user'}
                rules={[
                  {
                    required: true,
                    message: '请输入用户名!',
                  },
                ]}
              />
            </>
          )}
          {loginType === 'phone' && (
            <>
              <ProFormText
                fieldProps={{
                  size: 'large',
                  prefix: <MobileOutlined className={'prefixIcon'} />,
                }}
                name="tel"
                placeholder={'手机号'}
                rules={[
                  {
                    required: true,
                    message: '请输入手机号！',
                  },
                  {
                    pattern: /^1\d{10}$/,
                    message: '手机号格式错误！',
                  },
                ]}
              />
              <ProFormCaptcha
                phoneName='tel'
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={'prefixIcon'} />,
                }}
                captchaProps={{
                  size: 'large',
                }}
                placeholder={'请输入验证码'}
                captchaTextRender={(timing, count) => {
                  if (timing) {
                    return `${count} ${'获取验证码'}`;
                  }
                  return '获取验证码';
                }}
                name="code"
                rules={[
                  {
                    required: true,
                    message: '请输入验证码！',
                  },
                ]}
                onGetCaptcha={async (tel) => {
                  await getCode({
                    variables: {
                      tel
                    }
                  })
                }}
              />
            </>
          )}
          <div
            style={{
              marginBlockEnd: 24,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              自动登录
            </ProFormCheckbox>

          </div>
        </LoginForm>
      </div>
    </ProConfigProvider>
  );
};

export default () => (
  <div style={{ padding: 24 }} className='container'>
    <Login />
  </div>
);