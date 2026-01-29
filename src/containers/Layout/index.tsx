import { ProLayout, PageContainer, type MenuDataItem } from '@ant-design/pro-components';
import style from './index.module.less';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../hooks/userHooks';
import { Space, Tooltip } from 'antd';
import { LogoutOutlined, ShopOutlined } from '@ant-design/icons';
import { ROUTE_CONFIG, ROUTE_KEY, routes } from '../../routes/menus';
import { AUTH_TOKEN } from '../../utils/constants';
import { useGoTo, useIsOrgRoute } from '../../hooks';
import OrgSelect from '../../components/OrgSelect';


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
  const goToOrg = () => {
    go(ROUTE_KEY.ORG)
  }
  const isOrg = useIsOrgRoute()
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
      actionsRender={() => [
        !isOrg && <OrgSelect />,
        <Tooltip title='门店管理'>
          <ShopOutlined onClick={goToOrg} />
        </Tooltip>,
      ]}
    >
      <div key = {store.currentOrg}>
      <Outlet />
      </div>
    </ProLayout>
  );
};

export default Layout;
