export interface IPropChild {
  children: React.ReactNode;
}

export interface IUser {
  id: string;
  tel: string;
  name: string;
  desc: string,
  avatar: string
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
