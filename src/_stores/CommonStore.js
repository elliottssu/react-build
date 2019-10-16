/**
 * 演示store
 */

import { action, observable } from 'mobx';

class CommonStore {
  @observable saleList = [
    {
      id: 'totalGrossSales',
      name: 'Sales + Shipping adj. for refunds',
      amount: '8,638.04',
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
          amount: '595.37'
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
          rate: '6',
          amount: '-414.10'
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
          amount: '-889.42'
        },
        {
          id: 'ownCostsTotal',
          name: 'Total Cost of Goods',
          rate: '-7',
          amount: '-460.04'
        },
        {
          id: 'amzCommission',
          name: 'AMZ Referral Fees',
          rate: '-15',
          amount: '-954.15'
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
      amount: '4,840.44',
      data: [
        {
          id: 'netProfitMargin',
          name: 'Profit Margin',
          rate: '61',
          amount: ''
        }
      ]
    }
  ]

  @action setItem(index1, index2) {
    this.saleList[index1].data[index2].isShow = true
    this.saleList[index1].isOverlay = true
  }
  @action removeItem() {
    this.saleList.forEach((item1, index1)=>{
      item1.isOverlay = false
      item1.data.forEach((item2, index2)=>{
        item2.isShow = false
      })
    })
  }
}

export default new CommonStore();
