import React from 'react'

import { BorderBox5, Decoration3 } from '@jiaminghi/data-view-react'

import './TopLeftCmp.less'

const style = { width: '200px', height: '20px' }

export default () => (
  <div className="top-left-cmp">
    <div className="dc-left">
      <BorderBox5>
        <div className="main-value">
          <span>0</span>件
        </div>
        <div className="compare-value">
          <span>前年同期比</span>81
        </div>
        <div className="compare-value">
          <span>前月比</span>15
        </div>
      </BorderBox5>
      <div className="dc-text">
      一人当たりの維持管理作業量
        <Decoration3 style={style} />
      </div>
    </div>
    <div className="dc-right">
      <div className="dc-text">
      毎月のメンテナンス タスク
        <Decoration3 style={style} />
      </div>
      <BorderBox5 reverse={true}>
        <div className="main-value">
          <span>0.1</span>件 / 日
        </div>
        <div className="compare-value">
          <span>前年同期比</span>66
        </div>
        <div className="compare-value">
          <span>前月比</span>9
        </div>
      </BorderBox5>
    </div>
  </div>
)
