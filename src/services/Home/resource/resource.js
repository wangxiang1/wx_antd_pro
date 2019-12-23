/**
 * Created by culture on 2018/8/15.
 */

import request from '../../../utils/request';

export async function getAllData() {
  return request(`${COPNETPATH}/cart/cartOrders`);
}

export function removeByKeys(params) {
  return request(`${COPNETPATH}/cart/delCartOrder`, {
    method: 'POST',
    body: params,
  });
}
