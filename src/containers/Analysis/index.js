/**
 * 数据分析页面
 */
import React from 'react';
import { Row, Col } from 'antd';
import ReactEcharts from 'echarts-for-react';
import Chart from '../../_utils/Chart';

import './index.less';


export default class Permission extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        const option1 = Chart.getEchartOption1();

        const option2 = Chart.getEchartOption2();

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
