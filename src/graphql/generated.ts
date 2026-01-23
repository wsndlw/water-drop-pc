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

export type Mutation = {
  __typename?: 'Mutation';
  commitOrganizationInfo: OrganizationResult;
  commitStudentInfo: StudentResult;
  create: Scalars['Boolean']['output'];
  del: Scalars['Boolean']['output'];
  /** 删除机构 */
  deleteOrg: Result;
  /** 发送验证码 */
  getCodeMsg: Result;
  /** 登录 */
  login: Result;
  update: Scalars['Boolean']['output'];
  /** 更新用户 */
  updateUserInfo: Result;
};


export type MutationCommitOrganizationInfoArgs = {
  id: InputMaybe<Scalars['String']['input']>;
  params: OrganizationInput;
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


export type MutationDeleteOrgArgs = {
  id: Scalars['String']['input'];
};


export type MutationGetCodeMsgArgs = {
  tel: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  code: Scalars['String']['input'];
  tel: Scalars['String']['input'];
};


export type MutationUpdateArgs = {
  id: Scalars['String']['input'];
  params: UserInput;
};


export type MutationUpdateUserInfoArgs = {
  id: Scalars['String']['input'];
  params: UserInput;
};

export type OrgImageInput = {
  id: InputMaybe<Scalars['String']['input']>;
  remark: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};

export type OrgImageType = {
  __typename?: 'OrgImageType';
  id: Maybe<Scalars['String']['output']>;
  remark: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type OrganizationInput = {
  /** 地址 */
  address: InputMaybe<Scalars['String']['input']>;
  /** 营业执照 */
  businessLicense: Scalars['String']['input'];
  /** description */
  description: Scalars['String']['input'];
  /** 法人身份证反面 */
  identityCardBackImg: InputMaybe<Scalars['String']['input']>;
  /** 法人身份证正面 */
  identityCardFrontImg: InputMaybe<Scalars['String']['input']>;
  /** 经度 */
  latitude: InputMaybe<Scalars['String']['input']>;
  /** logo */
  logo: Scalars['String']['input'];
  /** 维度 */
  longitude: InputMaybe<Scalars['String']['input']>;
  /** 名称 */
  name: Scalars['String']['input'];
  /** 机构门面照片 */
  orgFrontImg: InputMaybe<Array<OrgImageInput>>;
  /** 机构环境照片 */
  orgOtherImg: InputMaybe<Array<OrgImageInput>>;
  /** 机构环境照片 */
  orgRoomImg: InputMaybe<Array<OrgImageInput>>;
  /** 标签 */
  tags: InputMaybe<Scalars['String']['input']>;
  /** 手机号 */
  tel: InputMaybe<Scalars['String']['input']>;
};

export type OrganizationResult = {
  __typename?: 'OrganizationResult';
  code: Scalars['String']['output'];
  data: OrganizationType;
  message: Scalars['String']['output'];
};

export type OrganizationResults = {
  __typename?: 'OrganizationResults';
  code: Scalars['Float']['output'];
  data: Maybe<Array<OrganizationType>>;
  message: Scalars['String']['output'];
  page: Page;
};

export type OrganizationType = {
  __typename?: 'OrganizationType';
  /** 地址 */
  address: Maybe<Scalars['String']['output']>;
  /** 营业执照 */
  businessLicense: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy: Maybe<Scalars['String']['output']>;
  deletedAt: Maybe<Scalars['DateTime']['output']>;
  deletedBy: Maybe<Scalars['String']['output']>;
  /** 简介 */
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  /** 法人身份证反面 */
  identityCardBackImg: Scalars['String']['output'];
  /** 法人身份证正面 */
  identityCardFrontImg: Scalars['String']['output'];
  /** 纬度 */
  latitude: Maybe<Scalars['String']['output']>;
  /** logo */
  logo: Maybe<Scalars['String']['output']>;
  /** 经度 */
  longitude: Maybe<Scalars['String']['output']>;
  /** 机构名 */
  name: Maybe<Scalars['String']['output']>;
  /** 封面图 */
  orgFrontImg: Maybe<Array<OrgImageType>>;
  /** 其他图 */
  orgOtherImg: Maybe<Array<OrgImageType>>;
  /** 室内图 */
  orgRoomImg: Maybe<Array<OrgImageType>>;
  /** 标签 以，隔开 */
  tags: Maybe<Scalars['String']['output']>;
  /** 电话 */
  tel: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  updatedBy: Maybe<Scalars['String']['output']>;
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

export type Query = {
  __typename?: 'Query';
  /** 查找方法 */
  find: UserType;
  getOrganizationInfo: OrganizationResult;
  /** 获取机构（按照分页） */
  getOrganizations: OrganizationResults;
  /** 获取OSS签名 */
  getOssInfo: OssType;
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


export type QueryGetOrganizationInfoArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetOrganizationsArgs = {
  params: PageInput;
};


export type QueryGetStudentsArgs = {
  params: PageInput;
};

export type Result = {
  __typename?: 'Result';
  code: Scalars['Int']['output'];
  data: Maybe<Scalars['String']['output']>;
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
  code: Scalars['String']['output'];
  data: StudentType;
  message: Scalars['String']['output'];
};

export type StudentResults = {
  __typename?: 'StudentResults';
  code: Scalars['Float']['output'];
  data: Maybe<Array<StudentType>>;
  message: Scalars['String']['output'];
  page: Page;
};

export type StudentType = {
  __typename?: 'StudentType';
  /** 账号 */
  account: Maybe<Scalars['String']['output']>;
  /** 头像 */
  avatar: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy: Maybe<Scalars['String']['output']>;
  deletedAt: Maybe<Scalars['DateTime']['output']>;
  deletedBy: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  /** 昵称 */
  name: Maybe<Scalars['String']['output']>;
  /** 手机号 */
  tel: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  updatedBy: Maybe<Scalars['String']['output']>;
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
  avatar: Maybe<Scalars['String']['output']>;
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


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'Result', code: number, message: string, data: string | null } };

export type GetOrganizationsQueryVariables = Exact<{
  params: PageInput;
}>;


export type GetOrganizationsQuery = { __typename?: 'Query', getOrganizations: { __typename?: 'OrganizationResults', code: number, message: string, page: { __typename?: 'Page', total: number, pageNum: number, pageSize: number }, data: Array<{ __typename?: 'OrganizationType', id: string, logo: string | null, name: string | null, address: string | null, tags: string | null }> | null } };

export type GetOrganizationInfoQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetOrganizationInfoQuery = { __typename?: 'Query', getOrganizationInfo: { __typename?: 'OrganizationResult', code: string, message: string, data: { __typename?: 'OrganizationType', description: string | null, name: string | null, tags: string | null, id: string, logo: string | null, address: string | null, tel: string | null, longitude: string | null, latitude: string | null, identityCardBackImg: string, identityCardFrontImg: string, businessLicense: string, orgFrontImg: Array<{ __typename?: 'OrgImageType', url: string }> | null, orgRoomImg: Array<{ __typename?: 'OrgImageType', url: string }> | null, orgOtherImg: Array<{ __typename?: 'OrgImageType', url: string }> | null } } };

export type CommitOrganizationInfoMutationVariables = Exact<{
  params: OrganizationInput;
  id: InputMaybe<Scalars['String']['input']>;
}>;


export type CommitOrganizationInfoMutation = { __typename?: 'Mutation', commitOrganizationInfo: { __typename?: 'OrganizationResult', code: string, message: string } };

export type DeleteOrgMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteOrgMutation = { __typename?: 'Mutation', deleteOrg: { __typename?: 'Result', code: number, message: string } };

export type Get_Oss_InfoQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_Oss_InfoQuery = { __typename?: 'Query', getOssInfo: { __typename?: 'OssType', policy: string, host: string, expire: string, dir: string, signature: string, x_oss_credential: string, x_oss_signature_version: string, security_token: string } };

export type GetUserInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserInfoQuery = { __typename?: 'Query', getUserInfo: { __typename?: 'UserType', id: string, name: string, tel: string, avatar: string | null, desc: string } };

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
export const GetOrganizationsDocument = gql`
    query getOrganizations($params: PageInput!) {
  getOrganizations(params: $params) {
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
 *      params: // value for 'params'
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