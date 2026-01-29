import type { CourseInput } from "../graphql/generated";

export interface IPropChild {
  children: React.ReactNode;
}

export interface IUser {
  id: string;
  tel: string;
  name: string;
  desc: string;
  avatar: string;
  refetchHandler?: () => void;
  currentOrg?: string;
}

export interface IPage {
  total: number,
  pageNum: string,
  pageSize: string
}

export interface IMedia {
  id: string;
  url: string;
  remark: string;
}

export interface IOrganization {
  id: string;
  orgFrontImg?: IMedia[];
  orgRoomImg?: IMedia[];
  orgOtherImg?: IMedia[];
  name: string;
  logo: string;
  tags?: string;
  description?: string;
  address?: string;
  tel?: string;
  longitude?: string;
  latitude?: string;
  identityCardBackImg: string
  identityCardFrontImg: string
  businessLicense: string
}

export type TBaseOrganization = Partial<IOrganization>;

export interface IStudent {
  name: string;
  id: string;
  tel: string;
  avatar: string;
  account: string;
}

export interface ICourse {
  id: string;
  name: string; // 标题
  desc?: string;
  group?: string; // 适龄人群
  baseAbility?: string;
  limitNumber: number; // 限制人数
  duration: number; // 持续时长
  reserveInfo?: string;
  refundInfo?: string;
  otherInfo?: string;
}

export type RowCourse = Partial<ICourse>

export type TWeek = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

export interface IProps {
  id: string;
  onClose: (isReload?: boolean) => void;
}