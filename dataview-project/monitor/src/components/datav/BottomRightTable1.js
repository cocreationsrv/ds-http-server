import React from 'react'

import { BorderBox6, ScrollBoard } from '@jiaminghi/data-view-react'

import './BottomRightTable1.less'

const config = {
  data: [
    ['A相電圧', '217585769.2V'],
    ['B相電圧', '217585769.2V'],
    ['C相電圧', '217585769.2V'],
    ['D相電圧', '217585769.2V'],
    ['E相電圧', '217585769.2V'],
    ['F相電圧', '217585769.2V'],
  ],
  index: true,
  columnWidth: [30, 130],
  align: ['center'],
  oddRowBGC: 'rgba(9, 37, 50, 0.4)',
  evenRowBGC: 'rgba(10, 32, 50, 0.3)',
}

export default () => (
  <div className="bottom-right-table-1">
    <BorderBox6>
      <div className="table-name">
        <img src={require('./img/icon1.png')} alt="icon" />
        人员贡献排行榜
      </div>

      <ScrollBoard config={config} />
    </BorderBox6>
  </div>
)
