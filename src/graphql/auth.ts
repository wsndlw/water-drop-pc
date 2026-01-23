import { gql } from "@apollo/client";

export const GET_CODE_MSG = gql`
  mutation getCodeMsg($tel:String!){
    getCodeMsg(tel:$tel){
      code
      message
    }
}
`

export const LOGIN = gql`
  mutation login($tel:String!,$code:String!){
    login(tel:$tel,code:$code){
    code
    message
    data
    }
}
`