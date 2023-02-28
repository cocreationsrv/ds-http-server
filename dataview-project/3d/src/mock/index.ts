import Mock from 'mockjs'
import { API_LIST } from '@/apis'
import {
  EnvListItemType,
  EnergyListItemType,
  StatisticsListItemType,
  YawAngleListItemType,
  ErrorListItemType,
} from '@/apis/types'
import { createTraversedArray } from '@/utils/common'
import { map } from 'lodash-es'

Mock.setup({ timeout: '600-1000' })

function successResponse<T>(data: T) {
  return {
    data,
    errorCode: '',
    success: true,
  }
}

function failResponse<T>(data: T) {
  return {
    data,
    errorCode: 500,
    success: false,
  }
}


Mock.mock(new RegExp(API_LIST.ENV_LIST), () => {
  return successResponse<EnvListItemType[]>([
    {
      label: '周囲温度',
      value: `${(Math.random() * 50).toFixed(2)}`,
    },
    {
      label: 'キャビン温度',
      value: `${(Math.random() * 50).toFixed(2)}`,
    },
    {
      label: 'ギアボックス温度',
      value: `${(Math.random() * 50).toFixed(2)}`,
    },
  ])
})


Mock.mock(new RegExp(API_LIST.ENERGY_LIST), () => {
  return successResponse<EnergyListItemType[]>(
    map(createTraversedArray(12), (item, index) => ({
      label: `#${index}`,
      value: (Math.random() * 100).toFixed(2),
    })),
  )
})


Mock.mock(new RegExp(API_LIST.STATISTICS_LIST), () => {
  return successResponse<StatisticsListItemType[]>([
    {
      label: '年間発電能力',
      value: `${Math.random() * 1000}MWh`,
      type: 'normal',
    },
    {
      label: '毎月の発電量',
      value: `${Math.random() * 1000}MWh`,
      type: 'normal',
    },
    {
      label: '毎日の発電量',
      value: `${Math.random() * 1000}MWh`,
      type: 'normal',
    },
    {
      label: '負荷率',
      value: `${Math.random() * 100}%`,
      type: 'normal',
    },
    {
      label: '平均風速:',
      value: `${Math.random() * 1000}km/s`,
      type: 'normal',
    },
    {
      label: '最大風速',
      value: `${Math.random() * 1000}km/s`,
      type: 'normal',
    },
    {
      label: '総電力',
      value: `${Math.random() * 1000}KVa`,
      type: 'normal',
    },
  ])
})


Mock.mock(new RegExp(API_LIST.YAW_ANGLE_LIST), () => {
  return successResponse<YawAngleListItemType[]>(
    createTraversedArray(100).map(() => {
      const dirEnum = '東西南北'
      const random = Math.round(Math.random() * 3)
      const value = Math.round(Math.random() * 90)
      const type = value > 60 ? 'danger' : 'primary'
      return {
        label: `${dirEnum[random]}へ偏揺れ (2023/02/28 13:45:32)`,
        value: `${value}°`,
        type,
      }
    }),
  )
})


Mock.mock(new RegExp(API_LIST.ERROR_LIST), () => {
  return successResponse<ErrorListItemType[]>([
    {
      label: 'エンジン稼働中',
      value: '疑わしい状態',
      type: 'danger',
    },
    {
      label: 'ギアボックス操作',
      value: '疑わしい状態',
      type: 'danger',
    },
    {
      label: 'ピッチ系操作',
      value: '異常',
      type: 'danger',
    },
    {
      label: 'スピンドル ランニング',
      value: '異常',
      type: 'danger',
    },
    {
      label: 'ブレード操作',
      value: '疑わしい状態',
      type: 'danger',
    },
    {
      label: 'ヨー角度',
      value: '異常',
      type: 'danger',
    },
    {
      label: 'ジェネレーター',
      value: '正常',
      type: 'danger',
    },
    {
      label: 'ジェネレーター',
      value: '正常',
      type: 'danger',
    },
  ])
})


Mock.mock(new RegExp(API_LIST.ACTIVE_LIST), () => {
  return successResponse<ErrorListItemType[]>([
    {
      label: 'エンジン稼働中',
      value: '正常',
      type: 'normal',
    },
    {
      label: 'ギアボックス操作',
      value: '正常',
      type: 'normal',
    },
    {
      label: 'ピッチ系操作',
      value: '正常',
      type: 'normal',
    },
    {
      label: 'スピンドル ランニング',
      value: '正常',
      type: 'normal',
    },
    {
      label: 'ブレード操作',
      value: '正常',
      type: 'normal',
    },
    {
      label: 'ヨー角',
      value: '正常',
      type: 'normal',
    },
  ])
})
