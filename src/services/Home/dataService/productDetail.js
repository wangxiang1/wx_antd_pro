/**
 * Created by culture on 2018/8/21.
 */

import request from '../../../utils/request';
import { toFormData } from '../../../utils/utils';

export async function getAllData(params) {
  return request(`${COPNETPATH}/competency/getCompetencyById/` + params.toString());
}

export async function getProductDataById(params) {
  return request(`${PRODUCTPATH}/bss/product/productInfoById/${params}`);
}

export async function getExampleData(params) {
  return request(`${PRODUCTPATH}/getSamp?modelId=${params.modelId}&oid=${params.oid}`);
}

export async function listTargetResource(params) {
  return request(`${PRODUCTPATH}/bdsMonitorRest/getTargetResourceList`, {
    method: 'POST',
    body: params,
  });
}

export async function listProxyResource(params) {
  return request(`${PRODUCTPATH}/bdsMonitorRest/getProxyResourceList/${params}`, {
    method: 'POST',
  });
}

export async function listAreaCode(params) {
  return request(`${PRODUCTPATH}/bdsMonitorRest/getAreaCodeList/${params}`);
}

export async function seeCountUp(params) {
  const formParams = toFormData(params);
  return request(`${COPNETPATH}/competency/seeCountUp`, {
    method: 'POST',
    body: formParams,
  });
}
