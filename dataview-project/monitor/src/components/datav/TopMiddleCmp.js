import React from 'react'

import { Decoration3, Charts } from '@jiaminghi/data-view-react'

import './TopMiddleCmp.less'

const option = {
  legend: {
    data: ['装備無傷率'],
    textStyle: {
      fill: '#fff',
    },
  },
  xAxis: {
    data: [
      '10/01',
      '10/02',
      '10/03',
      '10/04',
      '10/05',
      '10/06',
      '10/07',
      '10/07',
      '10/08',
      '10/09',
      '10/10',
      '10/11',
      '10/12',
      '10/13',
      '10/14',
      '10/15',
    ],
    boundaryGap: false,
    axisLine: {
      style: {
        stroke: '#999',
      },
    },
    axisLabel: {
      style: {
        fill: '#999',
      },
    },
    axisTick: {
      show: false,
    },
  },
  yAxis: {
    data: 'value',
    splitLine: {
      show: false,
    },
    axisLine: {
      style: {
        stroke: '#999',
      },
    },
    axisLabel: {
      style: {
        fill: '#999',
      },
      formatter({ value }) {
        return value.toFixed(2)
      },
    },
    axisTick: {
      show: false,
    },
    min: 95,
    max: 100,
    interval: 0.5,
  },
  series: [
    {
      data: [
        99.56,
        99.66,
        99.84,
        99.22,
        99.11,
        99.45,
        99.44,
        99.81,
        99.84,
        99.32,
        99.14,
        99.45,
        99.15,
        99.45,
        99.64,
        99.89,
      ],
      type: 'line',
      name: '装備無傷率',
      smooth: true,
      lineArea: {
        show: true,
        gradient: ['rgba(55, 162, 218, 0.6)', 'rgba(55, 162, 218, 0)'],
      },
      linePoint: {
        radius: 4,
        style: {
          fill: '#00db95',
        },
      },
    },
  ],
}

const style = { width: '200px', height: '20px' }

export default () => (
  <div className="top-middle-cmp">
    <div className="chart-name">
      設備稼働率月次推移
      <Decoration3 style={style} />
    </div>
    <Charts option={option} />
  </div>
)
