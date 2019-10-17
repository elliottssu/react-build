/**
 * 演示store
 */

import { action, observable } from 'mobx';
import dataProxy from '../dataProxy';

class CommonStore {

  @observable saleList = [];  // 数据列表

  /**
   * 获取列表
   */
  @action getSaleLit = (params) => {
    // // 这里是为了演示调取接口的，有Promise和没有的区别在于，如果用Promise的话，在调用的时候拿需要getSaleList.then((data)=>{})，用法可以网上搜素
    // return new Promise((resolve, reject) => {
    //   dataProxy.get('/api/pc/market', { params }).then((result) => {
    //     dataProxy.post('/api/pc/market', params).then((result) => {
    //       resolve(result);
    //     }).catch((err) => {
    //       reject(err);
    //     });
    //   });

    // 这里是为了演示获取数据之后的数据结构
    this.saleList = [
      {
        id: 'totalGrossSales',
        name: 'Sales + Shipping adj. for refunds',
        amount: '123,456.78',
        data: [
          {
            id: 'ppcSales',
            name: 'PPC Sales (total)',
            rate: '0',
            amount: '0.00',
            data: [
              {
                id: 'spSales',
                rate: '0',
                amount: '0.00',
              },
              {
                id: 'sbSales',
                rate: '0',
                amount: '0.00',
              },
            ]
          },
          {
            id: 'totalTaxAmount',
            name: 'Sales Tax / VAT',
            rate: '6',
            amount: '555.55'
          },
          {
            id: 'netOverallShippingRevenue',
            name: 'Shipping & giftwrap revenue',
            rate: '0',
            amount: '0.00',
            data: [
              {
                id: 'netShippingRevenue',
                rate: '0',
                amount: '0.00',
              },
              {
                id: 'netGiftWrapRevenue',
                rate: '0',
                amount: '0.00',
              },
            ]

          },
          {
            id: 'netOrganicSales',
            name: 'Organic sales',
            rate: '94',
            amount: '6,666.66'
          },
        ]
      },
      {
        id: 'totalGrossCosts',
        name: 'Total Costs',
        amount: '6,666.66',
        data: [
          {
            id: 'totalTaxAmount',
            name: 'Sales Tax / VAT',
            rate: '6',
            amount: '314.10'
          },
          {
            id: 'adSpend',
            name: 'Ad spend',
            rate: '0',
            amount: '0.00'
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
            rate: '0',
            amount: '0.00',
            data: [
              {
                id: 'refundCommission',
                rate: '0',
                amount: '0.00'
              }
            ]
          },
          {
            id: 'fbaShippingFees',
            name: 'FBA Shipping Fees',
            rate: '-14',
            amount: '999.99'
          },
          {
            id: 'ownCostsTotal',
            name: 'Total Cost of Goods',
            rate: '-7',
            amount: '444.44'
          },
          {
            id: 'amzCommission',
            name: 'AMZ Referral Fees',
            rate: '-15',
            amount: '333.33'
          },
          {
            id: 'fbaStorageFees',
            name: 'FBA Storage Fees',
            rate: '0',
            amount: '0.00'
          },
          {
            id: 'fbaServiceFees',
            name: 'FBA Service Fees',
            rate: '0',
            amount: '0.00'
          },
          {
            id: 'otherAmazonFees',
            name: 'Misc. Amazon fees',
            rate: '0',
            amount: '0.00'
          },
        ]
      },
      {
        id: 'netProfit',
        name: 'Operating Profit',
        amount: '8,888.88',
        data: [
          {
            id: 'netProfitMargin',
            name: 'Profit Margin',
            rate: '68',
            amount: ''
          }
        ]
      }
    ]
  }

  // 设置卡片遮罩
  @action setItem(index1, index2) {
    this.saleList[index1].data[index2].isShow = true
    this.saleList[index1].isOverlay = true
  }

  // 取消卡片遮罩
  @action removeItem() {
    this.saleList.forEach((item1) => {
      item1.isOverlay = false
      item1.data.forEach((item2) => {
        item2.isShow = false
      })
    })
  }
}

export default new CommonStore();
