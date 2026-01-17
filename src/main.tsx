import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { client } from './utils/apollo.ts'
import {ApolloProvider} from '@apollo/client/react'


createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
)
