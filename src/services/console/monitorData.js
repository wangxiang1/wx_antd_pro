import request from '../../utils/request';
import loadRequest from '../../utils/loadRequest';

export async function getMonitorInfo(params) {
  return request(`${COPNETPATH}/tenantData/monitorInfo`, {
    method: 'POST',
    body: params,
  });
}

export async function getReqStatus() {
  return request(`${COPNETPATH}/tenantData/getReqStatus`);
}

export async function getMonitorExcel(params) {
  return loadRequest(`${COPNETPATH}/tenantExcel/monitorExcel`, {
    method: 'POST',
    body: params,
  });
}

// 查询租户产品数据
export async function getProductData(params) {
  return request(`${COPNETPATH}/tenantData/productInfo`, {
    method: 'POST',
    body: params,
  });
}

export async function getProductDataExcel(params) {
  return loadRequest(`${COPNETPATH}/excel/productInfo`, {
    method: 'POST',
    body: params,
  });
}

// 查询租户产品数据明细
export async function getProductDataDetails(params) {
  return request(`${COPNETPATH}/tenantData/dataProduct`, {
    method: 'POST',
    body: params,
  });
}

export async function getProductDataDetailsExcel(params) {
  return loadRequest(`${COPNETPATH}/excel/dataProduct`, {
    method: 'POST',
    body: params,
  });
}

// export async function getMachinesCode() {
//   return request(`${COPNETPATH}/machines/code`);
// }
