import React from 'react';
import { Button, Result } from 'antd';

const App: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="您访问的页面不存在"
    extra={<Button type="primary">返回主页</Button>}
  />
);

export default App;