import { Button, Col, Drawer, Row, Space, Tabs } from "antd";
import { DAYS, getColumns, getMaxKey, isWorkDay, type IDay } from "./constants";
import { EditableProTable } from "@ant-design/pro-components";
import { useState } from "react";
import { RedoOutlined, ChromeOutlined } from "@ant-design/icons";
import style from './index.module.less'
import type { OrderTimeType } from "../../../../graphql/generated";
import _ from "lodash";
import { useOrderTime } from "./hooks";
import type { IProps } from "../../../../utils/types";


/**
*预约时间抽屉组件
*/
const OrderTime = ({ onClose, id }: IProps) => {
  const [currentDay, setCurrentDay] = useState(DAYS[0])
  const changeHandler = (key: string) => {
    const current = DAYS.find((item) => item.key === key) as IDay;
    setCurrentDay(current)
  }

  const {
    orderTime,
    loading,
    onSaveHandler,
    allWeekSyncHandler,
    allWorkDaySyncHandler,
  } = useOrderTime(id, currentDay.key);

  return (
    <Drawer
      title={'编辑预约时间'}
      open={true}
      onClose={() => onClose()}
      size={700}
    >
      <Tabs
        type="card"
        items={DAYS}
        onChange={changeHandler}
      />
      <EditableProTable
        loading={loading}
        headerTitle={(
          <Space>
            选择
            <span className={style.name}>
              {currentDay.label}
            </span>
            的课开放预约的时间
          </Space>
        )}
        editable={{
          onSave: async (rowKey, data) => {
            let newTime
            if (orderTime.findIndex(item => item.key === rowKey) > -1) {
              newTime = orderTime.map(item => item.key === rowKey ? { ...(_.omit(data, ['index'])) } : { ...item })
            } else {
              newTime = [...orderTime, _.omit(data, ['index'])]
            }
            console.log('newTime', newTime);
            onSaveHandler(newTime as OrderTimeType[])
          }
        }}
        value={orderTime}
        columns={getColumns()}
        rowKey='key'
        recordCreatorProps={{
          record: () => ({
            key: getMaxKey(orderTime) + 1,
            startTime: '12:00:00',
            endTime: '12:30:00',
          })
        }}
      />
      <Row gutter={20} className={style.buttons}>
        <Col span={12}>
          <Button
            icon={<RedoOutlined />}
            style={{ width: '100%' }}
            type="primary"
            disabled={!isWorkDay(currentDay.key)}
            onClick={allWorkDaySyncHandler}
          >
            全工作日同步
          </Button>
        </Col>
        <Col span={12}>
          <Button
            icon={<ChromeOutlined />}
            style={{ width: '100%' }}
            type="primary"
            danger
            onClick={allWeekSyncHandler}
          >
            全周同步
          </Button>
        </Col>
      </Row>
    </Drawer>)
};

export default OrderTime;
