import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client/react';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type CardInput = {
  /** 名称 */
  name: Scalars['String']['input'];
  /** 上课次数 */
  time?: InputMaybe<Scalars['Float']['input']>;
  /** 卡类型 */
  type: Scalars['String']['input'];
  /** 有效期 */
  validityDay: Scalars['Float']['input'];
};

export type CardResult = {
  __typename?: 'CardResult';
  code: Scalars['Float']['output'];
  data: CardType;
  message: Scalars['String']['output'];
};

export type CardResults = {
  __typename?: 'CardResults';
  code: Scalars['Float']['output'];
  data?: Maybe<Array<CardType>>;
  message: Scalars['String']['output'];
  page: Page;
};

export type CardType = {
  __typename?: 'CardType';
  course?: Maybe<CourseType>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deletedBy?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  /** 名称 */
  name: Scalars['String']['output'];
  org?: Maybe<OrganizationType>;
  /** 上课次数 */
  time?: Maybe<Scalars['Float']['output']>;
  /** 卡类型 */
  type: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
  /** 有效期 */
  validityDay: Scalars['Float']['output'];
};

export type CourseInput = {
  /** 适合基础 */
  baseAbility?: InputMaybe<Scalars['String']['input']>;
  /** 课程描述 */
  desc?: InputMaybe<Scalars['String']['input']>;
  /** 持续时间 */
  duration?: InputMaybe<Scalars['Float']['input']>;
  /** 适龄人群 */
  group?: InputMaybe<Scalars['String']['input']>;
  /** 限制上课人数 */
  limitNumber?: InputMaybe<Scalars['Float']['input']>;
  /** 课程名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 其他说明信息 */
  otherInfo?: InputMaybe<Scalars['String']['input']>;
  /** 可约时间 */
  reducibleTime?: InputMaybe<Array<ReducibleTimeInput>>;
  /** 退款信息 */
  refundInfo?: InputMaybe<Scalars['String']['input']>;
  /** 预约信息 */
  reserveInfo?: InputMaybe<Scalars['String']['input']>;
};

export type CourseResult = {
  __typename?: 'CourseResult';
  code: Scalars['Float']['output'];
  data: CourseType;
  message: Scalars['String']['output'];
};

export type CourseResults = {
  __typename?: 'CourseResults';
  code: Scalars['Float']['output'];
  data?: Maybe<Array<CourseType>>;
  message: Scalars['String']['output'];
  page: Page;
};

export type CourseType = {
  __typename?: 'CourseType';
  /** 适合基础 */
  baseAbility: Scalars['String']['output'];
  cards?: Maybe<Array<CardType>>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deletedBy?: Maybe<Scalars['String']['output']>;
  /** 课程描述 */
  desc?: Maybe<Scalars['String']['output']>;
  /** 持续时间 */
  duration: Scalars['Float']['output'];
  /** 适龄人群 */
  group: Scalars['String']['output'];
  id: Scalars['String']['output'];
  /** 限制上课人数 */
  limitNumber: Scalars['Float']['output'];
  /** 课程名称 */
  name: Scalars['String']['output'];
  org?: Maybe<OrganizationType>;
  /** 其他说明信息 */
  otherInfo?: Maybe<Scalars['String']['output']>;
  /** 可约时间 */
  reducibleTime?: Maybe<Array<ReducibleTimeType>>;
  /** 退款信息 */
  refundInfo?: Maybe<Scalars['String']['output']>;
  /** 预约信息 */
  reserveInfo?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** 创建/更新消费卡 */
  commitCardInfo: CardResult;
  /** 更新/创建课程 */
  commitCourseInfo: CourseResult;
  commitOrganizationInfo: OrganizationResult;
  /** 创建/更新消费商品 */
  commitProductInfo: ProductResult;
  commitStudentInfo: StudentResult;
  create: Scalars['Boolean']['output'];
  createsO: Scalars['String']['output'];
  del: Scalars['Boolean']['output'];
  /** 删除卡 */
  deleteCard: Result;
  /** 删除课程 */
  deleteCourse: Result;
  /** 删除机构 */
  deleteOrg: Result;
  /** 删除商品 */
  deleteProduct: Result;
  /** 发送验证码 */
  getCodeMsg: Result;
  /** 登录 */
  login: Result;
  /** 学生登录 */
  studentLogin: Result;
  /** 学生注册 */
  studentRegister: Result;
  update: Scalars['Boolean']['output'];
  /** 更新用户 */
  updateUserInfo: Result;
};


export type MutationCommitCardInfoArgs = {
  courseId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  params: CardInput;
};


export type MutationCommitCourseInfoArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  params: CourseInput;
};


export type MutationCommitOrganizationInfoArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  params: OrganizationInput;
};


export type MutationCommitProductInfoArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  params: ProductInput;
};


export type MutationCommitStudentInfoArgs = {
  params: StudentInput;
};


export type MutationCreateArgs = {
  params: UserInput;
};


export type MutationDelArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteCardArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteCourseArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteOrgArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['String']['input'];
};


export type MutationGetCodeMsgArgs = {
  tel: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  code: Scalars['String']['input'];
  tel: Scalars['String']['input'];
};


export type MutationStudentLoginArgs = {
  account: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationStudentRegisterArgs = {
  account: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationUpdateArgs = {
  id: Scalars['String']['input'];
  params: UserInput;
};


export type MutationUpdateUserInfoArgs = {
  id: Scalars['String']['input'];
  params: UserInput;
};

export type OrderTimeInput = {
  /** 结束时间 */
  endTime: Scalars['String']['input'];
  /** key */
  key: Scalars['Float']['input'];
  /** 开始时间 */
  startTime: Scalars['String']['input'];
};

export type OrderTimeType = {
  __typename?: 'OrderTimeType';
  /** 结束时间 */
  endTime: Scalars['String']['output'];
  /** key */
  key: Scalars['Float']['output'];
  /** 开始时间 */
  startTime: Scalars['String']['output'];
};

export type OrgImageInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  remark?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};

export type OrgImageType = {
  __typename?: 'OrgImageType';
  id?: Maybe<Scalars['String']['output']>;
  remark?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type OrganizationInput = {
  /** latitude */
  address?: InputMaybe<Scalars['String']['input']>;
  /** 营业执照 */
  businessLicense: Scalars['String']['input'];
  /** description */
  description: Scalars['String']['input'];
  /** 距离 */
  distance?: InputMaybe<Scalars['Float']['input']>;
  /** 法人身份证反面 */
  identityCardBackImg?: InputMaybe<Scalars['String']['input']>;
  /** 法人身份证正面 */
  identityCardFrontImg?: InputMaybe<Scalars['String']['input']>;
  /** latitude */
  latitude?: InputMaybe<Scalars['String']['input']>;
  /** logo */
  logo: Scalars['String']['input'];
  /** longitude */
  longitude?: InputMaybe<Scalars['String']['input']>;
  /** 名称 */
  name: Scalars['String']['input'];
  /** 机构门面照片 */
  orgFrontImg?: InputMaybe<Array<OrgImageInput>>;
  /** 机构环境照片 */
  orgOtherImg?: InputMaybe<Array<OrgImageInput>>;
  /** 机构环境照片 */
  orgRoomImg?: InputMaybe<Array<OrgImageInput>>;
  /** tags */
  tags?: InputMaybe<Scalars['String']['input']>;
  /** 手机号 */
  tel?: InputMaybe<Scalars['String']['input']>;
};

export type OrganizationResult = {
  __typename?: 'OrganizationResult';
  code: Scalars['Float']['output'];
  data: OrganizationType;
  message: Scalars['String']['output'];
};

export type OrganizationResults = {
  __typename?: 'OrganizationResults';
  code: Scalars['Float']['output'];
  data?: Maybe<Array<OrganizationType>>;
  message: Scalars['String']['output'];
  page: Page;
};

export type OrganizationType = {
  __typename?: 'OrganizationType';
  /** 地址 */
  address?: Maybe<Scalars['String']['output']>;
  /** 营业执照 */
  businessLicense?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deletedBy?: Maybe<Scalars['String']['output']>;
  /** 简介 */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  /** 法人身份证反面 */
  identityCardBackImg?: Maybe<Scalars['String']['output']>;
  /** 法人身份证正面 */
  identityCardFrontImg?: Maybe<Scalars['String']['output']>;
  /** 纬度 */
  latitude?: Maybe<Scalars['String']['output']>;
  /** logo */
  logo?: Maybe<Scalars['String']['output']>;
  /** 经度 */
  longitude?: Maybe<Scalars['String']['output']>;
  /** 机构名 */
  name?: Maybe<Scalars['String']['output']>;
  /** 封面图 */
  orgFrontImg?: Maybe<Array<OrgImageType>>;
  /** 其他图 */
  orgOtherImg?: Maybe<Array<OrgImageType>>;
  /** 室内图 */
  orgRoomImg?: Maybe<Array<OrgImageType>>;
  /** 标签 以，隔开 */
  tags?: Maybe<Scalars['String']['output']>;
  /** 电话 */
  tel?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type OssType = {
  __typename?: 'OssType';
  /** 上传路径 */
  dir: Scalars['String']['output'];
  /** 过期时间 */
  expire: Scalars['String']['output'];
  /** 策略 */
  host: Scalars['String']['output'];
  /** 策略 */
  policy: Scalars['String']['output'];
  /** 临时凭证的 SecurityToken */
  security_token: Scalars['String']['output'];
  /** 签名 */
  signature: Scalars['String']['output'];
  /** 签名凭证串 */
  x_oss_credential: Scalars['String']['output'];
  /** 签名版本 */
  x_oss_signature_version: Scalars['String']['output'];
};

export type Page = {
  __typename?: 'Page';
  pageNum: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageInput = {
  pageNum: Scalars['Float']['input'];
  pageSize: Scalars['Float']['input'];
};

export type ProductInput = {
  /** 头部banner图 */
  bannerUrl?: InputMaybe<Scalars['String']['input']>;
  cards?: InputMaybe<Array<Scalars['String']['input']>>;
  /** 封面图 */
  coverUrl?: InputMaybe<Scalars['String']['input']>;
  /** 描述 */
  desc?: InputMaybe<Scalars['String']['input']>;
  /** 限购数量 */
  limitBuyNum?: InputMaybe<Scalars['Float']['input']>;
  /** 名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 原价 */
  originPrice?: InputMaybe<Scalars['Float']['input']>;
  /** 优惠 */
  preferentialPrice?: InputMaybe<Scalars['Float']['input']>;
  /** 上架状态（默认为下架） */
  status?: InputMaybe<Scalars['String']['input']>;
  /** 库存总数 */
  stock?: InputMaybe<Scalars['Float']['input']>;
  /** 分类 */
  type?: InputMaybe<Scalars['String']['input']>;
};

export type ProductResult = {
  __typename?: 'ProductResult';
  code: Scalars['Float']['output'];
  data: ProductType;
  message: Scalars['String']['output'];
};

export type ProductResults = {
  __typename?: 'ProductResults';
  code: Scalars['Float']['output'];
  data?: Maybe<Array<ProductType>>;
  message: Scalars['String']['output'];
  page: Page;
};

export type ProductType = {
  __typename?: 'ProductType';
  /** 头部banner图 */
  bannerUrl?: Maybe<Scalars['String']['output']>;
  /** 总销量 */
  buyNum?: Maybe<Scalars['Float']['output']>;
  cards?: Maybe<Array<CardType>>;
  /** 封面图 */
  coverUrl?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  /** 当前库存 */
  curStock: Scalars['Float']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deletedBy?: Maybe<Scalars['String']['output']>;
  /** 描述 */
  desc?: Maybe<Scalars['String']['output']>;
  /** 距离 */
  distance?: Maybe<Scalars['Float']['output']>;
  /** 距离显示文本 */
  distanceText?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  /** 限购数量 */
  limitBuyNum?: Maybe<Scalars['Float']['output']>;
  /** 名称 */
  name: Scalars['String']['output'];
  org?: Maybe<OrganizationType>;
  /** 原价 */
  originPrice: Scalars['Float']['output'];
  /** 优惠 */
  preferentialPrice: Scalars['Float']['output'];
  /** 上架状态（默认为下架） */
  status: Scalars['String']['output'];
  /** 库存总数 */
  stock?: Maybe<Scalars['Float']['output']>;
  /** 类型 */
  type: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type ProductTypeResults = {
  __typename?: 'ProductTypeResults';
  code: Scalars['Float']['output'];
  data?: Maybe<Array<ProductTypeType>>;
  message: Scalars['String']['output'];
  page: Page;
};

export type ProductTypeType = {
  __typename?: 'ProductTypeType';
  /** key */
  key: Scalars['String']['output'];
  /** 名称 */
  title: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  /** 查找方法 */
  find: UserType;
  getCardInfo: CardResult;
  /** 获取卡 */
  getCards: CardResults;
  /** 获取课程信息 */
  getCourseInfo: CourseResult;
  /** 获取课程（按照分页） */
  getCourses: CourseResults;
  getOrganizationInfo: OrganizationResult;
  /** 获取机构（按照分页） */
  getOrganizations: OrganizationResults;
  /** 获取OSS签名 */
  getOssInfo: OssType;
  getProductInfo: ProductResult;
  /** 获得分类列表，存储在常量文件，不用数据库 */
  getProductTypes: ProductTypeResults;
  /** 获取商品（按照分页） */
  getProducts: ProductResults;
  /** 获取商品（按照分页） */
  getProductsForH5: ProductResults;
  /** 获取学生信息 */
  getStudentInfo: StudentResult;
  /** 获取学生（按照分页） */
  getStudents: StudentResults;
  /** 使用 ID 查询用户 */
  getUserInfo: UserType;
};


export type QueryFindArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetCardInfoArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetCardsArgs = {
  courseId: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetCourseInfoArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetCoursesArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  page: PageInput;
};


export type QueryGetOrganizationInfoArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetOrganizationsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  page: PageInput;
};


export type QueryGetProductInfoArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetProductsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  page: PageInput;
};


export type QueryGetProductsForH5Args = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  page: PageInput;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetStudentsArgs = {
  params: PageInput;
};

export type ReducibleTimeInput = {
  /** 可约时间 json */
  orderTime: Array<OrderTimeInput>;
  /** 周几 */
  week: Scalars['String']['input'];
};

export type ReducibleTimeType = {
  __typename?: 'ReducibleTimeType';
  /** 可约时间 json */
  orderTime: Array<OrderTimeType>;
  /** 周几 */
  week: Scalars['String']['output'];
};

export type Result = {
  __typename?: 'Result';
  code: Scalars['Int']['output'];
  data?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export type StudentInput = {
  /** 头像 */
  avatar: Scalars['String']['input'];
  /** 昵称 */
  name: Scalars['String']['input'];
  /** 手机号 */
  tel: Scalars['String']['input'];
};

export type StudentResult = {
  __typename?: 'StudentResult';
  code: Scalars['Float']['output'];
  data: StudentType;
  message: Scalars['String']['output'];
};

export type StudentResults = {
  __typename?: 'StudentResults';
  code: Scalars['Float']['output'];
  data?: Maybe<Array<StudentType>>;
  message: Scalars['String']['output'];
  page: Page;
};

export type StudentType = {
  __typename?: 'StudentType';
  /** 账号 */
  account?: Maybe<Scalars['String']['output']>;
  /** 头像 */
  avatar?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deletedBy?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  /** 昵称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 手机号 */
  tel?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type UserInput = {
  /** 头像 */
  avatar: Scalars['String']['input'];
  /** 简介 */
  desc: Scalars['String']['input'];
  /** 昵称 */
  name: Scalars['String']['input'];
};

export type UserType = {
  __typename?: 'UserType';
  /** 账户信息 */
  account: Scalars['String']['output'];
  /** 头像 */
  avatar: Scalars['String']['output'];
  desc: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  /** 手机号，必须 */
  tel: Scalars['String']['output'];
};

export type GetCodeMsgMutationVariables = Exact<{
  tel: Scalars['String']['input'];
}>;


export type GetCodeMsgMutation = { __typename?: 'Mutation', getCodeMsg: { __typename?: 'Result', code: number, message: string } };

export type LoginMutationVariables = Exact<{
  tel: Scalars['String']['input'];
  code: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'Result', code: number, message: string, data?: string | null } };

export type GetCardsQueryVariables = Exact<{
  courseId: Scalars['String']['input'];
}>;


export type GetCardsQuery = { __typename?: 'Query', getCards: { __typename?: 'CardResults', code: number, message: string, data?: Array<{ __typename?: 'CardType', id: string, name: string, type: string, time?: number | null, validityDay: number, course?: { __typename?: 'CourseType', id: string, name: string } | null }> | null } };

export type DeleteCardMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteCardMutation = { __typename?: 'Mutation', deleteCard: { __typename?: 'Result', code: number, message: string } };

export type CommitCardInfoMutationVariables = Exact<{
  params: CardInput;
  courseId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
}>;


export type CommitCardInfoMutation = { __typename?: 'Mutation', commitCardInfo: { __typename?: 'CardResult', code: number, message: string } };

export type GetCoursesQueryVariables = Exact<{
  page: PageInput;
  name?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetCoursesQuery = { __typename?: 'Query', getCourses: { __typename?: 'CourseResults', code: number, message: string, page: { __typename?: 'Page', total: number, pageNum: number, pageSize: number }, data?: Array<{ __typename?: 'CourseType', id: string, name: string, limitNumber: number, duration: number }> | null } };

export type CommitCourseInfoMutationVariables = Exact<{
  params: CourseInput;
  id?: InputMaybe<Scalars['String']['input']>;
}>;


export type CommitCourseInfoMutation = { __typename?: 'Mutation', commitCourseInfo: { __typename?: 'CourseResult', code: number, message: string } };

export type GetCourseInfoQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetCourseInfoQuery = { __typename?: 'Query', getCourseInfo: { __typename?: 'CourseResult', code: number, message: string, data: { __typename?: 'CourseType', id: string, name: string, desc?: string | null, group: string, baseAbility: string, limitNumber: number, duration: number, reserveInfo?: string | null, refundInfo?: string | null, otherInfo?: string | null, reducibleTime?: Array<{ __typename?: 'ReducibleTimeType', week: string, orderTime: Array<{ __typename?: 'OrderTimeType', startTime: string, endTime: string, key: number }> }> | null } } };

export type GetOrganizationsQueryVariables = Exact<{
  page: PageInput;
}>;


export type GetOrganizationsQuery = { __typename?: 'Query', getOrganizations: { __typename?: 'OrganizationResults', code: number, message: string, page: { __typename?: 'Page', total: number, pageNum: number, pageSize: number }, data?: Array<{ __typename?: 'OrganizationType', id: string, logo?: string | null, name?: string | null, address?: string | null, tags?: string | null }> | null } };

export type GetSampleOrganizationsQueryVariables = Exact<{
  page: PageInput;
  name?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetSampleOrganizationsQuery = { __typename?: 'Query', getOrganizations: { __typename?: 'OrganizationResults', code: number, message: string, data?: Array<{ __typename?: 'OrganizationType', id: string, name?: string | null }> | null } };

export type GetOrganizationInfoQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetOrganizationInfoQuery = { __typename?: 'Query', getOrganizationInfo: { __typename?: 'OrganizationResult', code: number, message: string, data: { __typename?: 'OrganizationType', description?: string | null, name?: string | null, tags?: string | null, id: string, logo?: string | null, address?: string | null, tel?: string | null, longitude?: string | null, latitude?: string | null, identityCardBackImg?: string | null, identityCardFrontImg?: string | null, businessLicense?: string | null, orgFrontImg?: Array<{ __typename?: 'OrgImageType', url: string }> | null, orgRoomImg?: Array<{ __typename?: 'OrgImageType', url: string }> | null, orgOtherImg?: Array<{ __typename?: 'OrgImageType', url: string }> | null } } };

export type CommitOrganizationInfoMutationVariables = Exact<{
  params: OrganizationInput;
  id?: InputMaybe<Scalars['String']['input']>;
}>;


export type CommitOrganizationInfoMutation = { __typename?: 'Mutation', commitOrganizationInfo: { __typename?: 'OrganizationResult', code: number, message: string } };

export type DeleteOrgMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteOrgMutation = { __typename?: 'Mutation', deleteOrg: { __typename?: 'Result', code: number, message: string } };

export type Get_Oss_InfoQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_Oss_InfoQuery = { __typename?: 'Query', getOssInfo: { __typename?: 'OssType', policy: string, host: string, expire: string, dir: string, signature: string, x_oss_credential: string, x_oss_signature_version: string, security_token: string } };

export type GetProductsQueryVariables = Exact<{
  page: PageInput;
  name?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetProductsQuery = { __typename?: 'Query', getProducts: { __typename?: 'ProductResults', code: number, message: string, data?: Array<{ __typename?: 'ProductType', id: string, name: string, desc?: string | null, curStock: number, stock?: number | null, status: string, type: string, buyNum?: number | null, limitBuyNum?: number | null, coverUrl?: string | null, bannerUrl?: string | null, originPrice: number, preferentialPrice: number, createdAt: any, createdBy?: string | null, org?: { __typename?: 'OrganizationType', id: string, name?: string | null } | null }> | null, page: { __typename?: 'Page', total: number, pageNum: number, pageSize: number } } };

export type DeleteProductMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteProductMutation = { __typename?: 'Mutation', deleteProduct: { __typename?: 'Result', code: number, message: string } };

export type CommitProductInfoMutationVariables = Exact<{
  params: ProductInput;
  id?: InputMaybe<Scalars['String']['input']>;
}>;


export type CommitProductInfoMutation = { __typename?: 'Mutation', commitProductInfo: { __typename?: 'ProductResult', code: number, message: string } };

export type GetProductInfoQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetProductInfoQuery = { __typename?: 'Query', getProductInfo: { __typename?: 'ProductResult', code: number, message: string, data: { __typename?: 'ProductType', id: string, name: string, desc?: string | null, curStock: number, stock?: number | null, buyNum?: number | null, type: string, status: string, limitBuyNum?: number | null, coverUrl?: string | null, bannerUrl?: string | null, originPrice: number, preferentialPrice: number, createdAt: any, createdBy?: string | null, updatedAt?: any | null, updatedBy?: string | null, org?: { __typename?: 'OrganizationType', id: string } | null, cards?: Array<{ __typename?: 'CardType', id: string, name: string, type: string, time?: number | null, validityDay: number, course?: { __typename?: 'CourseType', name: string } | null }> | null } } };

export type GetProductTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductTypesQuery = { __typename?: 'Query', getProductTypes: { __typename?: 'ProductTypeResults', data?: Array<{ __typename?: 'ProductTypeType', key: string, title: string }> | null } };

export type GetUserInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserInfoQuery = { __typename?: 'Query', getUserInfo: { __typename?: 'UserType', id: string, name: string, tel: string, avatar: string, desc: string } };

export type UpdateUserInfoMutationVariables = Exact<{
  id: Scalars['String']['input'];
  params: UserInput;
}>;


export type UpdateUserInfoMutation = { __typename?: 'Mutation', updateUserInfo: { __typename?: 'Result', code: number, message: string } };


export const GetCodeMsgDocument = gql`
    mutation getCodeMsg($tel: String!) {
  getCodeMsg(tel: $tel) {
    code
    message
  }
}
    `;
export type GetCodeMsgMutationFn = Apollo.MutationFunction<GetCodeMsgMutation, GetCodeMsgMutationVariables>;

/**
 * __useGetCodeMsgMutation__
 *
 * To run a mutation, you first call `useGetCodeMsgMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetCodeMsgMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getCodeMsgMutation, { data, loading, error }] = useGetCodeMsgMutation({
 *   variables: {
 *      tel: // value for 'tel'
 *   },
 * });
 */
export function useGetCodeMsgMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<GetCodeMsgMutation, GetCodeMsgMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<GetCodeMsgMutation, GetCodeMsgMutationVariables>(GetCodeMsgDocument, options);
      }
export type GetCodeMsgMutationHookResult = ReturnType<typeof useGetCodeMsgMutation>;
export type GetCodeMsgMutationResult = Apollo.MutationResult<GetCodeMsgMutation>;
export type GetCodeMsgMutationOptions = Apollo.BaseMutationOptions<GetCodeMsgMutation, GetCodeMsgMutationVariables>;
export const LoginDocument = gql`
    mutation login($tel: String!, $code: String!) {
  login(tel: $tel, code: $code) {
    code
    message
    data
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      tel: // value for 'tel'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const GetCardsDocument = gql`
    query getCards($courseId: String!) {
  getCards(courseId: $courseId) {
    code
    message
    data {
      id
      name
      type
      time
      validityDay
      course {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useGetCardsQuery__
 *
 * To run a query within a React component, call `useGetCardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCardsQuery({
 *   variables: {
 *      courseId: // value for 'courseId'
 *   },
 * });
 */
export function useGetCardsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetCardsQuery, GetCardsQueryVariables> & ({ variables: GetCardsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetCardsQuery, GetCardsQueryVariables>(GetCardsDocument, options);
      }
export function useGetCardsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCardsQuery, GetCardsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetCardsQuery, GetCardsQueryVariables>(GetCardsDocument, options);
        }
// @ts-ignore
export function useGetCardsSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<GetCardsQuery, GetCardsQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetCardsQuery, GetCardsQueryVariables>;
export function useGetCardsSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetCardsQuery, GetCardsQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetCardsQuery | undefined, GetCardsQueryVariables>;
export function useGetCardsSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetCardsQuery, GetCardsQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetCardsQuery, GetCardsQueryVariables>(GetCardsDocument, options);
        }
export type GetCardsQueryHookResult = ReturnType<typeof useGetCardsQuery>;
export type GetCardsLazyQueryHookResult = ReturnType<typeof useGetCardsLazyQuery>;
export type GetCardsSuspenseQueryHookResult = ReturnType<typeof useGetCardsSuspenseQuery>;
export type GetCardsQueryResult = Apollo.QueryResult<GetCardsQuery, GetCardsQueryVariables>;
export const DeleteCardDocument = gql`
    mutation deleteCard($id: String!) {
  deleteCard(id: $id) {
    code
    message
  }
}
    `;
export type DeleteCardMutationFn = Apollo.MutationFunction<DeleteCardMutation, DeleteCardMutationVariables>;

/**
 * __useDeleteCardMutation__
 *
 * To run a mutation, you first call `useDeleteCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCardMutation, { data, loading, error }] = useDeleteCardMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCardMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteCardMutation, DeleteCardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteCardMutation, DeleteCardMutationVariables>(DeleteCardDocument, options);
      }
export type DeleteCardMutationHookResult = ReturnType<typeof useDeleteCardMutation>;
export type DeleteCardMutationResult = Apollo.MutationResult<DeleteCardMutation>;
export type DeleteCardMutationOptions = Apollo.BaseMutationOptions<DeleteCardMutation, DeleteCardMutationVariables>;
export const CommitCardInfoDocument = gql`
    mutation commitCardInfo($params: CardInput!, $courseId: String!, $id: String) {
  commitCardInfo(params: $params, courseId: $courseId, id: $id) {
    code
    message
  }
}
    `;
export type CommitCardInfoMutationFn = Apollo.MutationFunction<CommitCardInfoMutation, CommitCardInfoMutationVariables>;

/**
 * __useCommitCardInfoMutation__
 *
 * To run a mutation, you first call `useCommitCardInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCommitCardInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [commitCardInfoMutation, { data, loading, error }] = useCommitCardInfoMutation({
 *   variables: {
 *      params: // value for 'params'
 *      courseId: // value for 'courseId'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCommitCardInfoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CommitCardInfoMutation, CommitCardInfoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CommitCardInfoMutation, CommitCardInfoMutationVariables>(CommitCardInfoDocument, options);
      }
export type CommitCardInfoMutationHookResult = ReturnType<typeof useCommitCardInfoMutation>;
export type CommitCardInfoMutationResult = Apollo.MutationResult<CommitCardInfoMutation>;
export type CommitCardInfoMutationOptions = Apollo.BaseMutationOptions<CommitCardInfoMutation, CommitCardInfoMutationVariables>;
export const GetCoursesDocument = gql`
    query getCourses($page: PageInput!, $name: String) {
  getCourses(page: $page, name: $name) {
    code
    message
    page {
      total
      pageNum
      pageSize
    }
    data {
      id
      name
      limitNumber
      duration
    }
  }
}
    `;

/**
 * __useGetCoursesQuery__
 *
 * To run a query within a React component, call `useGetCoursesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCoursesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCoursesQuery({
 *   variables: {
 *      page: // value for 'page'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetCoursesQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetCoursesQuery, GetCoursesQueryVariables> & ({ variables: GetCoursesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetCoursesQuery, GetCoursesQueryVariables>(GetCoursesDocument, options);
      }
export function useGetCoursesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCoursesQuery, GetCoursesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetCoursesQuery, GetCoursesQueryVariables>(GetCoursesDocument, options);
        }
// @ts-ignore
export function useGetCoursesSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<GetCoursesQuery, GetCoursesQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetCoursesQuery, GetCoursesQueryVariables>;
export function useGetCoursesSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetCoursesQuery, GetCoursesQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetCoursesQuery | undefined, GetCoursesQueryVariables>;
export function useGetCoursesSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetCoursesQuery, GetCoursesQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetCoursesQuery, GetCoursesQueryVariables>(GetCoursesDocument, options);
        }
export type GetCoursesQueryHookResult = ReturnType<typeof useGetCoursesQuery>;
export type GetCoursesLazyQueryHookResult = ReturnType<typeof useGetCoursesLazyQuery>;
export type GetCoursesSuspenseQueryHookResult = ReturnType<typeof useGetCoursesSuspenseQuery>;
export type GetCoursesQueryResult = Apollo.QueryResult<GetCoursesQuery, GetCoursesQueryVariables>;
export const CommitCourseInfoDocument = gql`
    mutation commitCourseInfo($params: CourseInput!, $id: String) {
  commitCourseInfo(params: $params, id: $id) {
    code
    message
  }
}
    `;
export type CommitCourseInfoMutationFn = Apollo.MutationFunction<CommitCourseInfoMutation, CommitCourseInfoMutationVariables>;

/**
 * __useCommitCourseInfoMutation__
 *
 * To run a mutation, you first call `useCommitCourseInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCommitCourseInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [commitCourseInfoMutation, { data, loading, error }] = useCommitCourseInfoMutation({
 *   variables: {
 *      params: // value for 'params'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCommitCourseInfoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CommitCourseInfoMutation, CommitCourseInfoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CommitCourseInfoMutation, CommitCourseInfoMutationVariables>(CommitCourseInfoDocument, options);
      }
export type CommitCourseInfoMutationHookResult = ReturnType<typeof useCommitCourseInfoMutation>;
export type CommitCourseInfoMutationResult = Apollo.MutationResult<CommitCourseInfoMutation>;
export type CommitCourseInfoMutationOptions = Apollo.BaseMutationOptions<CommitCourseInfoMutation, CommitCourseInfoMutationVariables>;
export const GetCourseInfoDocument = gql`
    query getCourseInfo($id: String!) {
  getCourseInfo(id: $id) {
    code
    message
    data {
      id
      name
      desc
      group
      baseAbility
      limitNumber
      duration
      reserveInfo
      refundInfo
      otherInfo
      reducibleTime {
        week
        orderTime {
          startTime
          endTime
          key
        }
      }
    }
  }
}
    `;

/**
 * __useGetCourseInfoQuery__
 *
 * To run a query within a React component, call `useGetCourseInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCourseInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCourseInfoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCourseInfoQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetCourseInfoQuery, GetCourseInfoQueryVariables> & ({ variables: GetCourseInfoQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetCourseInfoQuery, GetCourseInfoQueryVariables>(GetCourseInfoDocument, options);
      }
export function useGetCourseInfoLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCourseInfoQuery, GetCourseInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetCourseInfoQuery, GetCourseInfoQueryVariables>(GetCourseInfoDocument, options);
        }
// @ts-ignore
export function useGetCourseInfoSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<GetCourseInfoQuery, GetCourseInfoQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetCourseInfoQuery, GetCourseInfoQueryVariables>;
export function useGetCourseInfoSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetCourseInfoQuery, GetCourseInfoQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetCourseInfoQuery | undefined, GetCourseInfoQueryVariables>;
export function useGetCourseInfoSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetCourseInfoQuery, GetCourseInfoQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetCourseInfoQuery, GetCourseInfoQueryVariables>(GetCourseInfoDocument, options);
        }
export type GetCourseInfoQueryHookResult = ReturnType<typeof useGetCourseInfoQuery>;
export type GetCourseInfoLazyQueryHookResult = ReturnType<typeof useGetCourseInfoLazyQuery>;
export type GetCourseInfoSuspenseQueryHookResult = ReturnType<typeof useGetCourseInfoSuspenseQuery>;
export type GetCourseInfoQueryResult = Apollo.QueryResult<GetCourseInfoQuery, GetCourseInfoQueryVariables>;
export const GetOrganizationsDocument = gql`
    query getOrganizations($page: PageInput!) {
  getOrganizations(page: $page) {
    code
    message
    page {
      total
      pageNum
      pageSize
    }
    data {
      id
      logo
      name
      address
      tags
    }
  }
}
    `;

/**
 * __useGetOrganizationsQuery__
 *
 * To run a query within a React component, call `useGetOrganizationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrganizationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrganizationsQuery({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function useGetOrganizationsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetOrganizationsQuery, GetOrganizationsQueryVariables> & ({ variables: GetOrganizationsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetOrganizationsQuery, GetOrganizationsQueryVariables>(GetOrganizationsDocument, options);
      }
export function useGetOrganizationsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetOrganizationsQuery, GetOrganizationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetOrganizationsQuery, GetOrganizationsQueryVariables>(GetOrganizationsDocument, options);
        }
// @ts-ignore
export function useGetOrganizationsSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<GetOrganizationsQuery, GetOrganizationsQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetOrganizationsQuery, GetOrganizationsQueryVariables>;
export function useGetOrganizationsSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetOrganizationsQuery, GetOrganizationsQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetOrganizationsQuery | undefined, GetOrganizationsQueryVariables>;
export function useGetOrganizationsSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetOrganizationsQuery, GetOrganizationsQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetOrganizationsQuery, GetOrganizationsQueryVariables>(GetOrganizationsDocument, options);
        }
export type GetOrganizationsQueryHookResult = ReturnType<typeof useGetOrganizationsQuery>;
export type GetOrganizationsLazyQueryHookResult = ReturnType<typeof useGetOrganizationsLazyQuery>;
export type GetOrganizationsSuspenseQueryHookResult = ReturnType<typeof useGetOrganizationsSuspenseQuery>;
export type GetOrganizationsQueryResult = Apollo.QueryResult<GetOrganizationsQuery, GetOrganizationsQueryVariables>;
export const GetSampleOrganizationsDocument = gql`
    query getSampleOrganizations($page: PageInput!, $name: String) {
  getOrganizations(page: $page, name: $name) {
    code
    message
    data {
      id
      name
    }
  }
}
    `;

/**
 * __useGetSampleOrganizationsQuery__
 *
 * To run a query within a React component, call `useGetSampleOrganizationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSampleOrganizationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSampleOrganizationsQuery({
 *   variables: {
 *      page: // value for 'page'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetSampleOrganizationsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetSampleOrganizationsQuery, GetSampleOrganizationsQueryVariables> & ({ variables: GetSampleOrganizationsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetSampleOrganizationsQuery, GetSampleOrganizationsQueryVariables>(GetSampleOrganizationsDocument, options);
      }
export function useGetSampleOrganizationsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetSampleOrganizationsQuery, GetSampleOrganizationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetSampleOrganizationsQuery, GetSampleOrganizationsQueryVariables>(GetSampleOrganizationsDocument, options);
        }
// @ts-ignore
export function useGetSampleOrganizationsSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<GetSampleOrganizationsQuery, GetSampleOrganizationsQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetSampleOrganizationsQuery, GetSampleOrganizationsQueryVariables>;
export function useGetSampleOrganizationsSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetSampleOrganizationsQuery, GetSampleOrganizationsQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetSampleOrganizationsQuery | undefined, GetSampleOrganizationsQueryVariables>;
export function useGetSampleOrganizationsSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetSampleOrganizationsQuery, GetSampleOrganizationsQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetSampleOrganizationsQuery, GetSampleOrganizationsQueryVariables>(GetSampleOrganizationsDocument, options);
        }
export type GetSampleOrganizationsQueryHookResult = ReturnType<typeof useGetSampleOrganizationsQuery>;
export type GetSampleOrganizationsLazyQueryHookResult = ReturnType<typeof useGetSampleOrganizationsLazyQuery>;
export type GetSampleOrganizationsSuspenseQueryHookResult = ReturnType<typeof useGetSampleOrganizationsSuspenseQuery>;
export type GetSampleOrganizationsQueryResult = Apollo.QueryResult<GetSampleOrganizationsQuery, GetSampleOrganizationsQueryVariables>;
export const GetOrganizationInfoDocument = gql`
    query getOrganizationInfo($id: String!) {
  getOrganizationInfo(id: $id) {
    data {
      description
      name
      tags
      id
      orgFrontImg {
        url
      }
      orgRoomImg {
        url
      }
      orgOtherImg {
        url
      }
      logo
      address
      tel
      longitude
      latitude
      identityCardBackImg
      identityCardFrontImg
      businessLicense
    }
    code
    message
  }
}
    `;

/**
 * __useGetOrganizationInfoQuery__
 *
 * To run a query within a React component, call `useGetOrganizationInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrganizationInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrganizationInfoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOrganizationInfoQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetOrganizationInfoQuery, GetOrganizationInfoQueryVariables> & ({ variables: GetOrganizationInfoQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetOrganizationInfoQuery, GetOrganizationInfoQueryVariables>(GetOrganizationInfoDocument, options);
      }
export function useGetOrganizationInfoLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetOrganizationInfoQuery, GetOrganizationInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetOrganizationInfoQuery, GetOrganizationInfoQueryVariables>(GetOrganizationInfoDocument, options);
        }
// @ts-ignore
export function useGetOrganizationInfoSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<GetOrganizationInfoQuery, GetOrganizationInfoQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetOrganizationInfoQuery, GetOrganizationInfoQueryVariables>;
export function useGetOrganizationInfoSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetOrganizationInfoQuery, GetOrganizationInfoQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetOrganizationInfoQuery | undefined, GetOrganizationInfoQueryVariables>;
export function useGetOrganizationInfoSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetOrganizationInfoQuery, GetOrganizationInfoQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetOrganizationInfoQuery, GetOrganizationInfoQueryVariables>(GetOrganizationInfoDocument, options);
        }
export type GetOrganizationInfoQueryHookResult = ReturnType<typeof useGetOrganizationInfoQuery>;
export type GetOrganizationInfoLazyQueryHookResult = ReturnType<typeof useGetOrganizationInfoLazyQuery>;
export type GetOrganizationInfoSuspenseQueryHookResult = ReturnType<typeof useGetOrganizationInfoSuspenseQuery>;
export type GetOrganizationInfoQueryResult = Apollo.QueryResult<GetOrganizationInfoQuery, GetOrganizationInfoQueryVariables>;
export const CommitOrganizationInfoDocument = gql`
    mutation commitOrganizationInfo($params: OrganizationInput!, $id: String) {
  commitOrganizationInfo(params: $params, id: $id) {
    code
    message
  }
}
    `;
export type CommitOrganizationInfoMutationFn = Apollo.MutationFunction<CommitOrganizationInfoMutation, CommitOrganizationInfoMutationVariables>;

/**
 * __useCommitOrganizationInfoMutation__
 *
 * To run a mutation, you first call `useCommitOrganizationInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCommitOrganizationInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [commitOrganizationInfoMutation, { data, loading, error }] = useCommitOrganizationInfoMutation({
 *   variables: {
 *      params: // value for 'params'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCommitOrganizationInfoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CommitOrganizationInfoMutation, CommitOrganizationInfoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CommitOrganizationInfoMutation, CommitOrganizationInfoMutationVariables>(CommitOrganizationInfoDocument, options);
      }
export type CommitOrganizationInfoMutationHookResult = ReturnType<typeof useCommitOrganizationInfoMutation>;
export type CommitOrganizationInfoMutationResult = Apollo.MutationResult<CommitOrganizationInfoMutation>;
export type CommitOrganizationInfoMutationOptions = Apollo.BaseMutationOptions<CommitOrganizationInfoMutation, CommitOrganizationInfoMutationVariables>;
export const DeleteOrgDocument = gql`
    mutation deleteOrg($id: String!) {
  deleteOrg(id: $id) {
    code
    message
  }
}
    `;
export type DeleteOrgMutationFn = Apollo.MutationFunction<DeleteOrgMutation, DeleteOrgMutationVariables>;

/**
 * __useDeleteOrgMutation__
 *
 * To run a mutation, you first call `useDeleteOrgMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOrgMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOrgMutation, { data, loading, error }] = useDeleteOrgMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteOrgMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteOrgMutation, DeleteOrgMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteOrgMutation, DeleteOrgMutationVariables>(DeleteOrgDocument, options);
      }
export type DeleteOrgMutationHookResult = ReturnType<typeof useDeleteOrgMutation>;
export type DeleteOrgMutationResult = Apollo.MutationResult<DeleteOrgMutation>;
export type DeleteOrgMutationOptions = Apollo.BaseMutationOptions<DeleteOrgMutation, DeleteOrgMutationVariables>;
export const Get_Oss_InfoDocument = gql`
    query GET_OSS_INFO {
  getOssInfo {
    policy
    host
    expire
    dir
    signature
    x_oss_credential
    x_oss_signature_version
    security_token
  }
}
    `;

/**
 * __useGet_Oss_InfoQuery__
 *
 * To run a query within a React component, call `useGet_Oss_InfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGet_Oss_InfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGet_Oss_InfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGet_Oss_InfoQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Get_Oss_InfoQuery, Get_Oss_InfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<Get_Oss_InfoQuery, Get_Oss_InfoQueryVariables>(Get_Oss_InfoDocument, options);
      }
export function useGet_Oss_InfoLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Get_Oss_InfoQuery, Get_Oss_InfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<Get_Oss_InfoQuery, Get_Oss_InfoQueryVariables>(Get_Oss_InfoDocument, options);
        }
// @ts-ignore
export function useGet_Oss_InfoSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<Get_Oss_InfoQuery, Get_Oss_InfoQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<Get_Oss_InfoQuery, Get_Oss_InfoQueryVariables>;
export function useGet_Oss_InfoSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<Get_Oss_InfoQuery, Get_Oss_InfoQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<Get_Oss_InfoQuery | undefined, Get_Oss_InfoQueryVariables>;
export function useGet_Oss_InfoSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<Get_Oss_InfoQuery, Get_Oss_InfoQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<Get_Oss_InfoQuery, Get_Oss_InfoQueryVariables>(Get_Oss_InfoDocument, options);
        }
export type Get_Oss_InfoQueryHookResult = ReturnType<typeof useGet_Oss_InfoQuery>;
export type Get_Oss_InfoLazyQueryHookResult = ReturnType<typeof useGet_Oss_InfoLazyQuery>;
export type Get_Oss_InfoSuspenseQueryHookResult = ReturnType<typeof useGet_Oss_InfoSuspenseQuery>;
export type Get_Oss_InfoQueryResult = Apollo.QueryResult<Get_Oss_InfoQuery, Get_Oss_InfoQueryVariables>;
export const GetProductsDocument = gql`
    query getProducts($page: PageInput!, $name: String) {
  getProducts(page: $page, name: $name) {
    code
    message
    data {
      id
      name
      desc
      curStock
      stock
      status
      type
      buyNum
      limitBuyNum
      coverUrl
      bannerUrl
      originPrice
      preferentialPrice
      org {
        id
        name
      }
      createdAt
      createdBy
    }
    page {
      total
      pageNum
      pageSize
    }
  }
}
    `;

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *      page: // value for 'page'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetProductsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetProductsQuery, GetProductsQueryVariables> & ({ variables: GetProductsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
      }
export function useGetProductsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
        }
// @ts-ignore
export function useGetProductsSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetProductsQuery, GetProductsQueryVariables>;
export function useGetProductsSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetProductsQuery | undefined, GetProductsQueryVariables>;
export function useGetProductsSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
        }
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<typeof useGetProductsLazyQuery>;
export type GetProductsSuspenseQueryHookResult = ReturnType<typeof useGetProductsSuspenseQuery>;
export type GetProductsQueryResult = Apollo.QueryResult<GetProductsQuery, GetProductsQueryVariables>;
export const DeleteProductDocument = gql`
    mutation deleteProduct($id: String!) {
  deleteProduct(id: $id) {
    code
    message
  }
}
    `;
export type DeleteProductMutationFn = Apollo.MutationFunction<DeleteProductMutation, DeleteProductMutationVariables>;

/**
 * __useDeleteProductMutation__
 *
 * To run a mutation, you first call `useDeleteProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductMutation, { data, loading, error }] = useDeleteProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProductMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteProductMutation, DeleteProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(DeleteProductDocument, options);
      }
export type DeleteProductMutationHookResult = ReturnType<typeof useDeleteProductMutation>;
export type DeleteProductMutationResult = Apollo.MutationResult<DeleteProductMutation>;
export type DeleteProductMutationOptions = Apollo.BaseMutationOptions<DeleteProductMutation, DeleteProductMutationVariables>;
export const CommitProductInfoDocument = gql`
    mutation commitProductInfo($params: ProductInput!, $id: String) {
  commitProductInfo(params: $params, id: $id) {
    code
    message
  }
}
    `;
export type CommitProductInfoMutationFn = Apollo.MutationFunction<CommitProductInfoMutation, CommitProductInfoMutationVariables>;

/**
 * __useCommitProductInfoMutation__
 *
 * To run a mutation, you first call `useCommitProductInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCommitProductInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [commitProductInfoMutation, { data, loading, error }] = useCommitProductInfoMutation({
 *   variables: {
 *      params: // value for 'params'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCommitProductInfoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CommitProductInfoMutation, CommitProductInfoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CommitProductInfoMutation, CommitProductInfoMutationVariables>(CommitProductInfoDocument, options);
      }
export type CommitProductInfoMutationHookResult = ReturnType<typeof useCommitProductInfoMutation>;
export type CommitProductInfoMutationResult = Apollo.MutationResult<CommitProductInfoMutation>;
export type CommitProductInfoMutationOptions = Apollo.BaseMutationOptions<CommitProductInfoMutation, CommitProductInfoMutationVariables>;
export const GetProductInfoDocument = gql`
    query GetProductInfo($id: String!) {
  getProductInfo(id: $id) {
    code
    message
    data {
      id
      name
      desc
      curStock
      stock
      buyNum
      type
      status
      limitBuyNum
      coverUrl
      bannerUrl
      originPrice
      preferentialPrice
      org {
        id
      }
      cards {
        id
        name
        type
        time
        validityDay
        course {
          name
        }
      }
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
}
    `;

/**
 * __useGetProductInfoQuery__
 *
 * To run a query within a React component, call `useGetProductInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductInfoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductInfoQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetProductInfoQuery, GetProductInfoQueryVariables> & ({ variables: GetProductInfoQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetProductInfoQuery, GetProductInfoQueryVariables>(GetProductInfoDocument, options);
      }
export function useGetProductInfoLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetProductInfoQuery, GetProductInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetProductInfoQuery, GetProductInfoQueryVariables>(GetProductInfoDocument, options);
        }
// @ts-ignore
export function useGetProductInfoSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<GetProductInfoQuery, GetProductInfoQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetProductInfoQuery, GetProductInfoQueryVariables>;
export function useGetProductInfoSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetProductInfoQuery, GetProductInfoQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetProductInfoQuery | undefined, GetProductInfoQueryVariables>;
export function useGetProductInfoSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetProductInfoQuery, GetProductInfoQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetProductInfoQuery, GetProductInfoQueryVariables>(GetProductInfoDocument, options);
        }
export type GetProductInfoQueryHookResult = ReturnType<typeof useGetProductInfoQuery>;
export type GetProductInfoLazyQueryHookResult = ReturnType<typeof useGetProductInfoLazyQuery>;
export type GetProductInfoSuspenseQueryHookResult = ReturnType<typeof useGetProductInfoSuspenseQuery>;
export type GetProductInfoQueryResult = Apollo.QueryResult<GetProductInfoQuery, GetProductInfoQueryVariables>;
export const GetProductTypesDocument = gql`
    query getProductTypes {
  getProductTypes {
    data {
      key
      title
    }
  }
}
    `;

/**
 * __useGetProductTypesQuery__
 *
 * To run a query within a React component, call `useGetProductTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductTypesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetProductTypesQuery, GetProductTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetProductTypesQuery, GetProductTypesQueryVariables>(GetProductTypesDocument, options);
      }
export function useGetProductTypesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetProductTypesQuery, GetProductTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetProductTypesQuery, GetProductTypesQueryVariables>(GetProductTypesDocument, options);
        }
// @ts-ignore
export function useGetProductTypesSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<GetProductTypesQuery, GetProductTypesQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetProductTypesQuery, GetProductTypesQueryVariables>;
export function useGetProductTypesSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetProductTypesQuery, GetProductTypesQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetProductTypesQuery | undefined, GetProductTypesQueryVariables>;
export function useGetProductTypesSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetProductTypesQuery, GetProductTypesQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetProductTypesQuery, GetProductTypesQueryVariables>(GetProductTypesDocument, options);
        }
export type GetProductTypesQueryHookResult = ReturnType<typeof useGetProductTypesQuery>;
export type GetProductTypesLazyQueryHookResult = ReturnType<typeof useGetProductTypesLazyQuery>;
export type GetProductTypesSuspenseQueryHookResult = ReturnType<typeof useGetProductTypesSuspenseQuery>;
export type GetProductTypesQueryResult = Apollo.QueryResult<GetProductTypesQuery, GetProductTypesQueryVariables>;
export const GetUserInfoDocument = gql`
    query getUserInfo {
  getUserInfo {
    id
    name
    tel
    avatar
    desc
  }
}
    `;

/**
 * __useGetUserInfoQuery__
 *
 * To run a query within a React component, call `useGetUserInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserInfoQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUserInfoQuery, GetUserInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetUserInfoQuery, GetUserInfoQueryVariables>(GetUserInfoDocument, options);
      }
export function useGetUserInfoLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUserInfoQuery, GetUserInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetUserInfoQuery, GetUserInfoQueryVariables>(GetUserInfoDocument, options);
        }
// @ts-ignore
export function useGetUserInfoSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<GetUserInfoQuery, GetUserInfoQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetUserInfoQuery, GetUserInfoQueryVariables>;
export function useGetUserInfoSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetUserInfoQuery, GetUserInfoQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetUserInfoQuery | undefined, GetUserInfoQueryVariables>;
export function useGetUserInfoSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetUserInfoQuery, GetUserInfoQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetUserInfoQuery, GetUserInfoQueryVariables>(GetUserInfoDocument, options);
        }
export type GetUserInfoQueryHookResult = ReturnType<typeof useGetUserInfoQuery>;
export type GetUserInfoLazyQueryHookResult = ReturnType<typeof useGetUserInfoLazyQuery>;
export type GetUserInfoSuspenseQueryHookResult = ReturnType<typeof useGetUserInfoSuspenseQuery>;
export type GetUserInfoQueryResult = Apollo.QueryResult<GetUserInfoQuery, GetUserInfoQueryVariables>;
export const UpdateUserInfoDocument = gql`
    mutation updateUserInfo($id: String!, $params: UserInput!) {
  updateUserInfo(id: $id, params: $params) {
    code
    message
  }
}
    `;
export type UpdateUserInfoMutationFn = Apollo.MutationFunction<UpdateUserInfoMutation, UpdateUserInfoMutationVariables>;

/**
 * __useUpdateUserInfoMutation__
 *
 * To run a mutation, you first call `useUpdateUserInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserInfoMutation, { data, loading, error }] = useUpdateUserInfoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      params: // value for 'params'
 *   },
 * });
 */
export function useUpdateUserInfoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateUserInfoMutation, UpdateUserInfoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateUserInfoMutation, UpdateUserInfoMutationVariables>(UpdateUserInfoDocument, options);
      }
export type UpdateUserInfoMutationHookResult = ReturnType<typeof useUpdateUserInfoMutation>;
export type UpdateUserInfoMutationResult = Apollo.MutationResult<UpdateUserInfoMutation>;
export type UpdateUserInfoMutationOptions = Apollo.BaseMutationOptions<UpdateUserInfoMutation, UpdateUserInfoMutationVariables>;