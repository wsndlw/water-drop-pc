import { gql } from "@apollo/client";

export const GET_CARDS = gql`
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

export const DELETE_CARD = gql`
mutation deleteProduct($id:String!){
  deleteProduct(id:$id){
    code
    message
  }
}`

export const COMMIT_CARD = gql`
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