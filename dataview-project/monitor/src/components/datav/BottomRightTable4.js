import React from 'react'

import { BorderBox6, ScrollBoard } from '@jiaminghi/data-view-react'

import './BottomRightTable4.less'

const config = {
  data: [
    ['サブセンター', '月間累計：3件'],
    ['倉庫', '月間累計：3件'],
    ['センター', '月間累計：3件'],
    ['倉庫', '月間累計：3件'],
    ['運用センター', '月間累計：3件'],
    ['その他', '月間累計：3件'],
  ],
  index: true,
  columnWidth: [30, 150],
  align: ['center'],
  oddRowBGC: 'rgba(9, 37, 50, 0.4)',
  evenRowBGC: 'rgba(10, 32, 50, 0.3)',
}

export default () => (
  <div className="bottom-right-table-4">
    <BorderBox6>
      <div className="table-name">
        <img src={require('./img/icon4.png')} alt="icon" />
        故障場所ランキング
      </div>

      <ScrollBoard config={config} />
    </BorderBox6>
  </div>
)
