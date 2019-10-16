import React from 'react';
import { inject, observer } from 'mobx-react';
import { Row, Col } from 'antd';

import './index.less';

@inject('CommonStore')
@observer
class Home extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        document.addEventListener('click', this.hideItem);
    }



    // 选择弹起
    selectItem = (e, index1, index2) => {
        this.hideItem()
        e.nativeEvent.stopImmediatePropagation();
        this.props.CommonStore.setItem(index1, index2)
    }

    // 点击其他区域隐藏弹层
    hideItem = () => {
        this.props.CommonStore.removeItem()
    }

    render() {
        const { saleList } = this.props.CommonStore;


        return (
            <Row>
                <Col span={14}>
                    <Row className="container-wrapper">

                        {
                            saleList.map((item1, index1) => {
                                return (
                                    <Col aria-roledescription={item1.id} className={`container-main ${item1.isOverlay ? 'contanier-overlay' : ''}`} span={8} key={index1}>
                                        <div className="container-title">
                                            <span className="name">{item1.name}</span>
                                            <div className="amount"><span className="unit">$</span><span>{item1.amount}</span></div>
                                        </div>
                                        <div className={`card-wrapper`}>
                                            {item1.data.map((item2, index2) => {
                                                return (
                                                    <dl
                                                        aria-roledescription={item2.id}
                                                        className={`card-item ${item2.data && !item2.isShow && !item1.isOverlay ? '' : 'pointer-disabled'}`}
                                                        style={{ height: `${Math.abs(item2.rate)}%` }}
                                                        onClick={(e) => this.selectItem(e, index1, index2)}
                                                        key={index2}>
                                                        <dt>
                                                            <span>{item2.name}</span>
                                                        </dt>
                                                        <dd className="text-right">
                                                            <div>{item2.rate}%</div>
                                                            {item2.amount ? (<div>${item2.amount}</div>) : null}
                                                        </dd>
                                                        <dd className={item2.isShow ? 'card-overlay display-block' : 'card-overlay'}>
                                                            {
                                                                item2.data && Array.isArray(item2.data) ? (
                                                                    item2.data.map((item3, index3) => {
                                                                        return (
                                                                            <dl key={index3}>
                                                                                <dd>
                                                                                    <span>{item3.id}</span>
                                                                                    <span>${item3.amount} ({item3.rate}%)</span>
                                                                                </dd>
                                                                            </dl>
                                                                        )
                                                                    })
                                                                ) : null
                                                            }
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

export default Home;