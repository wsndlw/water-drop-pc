import { createRoot } from 'react-dom/client'
import './index.css'
import { client } from './utils/apollo.ts'
import { ApolloProvider } from '@apollo/client/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ROUTE_CONFIG } from './routes/index.ts'
import Page404 from './containers/Page404'

const routes = ROUTE_CONFIG.map(item => <Route
  path={item.path}
  key={item.key}
  element={<item.element />}
/>)

createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes>
        {routes}

        <Route path='/404' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  </ApolloProvider>,
)
