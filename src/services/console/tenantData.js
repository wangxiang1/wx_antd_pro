import request from '../../utils/request';

// 查询租户数据
export async function getTenantData(params) {
  return request(`${COPNETPATH}/tenantData/info`, {
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

// 查询租户产品数据明细
export async function getProductDataDetails(params) {
  return request(`${COPNETPATH}/tenantData/dataProduct`, {
    method: 'POST',
    body: params,
  });
}

// export async function getMachinesCode() {
//   return request(`${COPNETPATH}/machines/code`);
// }
