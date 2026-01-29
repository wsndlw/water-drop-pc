


import { useState, useEffect, useMemo } from 'react';

import style from './index.module.less';
import { Modal, Result, Row, Space, Tag } from 'antd';
import { CheckCard } from '@ant-design/pro-components';
import CourseSearch from '../../../../components/CourseSearch';
import { useLazyCards } from '../../../../services/card';
import { useEditProduct, useProductInfo } from '../../../../services/product';
import _ from 'lodash';
import { CreditCardOutlined } from '@ant-design/icons';
import { getCardType } from '../../../../utils/constants';
import type { ProductInput } from '../../../../graphql/generated';

interface IProps {
  onClose: () => void
  id: string
}
/**
*商品绑定消费卡
*/
const ConsumeCard = ({ onClose, id }: IProps) => {
  const [selectedCards, setSelectedCards] = useState<string[]>([])
  const { data: product, getProduct, loading: productLoading } = useProductInfo()
  const { loading: cardLoading, data: cards, getCards } = useLazyCards()
  const { editHandler, loading: editLoading } = useEditProduct()

  // 1. 页面打开时，根据 ID 获取商品详情并初始化选中状态
  useEffect(() => {
    const init = async () => {
      if (id) {
        const res = await getProduct(id)
        const ids = res?.data?.getProductInfo.data?.cards?.map((item: any) => item.id)
        if (ids) {
          setSelectedCards(ids)
        }
      }
    }
    init()
  }, [id])

  // 对已经有的卡和刚搜索到的卡进行合并
  const newData = useMemo(() => {
    const oldCards = product?.cards || []
    const newCards = cards || []
    return _.unionBy(oldCards, newCards, 'id')
  }, [cards, product?.cards])


  //选择了搜索框的某个消费卡后，的操作。传给搜索框使用
  const onSelect = (id: string) => {
    getCards(id)
  }

  const onOkHandler = () => {
    editHandler({
      cards: selectedCards
    } as ProductInput, () => onClose(), id)
  }

  //这里获取到的参数是该卡片的id数组
  const changeHandler = (val: string[]) => {
    setSelectedCards(val)
  }

  return (
    <Modal
      title={'绑定消费卡'}
      open={true}
      width={'70vw'}
      onCancel={() => onClose()}
      loading={cardLoading || productLoading || editLoading}
      onOk={onOkHandler}
    >
      <Row justify={'end'}>
        <CourseSearch onSelect={onSelect} />
      </Row>
      <Row justify={'center'} className={style.content}>
        <CheckCard.Group
          multiple
          onChange={(val) => changeHandler(val as string[])}
          value={selectedCards}
        >
          {newData.length === 0 && <Result status={'warning'} title='请搜索课程并选择对应消费卡' />}
          {
            newData?.map(item =>
              <CheckCard
                key={item.id}
                value={item.id}
                size='small'
                avatar={<CreditCardOutlined />}
                title={(
                  <div style={{ width: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className={style.name}>{item.course?.name}</span>
                      <Space>
                        {getCardType(item.type)}
                      </Space>
                    </div>
                    <div style={{ marginTop: 8, textAlign: 'left' }}>
                      {item.name}
                    </div>
                  </div>
                )}
                description={(
                  <Space>
                    <span>
                      {item.type === 'time' ? '次数' : '天数'}：
                    </span>
                    <span>
                      {item.time || item.validityDay}
                    </span>
                  </Space>
                )}
              />)
          }
        </CheckCard.Group>
      </Row>
    </Modal>)
};

export default ConsumeCard;
