import { Button } from 'antd';
import { useUserContext } from '../../hooks/userHooks';
import { useGoTo } from '../../hooks';
import { ROUTE_KEY } from '../../routes/menus';

/**
*主页
*/
const Home = ({ }) => {
  const { store } = useUserContext()
  const { go } = useGoTo()

  return (<>
    <div >{store.tel}</div>
    <Button onClick={() => go(ROUTE_KEY.MY)}>去个人信息</Button>
  </>
  );
};

export default Home;
