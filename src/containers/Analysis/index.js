import React from 'react';
import { Row, Col } from 'antd';
import ReactEcharts from 'echarts-for-react';

import './index.less';


export default class Permission extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        const option1 = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }]
        };

        const option2 = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
            }]
        };

        return (
            <Row>
                <Col span={12}>
                    <ReactEcharts option={option1} />
                </Col>
                <Col span={12}>
                    <ReactEcharts option={option2} />
                </Col>
            </Row>
        );
    }
}
