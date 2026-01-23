
import { Spin } from 'antd';
import type { IPropChild } from '../../utils/types';
import { connect, useGetUser } from '../../hooks/userHooks';
/**
*获取用户信息组件
*/

const UserInfo = ({ children }: IPropChild) => {
  // const  {store, setStore } = useUserContext()
  const { loading } = useGetUser()
  return (
    <Spin spinning={loading}>
      <div >
        {children}
      </div>
    </Spin >)
    ;
};


//使用provider包裹
export default connect(UserInfo);
