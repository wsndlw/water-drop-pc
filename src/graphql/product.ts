import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
query getProducts($page: PageInput!, $name: String){
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
      org { id name }
      createdAt
      createdBy
    }
    page {
      total
      pageNum
      pageSize
    }
  }
}`;

export const DELETE_PRODUCT = gql`
mutation deleteProduct($id:String!){
  deleteProduct(id:$id){
    code
    message
  }
}`

export const COMMIT_PRODUCT = gql`
mutation commitProductInfo($params:ProductInput!,$id:String){
  commitProductInfo(params:$params,id:$id){
      code
      message
  }
}`

export const GET_PRODUCT_INFO = gql`
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
      org { id }
      cards {id name type time validityDay course{name}}
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
}
`

export const GET_PRODUCT_TYPES = gql`
query getProductTypes{
  getProductTypes{
    data {
      key
      title
    }
  }
}
`;

