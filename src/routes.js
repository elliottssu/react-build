import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Loadable from 'react-dynamic-loadable';
import Loading from './components/Loading';
import App from './containers/App';

import Main from './containers/Main';
import Login from './containers/Login';



// 路由配置一级
const routeMap = [
  {
    path: '/',
    component: Main,
    exact: true
  },
  {
    path: '/login',
    component: Login,
    exact: true
  },
  {
    path: undefined,
    component: Main,
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
                    component: () => item.component,
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
