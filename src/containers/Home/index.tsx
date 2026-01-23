import { Button } from 'antd';
import { connect, useUserContext } from '../../hooks/userHooks';
import style from './index.module.less';
import { useNavigate } from 'react-router-dom';
import { useGoTo } from '../../hooks';
import { ROUTE_KEY } from '../../routes/menus';

/**
*主页
*/
const Home = ({ }) => {
  const { store } = useUserContext()
  const { go } = useGoTo()

  return (<>
    <div className={style.container}>{store.tel}</div>
    <Button onClick={() => go(ROUTE_KEY.MY)}>去个人信息</Button>
  </>
  );
};

export default Home;
