import type { ProColumns } from "@ant-design/pro-components";
import { Button, Space } from "antd";
import type { RowCourse } from "../../utils/types";

interface IProps {
  onEditHandler: (id: string) => void
  onOrderHandler: (id: string) => void
  onCardHandler: (id: string) => void
}

export const getColums: ({ onEditHandler, onOrderHandler, onCardHandler }: IProps) => ProColumns<RowCourse, "text">[]
  = ({ onEditHandler, onOrderHandler, onCardHandler }) => [
    {
      title: '课程名称',
      dataIndex: 'name',
      ellipsis: true,   //内容过长就显示为...
    },
    {
      title: '限制人数',
      dataIndex: 'limitNumber',
      width: 75,
      search: false,
    },
    {
      title: '持续时长',
      dataIndex: 'duration',
      width: 75,
      search: false,
    },
    {
      title: '操作',
      width: 300,
      dataIndex: 'id',
      valueType: 'option',
      align: 'center',
      render: (val, record) => (
        [<Space>
          <Button
            type='link'
            key='edit'
            onClick={() => {
              if (record.id) {
                onEditHandler(record.id)
              }
            }}
          >
            编辑
            {/* {value} */}
          </Button>
          <Button
            type='link'
            key='orderTime'
            onClick={() => {
              if (record.id) {
                onOrderHandler(record.id)
              }
            }}>
            可约时间
          </Button>
          <Button
            type='link'
            key='orderTime'
            onClick={() => {
              if (record.id) {
                onCardHandler(record.id)
              }
            }}>
            关联消费卡
          </Button>
        </Space>]
      ),

    }
  ]