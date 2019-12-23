import request from '../../../utils/request';

export async function listHotDemandInfo() {
  return request(`${COPNETPATH}/demand/getHotDemandInfo`);
}
export async function listDemandStatusNum() {
  return request(`${COPNETPATH}/demand//getDemandStatusNum`);
}
export async function updateViewCount(params) {
  return request(`${COPNETPATH}/demand/updateViewCount?demandId=${params}`);
}
