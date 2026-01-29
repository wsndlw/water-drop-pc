import { EditableProTable } from "@ant-design/pro-components";
import { Drawer, Tabs, Space } from "antd";
import style from "antd/es/affix/style";
import _ from "lodash";
import type { IProps } from "../../../../utils/types";
import { getColumns } from "./constants";
import { useCards, useDelCard, useEditCard } from "../../../../services/card";
import type { CardType } from "../../../../graphql/generated";


const ConsumeCard = ({ onClose, id }: IProps) => {
  const { data, loading, refetch } = useCards(id)

  const { editHandler,loading:editLoading} = useEditCard()
  const {delHandler,loading:delLoading} = useDelCard()
  const onSaveHandler = () => {

  }


    const onDeleteHandler = (id:string)=>{
    delHandler(id,refetch)
  }
  return (
    <Drawer
      title={'管理消费卡'}
      open={true}
      onClose={() => onClose()}
      size={'75vw'}
    >
      <EditableProTable<CardType>
        value={data as CardType[]}
        loading={loading ||editLoading||delLoading}

        editable={{
          onSave: async (rowKey, data) => {  //这里为什么是async
            editHandler({
              name: data.name,
              type: data.type,
              time: data.time,
              validityDay: data.validityDay
            }, id, refetch, data.id)
          },
          actionRender: (row, config, defaultDom) => [
            defaultDom.save,
            defaultDom.cancel,
          ],
        }}

        columns={getColumns(onDeleteHandler)}
        rowKey='id'   //这里的‘key’是什么意思
        recordCreatorProps={{
          record: () => {  //这里传入的是什么？key一般怎么设置？
            return {   //这里的id为什么就是courseId了
              // key: id,
              id: 'new',  //给一个临时id
              name: '',
              type: 'time',
              time: 0,
              validityDay: 0
            } as CardType
          }
        }}
      />
    </Drawer>)
};


export default ConsumeCard