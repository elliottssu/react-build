import React from 'react';
import { Row, Col } from 'antd';

import './index.less';

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        const lists = [
            {
                id: 'totalGrossSales',
                name: 'Sales + Shipping adj. for refunds',
                amount: '8,638.04',
                data: [
                    {
                        id: 'ppcSales',
                        name: 'PPC Sales (total)',
                        rate: '0',
                        amount: '0.00'
                    },
                    {
                        id: 'totalTaxAmount',
                        name: 'Sales Tax / VAT',
                        rate: '7',
                        amount: '595.37'
                    },
                    {
                        id: 'netOverallShippingRevenue',
                        name: 'Shipping & giftwrap revenue',
                        rate: '0',
                        amount: '0.00'
                    },
                    {
                        id: 'netOrganicSales',
                        name: 'Organic sales',
                        rate: '93',
                        amount: '8,042.67'
                    },
                ]
            },
            {
                id: 'totalGrossCosts',
                name: 'Total Costs',
                amount: '-3,797.60',
                data: [
                    {
                        id: 'totalTaxAmount',
                        name: 'Sales Tax / VAT',
                        rate: '0',
                        amount: '0.00'
                    },
                    {
                        id: 'adSpend',
                        name: 'Ad spend',
                        rate: '7',
                        amount: '595.37'
                    },
                    {
                        id: 'totalPromoCost',
                        name: 'Promotion Cost',
                        rate: '0',
                        amount: '0.00'
                    },
                    {
                        id: 'totalReturnCost',
                        name: 'Return cost',
                        rate: '93',
                        amount: '8,042.67'
                    },
                    {
                        id: 'fbaShippingFees',
                        name: 'FBA Shipping Fees',
                        rate: '93',
                        amount: '8,042.67'
                    },
                    {
                        id: 'ownCostsTotal',
                        name: 'Total Cost of Goods',
                        rate: '93',
                        amount: '8,042.67'
                    },
                    {
                        id: 'amzCommission',
                        name: 'AMZ Referral Fees',
                        rate: '93',
                        amount: '8,042.67'
                    },
                    {
                        id: 'fbaStorageFees',
                        name: 'FBA Storage Fees',
                        rate: '93',
                        amount: '8,042.67'
                    },
                    {
                        id: 'fbaServiceFees',
                        name: 'FBA Service Fees',
                        rate: '93',
                        amount: '8,042.67'
                    },
                    {
                        id: 'otherAmazonFees',
                        name: 'Misc. Amazon fees',
                        rate: '93',
                        amount: '8,042.67'
                    },
                ]
            },
            {
                id: 'netProfit',
                name: 'Operating Profit',
                amount: '4,840.44',
                data: [
                    {
                        id: 'netProfitMargin',
                        name: 'Profit Margin',
                        rate: '60',
                        amount: ''
                    }
                ]
            }
        ]
        return (
            <Row>
                <Col span={14}>
                    <Row className="container-wrapper">

                        {
                            lists.map((list, index1) => {
                                return (
                                    <Col className="container-main" span={8} key={index1}>
                                        <div className="container-title">
                                            <span className="name">{list.name}</span>
                                            <div className="amount"><span className="unit">$</span><span>{list.amount}</span></div>
                                        </div>
                                        <div aria-roledescription={list.id} className="card-wrapper">
                                            {list.data.map((item, index2) => {
                                                return (
                                                    <dl aria-roledescription={item.id} className="card-item" key={index2}>
                                                        <dt>
                                                            <span>{item.name}</span>
                                                        </dt>
                                                        <dd>
                                                            <span>{item.rate}%</span>
                                                            <span>${item.amount}</span>
                                                        </dd>
                                                    </dl>
                                                )
                                            })}
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Col>
                <Col span={10}></Col>
            </Row>
        );
    }
}
