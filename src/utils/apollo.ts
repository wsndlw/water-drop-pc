import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { SetContextLink } from '@apollo/client/link/context'
import { AUTH_TOKEN } from './constants'
import { currentOrg } from './index.ts'

const httpLink = new HttpLink({
  uri: 'http://localhost:3000/graphql',
})

const authLink = new SetContextLink(({ headers }, _) => {
  const token = localStorage.getItem(AUTH_TOKEN) || sessionStorage.getItem(AUTH_TOKEN)
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
      orgId: currentOrg()?.value
    }
  }
})
export const client = new ApolloClient(
  {
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  }
)
