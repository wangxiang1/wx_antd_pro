// import { stringify } from 'qs';
import request from '../../../utils/request';

export async function getTableData(params) {
  return request(`${COPNETPATH}/menu/listMenu`, {
    method: 'POST',
    body: params,
  });
}

export async function queryOrderList() {
  return request(`${COPNETPATH}/order/getAllOrderStatus`);
}
