
import { useState, useEffect } from 'react';

import { Select, Space } from 'antd';
import { useSimpleOrganizations } from '../../services/org';
import { useGoTo } from '../../hooks';
import { ROUTE_KEY } from '../../routes/menus';
import _ from 'lodash'
import { useUserContext } from '../../hooks/userHooks';
import { LOCAL_CURRENT_ORG } from '../../utils/constants';
import { currentOrg } from '../../utils/index.ts';



/**
*门店选择器
*/
const OrgSelect = ({ }) => {
  const { data, loading, refetch } = useSimpleOrganizations()
  const { store, setStore } = useUserContext()
  const { go } = useGoTo()
  useEffect(() => {
    const res = currentOrg();
    if (res?.value) {
      setStore({
        currentOrg: res.value
      })
    } else {
      go(ROUTE_KEY.NOORG)
    }
  }, [])
  const onSearchHandler = _.debounce((val: string) => {
    refetch({
      name: val
    })
  }, 400)
  const changeHandler = (val: { value: string, label: string }) => {
    setStore({
      currentOrg: val.value
    })
    localStorage.setItem(LOCAL_CURRENT_ORG, JSON.stringify(val))
  }
  return (
    <Space>
      选择门店：
      <Select
        style={{ width: '200px' }}
        placeholder='请选择门店'
        showSearch={{
          onSearch: onSearchHandler,
          filterOption: false,
        }}
        defaultValue={currentOrg() || undefined}
        onChange={changeHandler}
        labelInValue
      >
        {
          data?.map(item => (
            <Select.Option
              key={item.id}
              value={item.id}
            >
              {item.name}
            </Select.Option>
          ))
        }
      </Select>
    </Space>
  );
};

export default OrgSelect;
