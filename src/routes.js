import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Loadable from 'react-dynamic-loadable';
import Loading from './components/Loading';
import App from './containers/App';


// 路由配置
const routeMap = [
  {
    path: '/home',
    component: './containers/Home',
    exact: true
  },
  {
    path: '/login',
    component: './containers/Login',
    exact: true
  },
  {
    path: '/',
    component: './containers/Home',
    exact: true
  },
  {
    path: undefined,
    component: './containers/Home',
    exact: false
  },
];

export default (
  <BrowserRouter>
    <App>
      <Switch>
        {
          routeMap.map((item, index) => {
            return (
              <Route
                key={index}
                path={item.path}
                exact={item.exact}
                component={
                  Loadable({
                    component: () => import(`${item.component}`),
                    LoadingComponent: () => <Loading />,
                  })
                }
              />
            );
          })
        }
      </Switch>
    </App>
  </BrowserRouter>
);
