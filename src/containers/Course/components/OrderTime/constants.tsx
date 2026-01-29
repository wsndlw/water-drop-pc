import type { ProColumns } from "@ant-design/pro-components";
import type { TWeek } from "../../../../utils/types";
import type { OrderTimeType } from "../../../../graphql/generated";

export interface IDay {
  key: TWeek;
  label: string;
}

export const DAYS: IDay[] = [
  {
    key: 'monday',
    label: '周一',
  },
  {
    key: 'tuesday',
    label: '周二',
  },
  {
    label: '周三',
    key: 'wednesday',
  },
  {
    label: '周四',
    key: 'thursday',
  },
  {
    label: '周五',
    key: 'friday',
  },
  {
    label: '周六',
    key: 'saturday',
  },
  {
    label: '周日',
    key: 'sunday',
  },
];

export const getColumns = (): ProColumns[] => [
  {
    title: '序号',
    dataIndex: 'key',
    width: 50,
    editable: false,
    align: 'center',
  },
  {
    title: '开始时间',
    dataIndex: 'startTime',
    valueType: 'time',
    width: 160,
    align: 'center',
  },
  {
    title: '结束时间',
    dataIndex: 'endTime',
    valueType: 'time',
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
      <a
        key='edit'
        onClick={() => {
          action?.startEditable(record.key || '')
        }}>
        编辑</a>)
  },
]

export const getMaxKey = (orderTime: OrderTimeType[]): number => {
  const keys = orderTime.map(item => item.key) || []
  if (keys.length === 0) {
    return 0
  }
  return Math.max(...keys)
}
export const isWorkDay = (day: string) => ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'].includes(day)