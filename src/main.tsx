import { createRoot } from 'react-dom/client'
import './index.css'
import { client } from './utils/apollo.ts'
import { ApolloProvider } from '@apollo/client/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './routes/menus.tsx'
import Layout from './containers/Layout/index.tsx'
import UserInfo from './components/UserInfo/index.tsx'
import Login from './containers/Login/index.tsx'
import { ROUTE_COMPONENT } from './routes/index.ts'

const route = routes.map(item => {
  const Component = ROUTE_COMPONENT[item.key]
  return (<Route
    path={item.path}
    key={item.key}
    element={<Component />}
  />)
})

createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>


    <BrowserRouter>
      <UserInfo>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Layout />}>

            {route}
          </Route>


        </Routes>
        {/* </UserInfo> */}
      </UserInfo>
    </BrowserRouter>

  </ApolloProvider>,
) 
