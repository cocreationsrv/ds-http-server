import React from 'react'

import { BorderBox6, ScrollBoard } from '@jiaminghi/data-view-react'

import './BottomRightTable2.less'

const config = {
  data: [
    ['電気太郎', '2023/02/28 10:24:13'],
    ['電気二郎', '2023/02/28 10:24:13'],
    ['電気三郎', '2023/02/28 10:24:13'],
    ['電気四郎', '2023/02/28 10:24:13'],
    ['電気五郎', '2023/02/28 10:24:13'],
    ['電気六郎', '2023/02/28 10:24:13'],
  ],
  index: true,
  columnWidth: [30, 100],
  align: ['center'],
  oddRowBGC: 'rgba(9, 37, 50, 0.4)',
  evenRowBGC: 'rgba(10, 32, 50, 0.3)',
}

export default () => (
  <div className="bottom-right-table-2">
    <BorderBox6>
      <div className="table-name">
        <img src={require('./img/icon2.png')} alt="icon" />
        担当者
      </div>

      <ScrollBoard config={config} />
    </BorderBox6>
  </div>
)
