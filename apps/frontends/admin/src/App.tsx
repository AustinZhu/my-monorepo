import { ErrorComponent, ThemedLayoutV2, ThemedSiderV2, useNotificationProvider } from '@refinedev/antd';
import '@refinedev/antd/dist/reset.css';
import { Authenticated, GitHubBanner, Refine } from '@refinedev/core';
import { DevtoolsPanel, DevtoolsProvider } from '@refinedev/devtools';
import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from '@refinedev/react-router-v6';
import dataProvider from '@refinedev/simple-rest';
import { App as AntdApp } from 'antd';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { authProvider } from './auth-provider';
import { Header } from './components/header';
import { ColorModeContextProvider } from './contexts/color-mode';
import { BlogPostCreate, BlogPostEdit, BlogPostList, BlogPostShow } from './pages/blog-posts';
import { CategoryCreate, CategoryEdit, CategoryList, CategoryShow } from './pages/categories';
import { ForgotPassword } from './pages/forgot-password';
import { Login } from './pages/login';
import { Register } from './pages/register';

function App(): React.ReactElement {
  return (
    <BrowserRouter>
      <GitHubBanner />
      <ColorModeContextProvider>
        <AntdApp>
          <DevtoolsProvider>
            <Refine
              dataProvider={dataProvider('https://api.fake-rest.refine.dev')}
              notificationProvider={useNotificationProvider}
              routerProvider={routerBindings}
              authProvider={authProvider}
              resources={[
                {
                  name: 'blog_posts',
                  list: '/blog-posts',
                  create: '/blog-posts/create',
                  edit: '/blog-posts/edit/:id',
                  show: '/blog-posts/show/:id',
                  meta: {
                    canDelete: true,
                  },
                },
                {
                  name: 'categories',
                  list: '/categories',
                  create: '/categories/create',
                  edit: '/categories/edit/:id',
                  show: '/categories/show/:id',
                  meta: {
                    canDelete: true,
                  },
                },
              ]}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                useNewQueryKeys: true,
                projectId: 'Zg6sWL-pDSdcs-dad6RZ',
              }}
            >
              <Routes>
                <Route
                  element={
                    <Authenticated key='authenticated-inner' fallback={<CatchAllNavigate to='/login' />}>
                      <ThemedLayoutV2 Header={Header} Sider={(props) => <ThemedSiderV2 {...props} fixed />}>
                        <Outlet />
                      </ThemedLayoutV2>
                    </Authenticated>
                  }
                >
                  <Route index element={<NavigateToResource resource='blog_posts' />} />
                  <Route path='/blog-posts'>
                    <Route index element={<BlogPostList />} />
                    <Route path='create' element={<BlogPostCreate />} />
                    <Route path='edit/:id' element={<BlogPostEdit />} />
                    <Route path='show/:id' element={<BlogPostShow />} />
                  </Route>
                  <Route path='/categories'>
                    <Route index element={<CategoryList />} />
                    <Route path='create' element={<CategoryCreate />} />
                    <Route path='edit/:id' element={<CategoryEdit />} />
                    <Route path='show/:id' element={<CategoryShow />} />
                  </Route>
                  <Route path='*' element={<ErrorComponent />} />
                </Route>
                <Route
                  element={
                    <Authenticated key='authenticated-outer' fallback={<Outlet />}>
                      <NavigateToResource />
                    </Authenticated>
                  }
                >
                  <Route path='/login' element={<Login />} />
                  <Route path='/register' element={<Register />} />
                  <Route path='/forgot-password' element={<ForgotPassword />} />
                </Route>
              </Routes>
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
            </Refine>
            <DevtoolsPanel />
          </DevtoolsProvider>
        </AntdApp>
      </ColorModeContextProvider>
    </BrowserRouter>
  );
}

export default App;
