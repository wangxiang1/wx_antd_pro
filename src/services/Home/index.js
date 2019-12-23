import { stringify } from 'qs';
import request from '../../utils/request';

export async function queryRule(params) {
  return request(`${COPNETPATH}/api/rule?${stringify(params)}`);
}
export async function queryHome() {
  return request('/apiprod/list');
}
export async function currentUser() {
  return request(`${COPNETPATH}/user/currentUser`);
}
export async function getApplyMockData(params) {
  return request(`${COPNETPATH}/mockapi/apply?${stringify(params)}`);
}

export async function payMoney(params) {
  return request(`${COPNETPATH}/api/apply/pay`, {
    method: 'POST',
    body: params,
  });
}
