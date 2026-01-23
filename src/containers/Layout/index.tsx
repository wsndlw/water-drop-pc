import { ProLayout, PageContainer, type MenuDataItem } from '@ant-design/pro-components';
import style from './index.module.less';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../hooks/userHooks';
import { Space } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { ROUTE_CONFIG, ROUTE_KEY, routes } from '../../routes/menus';
import { AUTH_TOKEN } from '../../utils/constants';
import { useGoTo } from '../../hooks';


/**
*Layout组件
*/

const menuItemRender = (
  item: MenuDataItem,
  dom: React.ReactNode,
) => <Link to={item.path || '/'}>{dom}</Link>;

const Layout = () => {
  const { store } = useUserContext()
  const nav = useNavigate()
  const { go } = useGoTo()
  const logout = () => {
    localStorage.removeItem(AUTH_TOKEN)
    sessionStorage.removeItem(AUTH_TOKEN)
    nav('/login')
  }
  return (
    <ProLayout
      layout="mix"
      siderWidth={240}
      avatarProps={{
        src: store.avatar || '',
        title: store.name,
        size: 'small',
        onClick: () => go(ROUTE_KEY.MY),
      }}
      links={[
        <Space size={20} onClick={logout}>
          <LogoutOutlined />
          退出
        </Space>,
      ]}
      logo={<img src="https://water-drop-assets.oss-cn-hangzhou.aliyuncs.com/images/henglogo.png" alt="logo" />}
      title={false}
      route={{
        path: '/',
        routes: routes,
      }}
      onMenuHeaderClick={() => nav('/')}
      menuItemRender={menuItemRender}
    >
      <Outlet />
    </ProLayout>
  );
};

export default Layout;
