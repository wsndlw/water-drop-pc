import { gql } from '@apollo/client';

export const GET_OSS_INFO = gql`
  query GET_OSS_INFO{
    getOssInfo{
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
`