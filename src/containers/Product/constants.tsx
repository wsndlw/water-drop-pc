import type { ProColumns } from "@ant-design/pro-components"
import type { ProductType } from "../../graphql/generated"
import { Button, Space, Image, Popconfirm } from "antd"
import { PRODUCT_STATUS } from "../../utils/constants"

interface IProps {
  editClickHandler: (id: string) => void,
  deleteHandler: (key: any) => void,
  bindCardHandler: (id: string) => void,
  statusHandler: (id: string, status: string) => void,
}

export const getColumns: ({ editClickHandler, deleteHandler, bindCardHandler }: IProps) => ProColumns<ProductType, "text">[] = ({
  editClickHandler,
  deleteHandler,
  bindCardHandler,
  statusHandler,
}) => {
  return [
    {
      title: '封面图',
      dataIndex: 'coverUrl',
      width: 80,
      align: 'center',
      search: false,
      render: (_, record) => <Image src={`${record.coverUrl}`} />,
      formItemProps: {
        rules: [
          {
            required: true,
            message: '此项必填'
          }
        ]
      }
    },
    {
      title: '商品名称',
      copyable: true,
      align: 'center',
      dataIndex: 'name',
    },
    {
      title: '原价',
      dataIndex: 'originPrice',
      align: 'center',
      search: false,
      width: '6vw',
      valueType: 'number'
    },
    {
      title: '优惠价',
      align: 'center',
      dataIndex: 'preferentialPrice',
      width: '6vw',
      search: false,
      valueType: 'number'
    },
    {
      title: '库存总额',
      align: 'center',
      dataIndex: 'stock',
      width: '6vw',
      search: false,
      valueType: 'number'
    },
    {
      title: '限购数量',
      align: 'center',
      dataIndex: 'limitBuyNum',
      width: '6vw',
      search: false,
      valueType: 'number'
    },
    {
      title: '销量',
      align: 'center',
      width: '6vw',
      dataIndex: 'buyNum',
      search: false,
      valueType: 'number'

    },
    {
      title: '操作',
      align: 'center',
      width: '20vw',
      dataIndex: 'id',
      valueType: 'option',
      render: (_, record) => (
        <Space>
          {record.status === PRODUCT_STATUS.UN_LIST ?
            (<Button
              style={{ color: 'green' }}
              key="list"
              type='link'
              onClick={() => {
                if (record.id) {
                  statusHandler(record.id, PRODUCT_STATUS.LIST)
                }
              }}
            >
              上架
            </Button>) :
            (<Button
              style={{ color: 'red' }}
              key="unlist"
              type='link'
              onClick={() => {
                if (record.id) {
                  statusHandler(record.id, PRODUCT_STATUS.UN_LIST)
                }
              }}
            >
              下架
            </Button>)}
          <Button
            key="edit"
            type='link'
            onClick={() => {
              if (record.id) {
                editClickHandler(record.id)
              }
            }
            }
          >
            编辑
          </Button>
          <Button
            key="bindCard"
            onClick={() => bindCardHandler(record.id)}
            type='link'
          >
            绑定消费卡
          </Button>
          <Popconfirm
            onConfirm={() => deleteHandler(record.id)}
            title={'确认删除吗'}
          >
            <Button
              // onClick={() => {
              //   deleteHandler(record.id)
              // }}
              type='link'
              key="delete"
              style={{ color: 'red' }}
            >
              删除
            </Button>
          </Popconfirm>
        </Space>
      )
    },
  ] as ProColumns<ProductType, "text">[]

}