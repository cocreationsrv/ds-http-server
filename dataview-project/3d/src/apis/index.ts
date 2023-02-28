import {
  EnvListItemType,
  EnergyListItemType,
  StatisticsListItemType,
  YawAngleListItemType,
  ActiveListItemType,
  ErrorListItemType,
} from './types'
import requre from '@/utils/request'

export const API_LIST = {
  ENV_LIST: '/env',
  ENERGY_LIST: '/energy',
  STATISTICS_LIST: '/statistics',
  YAW_ANGLE_LIST: '/yawAngle',
  ACTIVE_LIST: '/active',
  ERROR_LIST: '/error',
}


export function getEnvData() {
  return requre.get<EnvListItemType[]>(API_LIST.ENV_LIST)
}


export function getEnergyData() {
  return requre.get<EnergyListItemType[]>(API_LIST.ENERGY_LIST)
}


export function getStatistics() {
  return requre.get<StatisticsListItemType[]>(API_LIST.STATISTICS_LIST)
}


export function getYawAngle() {
  return requre.get<YawAngleListItemType>(API_LIST.YAW_ANGLE_LIST)
}


export function getActive() {
  return requre.get<ActiveListItemType>(API_LIST.ACTIVE_LIST)
}


export function getError() {
  return requre.get<ErrorListItemType>(API_LIST.ERROR_LIST)
}
