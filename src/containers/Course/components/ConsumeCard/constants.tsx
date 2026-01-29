import type { ProColumns } from "@ant-design/pro-components";
import { Popconfirm, Space } from "antd";
import { CardType } from "../../../../utils/constants";




export const getColumns = (onDeleteHandler: (id: string) => void): ProColumns[] => [
  {
    title: '序号',
    dataIndex: 'key',
    width: 50,
    editable: false,
    align: 'center',
    render: (_, __, index) => {   //为什么这么些？
      return index + 1
    }
  },
  {
    title: '名称',
    dataIndex: 'name',
    valueType: 'text',
    width: 160,
    align: 'center',
  },
  {
    title: '有效期',
    dataIndex: 'validityDay',
    valueType: 'digit',
    width: 160,
    align: 'center',
  },
  {
    title: '卡类型',
    dataIndex: 'type',
    valueType: 'select',
    width: 160,
    align: 'center',
    request: async () => [   //为什么用request，为什么这么写？
      {
        value: CardType.TIME,
        label: '次卡',
      },
      {
        value: CardType.DURATION,
        label: '时长卡',

      }]
  },
  {
    title: '次数',
    dataIndex: 'time',
    valueType: 'digit',
    width: 160,
    align: 'center',
  },
  {
    title: '操作',
    dataIndex: 'option',
    valueType: 'option',
    width: 160,
    align: 'center',
    render: (value, record, _, action) => (
      <Space>
        <a
          key='edit'
          onClick={() => {
            action?.startEditable(record.id || '')
          }}>
          编辑</a>
        <Popconfirm
          title="提醒"
          description="确认要删除吗？"
          onConfirm={() => {
            onDeleteHandler(record.id)
          }}
        >
          <a
            key="delete"
          >
            删除
          </a>
        </Popconfirm>
      </Space>
    )
  },
]

// export const getMaxKey = (orderTime: OrderTimeType[]): number => {
//   const keys = orderTime.map(item => item.key) || []
//   if (keys.length === 0) {
//     return 0
//   }
//   return Math.max(...keys)
// }
// export const isWorkDay = (day: string) => ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'].includes(day)