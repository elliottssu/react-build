import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from './components/Loading';
import App from './containers/App';

const delay = 250;
const timeout = 10000;

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
                    loader: () => {
                      return import(`${item.component}`);
                    },
                    loading: Loading,
                    delay,
                    timeout
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
