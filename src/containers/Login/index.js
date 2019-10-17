/**
 * 登录页面
 */
import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './index.less';

class Login extends React.Component {
    // 登录
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                // 登录逻辑
                // ...
                this.props.history.push('home')
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="Login">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: '请输入用户名' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="用户名"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="密码"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox>记住密码</Checkbox>)}
                        <a className="login-form-forgot" href="/login">
                            忘记密码？
                    </a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                    </Button>
                        没有账号？ <a href="/login">立即注册</a>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
export default Form.create({ name: 'normal_login' })(Login);
