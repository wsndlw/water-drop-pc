import { useState, useEffect } from 'react';

import style from './index.module.less';
import { Select } from 'antd';
import { useProductTypes } from '../../../../services/product';

interface IProps {
  value?: string;
  onChange?: (val: string) => void;
}
/**
*类别选择器
*/
const TypeSelect = ({ value, onChange }: IProps) => {

  const { data, loading } = useProductTypes()
  return (<Select
    loading={loading}
    placeholder='请选择课程类型'
    onChange={onChange}
    value={value}
  >
    {
      data?.map(item => (
        <Select.Option
          key={item.key}
          value={item.key}
        >
          {item.title}
        </Select.Option>
      ))
    }
  </Select>);
};

export default TypeSelect;
