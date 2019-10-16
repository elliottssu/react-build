import React from 'react';
import { Row, Col } from 'antd';
import Fold from '../../components/Fold';

import './index.less';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Row>
                <Col span={14}>
                    <Fold />
                </Col>
                <Col span={10}>
            
                </Col>
            </Row>
        );
    }
}

export default Home;