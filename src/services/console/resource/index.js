import request from '../../../utils/request';
import loadRequest from '../../../utils/loadRequest';

export async function tabData(params) {
  // return request(`${COPNETPATH}/order/getOrderByTenantId?tenantId=${params}`);
  return request(`${COPNETPATH}/instance/getInstance?tenantId=${params}`);
}

export async function getInstanceStatus() {
  return request(`${COPNETPATH}/instance/instanceStatus`);
}

export async function getInstanceById(params) {
  return request(`${COPNETPATH}/instance/getInstanceById?instanceId=${params}`);
}

export async function getInstanceByCondition(params) {
  return request(`${COPNETPATH}/instance/getInstanceByCondition`, {
    method: 'POST',
    body: params,
  });
}

// 退订
export async function deleteProduct(params) {
  return request(`${COPNETPATH}/paas/deleteProduct`, {
    method: 'DELETE',
    body: params,
  });
}

// 删除
export async function unsubscribeProduct(params) {
  return request(`${COPNETPATH}/paas/unsubscribeProduct?instanceId=${params.instanceId}`, {
    method: 'DELETE',
    // body: params,
  });
}

// 重新订购
export async function reCreateProduct(params) {
  return request(`${COPNETPATH}/paas/reCreateProduct`, {
    method: 'POST',
    body: params,
  });
}

// 通过角色获取到所有的服务
export async function getAllInstanceByRole(params) {
  return request(
    `${COPNETPATH}/order/getAllInstanceByRole${
      params.tenantId !== '' ? `?tenantId=${params.tenantId}` : ''
    }`
  );
}

// 通过租户id获取服务
export async function getInstanceInfoByTenantId(params) {
  return request(
    `${COPNETPATH}/order/getInstanceInfoByTenantId${
      params.tenantId !== '' ? `?tenantId=${params.tenantId}` : ''
    }`
  );
}

// 实例监控 获取所有实例
export async function getInstanceMonitorInfo() {
  return request(`${COPNETPATH}/order/instanceMonitorInfo`);
}

// 获取实例的CDH标签
export async function getCDHMarkByInstanceId(params) {
  return request(`${COPNETPATH}/instance/getCDHMarkByInstanceId?instanceId=${params.instanceId}`);
}

export async function exportSourceInfo(params) {
  return loadRequest(`${COPNETPATH}/service/exportSourceInfo`, {
    method: 'POST',
    body: params,
  });
}
