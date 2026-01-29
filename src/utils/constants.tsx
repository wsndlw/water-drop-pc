import { Tag } from "antd";

export const AUTH_TOKEN = 'auth_token';
export const DEFAULT_PAGE_SIZE = 10;
export const LOCAL_CURRENT_ORG = 'LOCAL_CURRENT_ORG';

export const CardType = {  //这里不能写后端的那种enum，为什么？这又是什么？
  TIME: 'time',
  DURATION: 'duration'
}

export const getCardType = (type: string) => {
  switch (type) {
    case CardType.TIME:
      return <Tag color='yellow'>次卡</Tag>
    case CardType.DURATION:
      return <Tag color='green'>时长卡</Tag>
    default: '-'
  }
}