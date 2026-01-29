import { useRef, useState } from 'react';
import type { ProductType } from '../../graphql/generated';
import { useDelProduct, useProducts } from '../../services/product';
import { getColumns } from './constants';
import style from './index.module.less';
import { type ActionType, PageContainer, ProTable } from '@ant-design/pro-components';
import EditProduct from './components/EditProduct';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ConsumeCard from './components/ConsumeCard';

/**
*商品列表页面（antD的ProTable组件）
*/
const Product = ({ }) => {
  const [showModal, setShowModal] = useState(false)

  const actionRef = useRef<ActionType>(undefined)
  const { delHandler } = useDelProduct()
  const { refetch } = useProducts()
  const [showEdit, setShowEdit] = useState(false)
  const [curId, setCurId] = useState('')   //存储当前id，即商品id
  const editClickHandler = (id?: string) => {
    setShowEdit(pre => !pre)
    if (id) {
      setCurId(id)
    } else {
      setCurId('')
    }
  }
  const deleteHandler = (key: any) => {
    delHandler(key, () => actionRef.current?.reload())
    // actionRef.current?.reload()   //

  }
  // const bindCardHandler = () => {
  //   setShowModal(pre => !pre)
  // }
  const bindCardHandler = (id: string) => {
    setCurId(id)
    setShowModal(true)
  }
  const closeHandler = (isloading = false) => {
    setShowEdit(false)
    isloading && actionRef.current?.reload()
  }

  return (<PageContainer>
    <ProTable<ProductType>
      actionRef={actionRef}

      columns={getColumns({
        editClickHandler,
        deleteHandler,
        bindCardHandler
      })}
      form={{
        ignoreRules: false
      }}
      // dataSource={data || []}
      request={refetch as any}
      toolBarRender={() => ([
        <Button type='primary' icon={<PlusOutlined />} onClick={() => editClickHandler()}>新建商品</Button>
      ])}
    />
    {showEdit && <EditProduct onClose={closeHandler} id={curId} />}
    {showModal && <ConsumeCard onClose={() => setShowModal(pre => !pre)} id={curId} />}

  </PageContainer>);
};

export default Product;
