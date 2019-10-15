import React from 'react';
import { Row, Col } from 'antd';

import './index.less';

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Row>
                <Col span={12}>col-12</Col>
                <Col span={12}>col-12</Col>
            </Row>
        );
    }
}
