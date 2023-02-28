import React from 'react'

import { BorderBox6, ScrollBoard } from '@jiaminghi/data-view-react'

import './BottomRightTable3.less'

const config = {
  data: [
    ['火災警報', '月間累計：3件'],
    ['主電源オフ', '月間累計：3件'],
    ['火災警報', '月間累計：3件'],
    ['主電源オフ', '月間累計：3件'],
    ['火災警報', '月間累計：3件'],
    ['主電源オフ', '月間累計：3件'],
  ],
  index: true,
  columnWidth: [30, 100],
  align: ['center'],
  oddRowBGC: 'rgba(9, 37, 50, 0.4)',
  evenRowBGC: 'rgba(10, 32, 50, 0.3)',
}

export default () => (
  <div className="bottom-right-table-3">
    <BorderBox6>
      <div className="table-name">
        <img src={require('./img/icon3.png')} alt="icon" />
        よくある故障ランキング
      </div>

      <ScrollBoard config={config} />
    </BorderBox6>
  </div>
)
