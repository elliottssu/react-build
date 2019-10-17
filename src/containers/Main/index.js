/**
 * 二级菜单入口
 */
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu, Icon, Button } from 'antd';

import Home from '../Home';
import Analysis from '../Analysis';
import Permission from '../Permission';

import logo from '../../images/logo.svg';

import './index.less';

const { Header, Sider, Content } = Layout;


export default class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            collapsed: false,
        };
    }

    // 隐藏折叠左侧菜单
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {


        // 路由配置二级
        const routeMap = [
            {
                path: '/',
                component: Home,
                exact: true
            },
            {
                path: '/home',
                component: Home,
                exact: true
            },
            {
                path: '/analysis',
                component: Analysis,
                exact: true
            },
            {
                path: '/permission',
                component: Permission,
                exact: true
            },
        ];

        // 左侧菜单列表
        const menuList = [
            {
                name: '首页',
                url: '/home',
                icon: 'home'
            },
            {
                name: '数据分析',
                url: '/analysis',
                icon: 'bar-chart'
            },
            {
                name: '权限管理',
                url: '/permission',
                icon: 'idcard'
            },
        ]
        const { pathname } = this.props.location;

        return (
            <Layout className="Main">
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo"><img src={logo} height="24" alt="logo" /></div>
                    <Menu theme="dark" mode="inline">
                        {
                            menuList.map((item, index) => {
                                return (
                                    <Menu.Item key={index} className={pathname === item.url || (pathname === '/' && item.url === '/home') ? 'ant-menu-item-selected' : ''}>
                                        <Link to={item.url}>
                                            <Icon type={item.icon} />
                                            <span>{item.name}</span>
                                        </Link>
                                    </Menu.Item>
                                );
                            })
                        }
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: '0px 20px 0 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                        <Link to='/login'>
                            <Button>登录</Button>
                        </Link>

                    </Header>
                    <Content
                        style={{
                            margin: '15px 15px 0',
                            padding: 24,
                            background: '#fff',
                            minHeight: 280,
                            overflow: 'auto'
                        }}
                    >
                        <Switch>
                            {
                                routeMap.map((item, index) => {
                                    return (
                                        <Route
                                            key={index}
                                            path={item.path}
                                            exact={item.exact}
                                            component={item.component}
                                        />
                                    );
                                })
                            }
                        </Switch>
                    </Content>
                </Layout>
            </Layout>

        );
    }
}
