
import { useState, useEffect } from 'react';

import style from './index.module.less';
import { Select } from 'antd';
import { useCourses, useSimpleCourses } from '../../services/course';
import _ from 'lodash';

interface IProps{
onSelect:(id:string) =>void
}
/**
*课程搜索组件。从消费卡
*/
const CourseSearch = ({ onSelect }:IProps) => {
  const { data, searchHandler, loading } = useSimpleCourses()
  const onSearchHandler = _.debounce((name: string) => {
    searchHandler(name)
  }, 400)
  const onChangeHandler = (id: string) => {
    onSelect(id)
  }
  return (<Select className={style.select}
    showSearch={{
      onSearch: onSearchHandler,
      filterOption: false,
    }}
    loading={loading}
    placeholder='请搜索课程'
    onChange={onChangeHandler}
  >
    {
      data?.map(item => <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>)
    }
  </Select>);
};

export default CourseSearch;
