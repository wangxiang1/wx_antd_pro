import request from '../../../utils/request';
import loadRequest from '../../../utils/loadRequest';

// 平台概况
export async function getTenantBasicInfo() {
  return request(`${COPNETPATH}/tenantOverview/getTenantBasicInfo`);
}

// 工单提醒
export async function getTenantWillDoneOrder() {
  return request(`${COPNETPATH}/tenantOverview/getTenantWillDoneOrder`);
}

// 配额使用情况
export async function getTenantResourceInfo() {
  return request(`${COPNETPATH}/tenantOverview/getTenantResourceInfo`);
}

// 租户常用数据
export async function getTenantUsefulData() {
  return request(`${COPNETPATH}/tenantOverview/getTenantUsefulData`);
}

// 平台热门数据
export async function getPlatformHotDataOfTenant() {
  return request(`${COPNETPATH}/tenantOverview/getPlatformHotDataOfTenant`);
}

// 平台热门资源
export async function getPlatResource() {
  return request(`${COPNETPATH}/operator/getPlatResource`);
}

// 资源使用情况
export async function getTenantResourceUseInfo() {
  return request(`${COPNETPATH}/tenantOverview/getTenantResourceUseInfo`);
}

// 查询某一租户下的资源分配核使用情况
export async function getTenantResourceDetailInfo(params) {
  return request(`${COPNETPATH}/tenantOverview/getTenantResourceDetailInfo`, {
    method: 'POST',
    body: params,
  });
}

// 租户资源使用情况-查看更多-获取运行状态
export async function getServiceStatusOfTenant(params) {
  return request(
    `${COPNETPATH}/tenantOverview/getServiceStatusOfTenant?tenantId=${params.tenantId}`
  );
}

// 查询某一租户下运行中、更新中、退订中的服务的服务种类
export async function getServiceTypeOfTenant(params) {
  return request(`${COPNETPATH}/tenantOverview/getServiceTypeOfTenant?tenantId=${params.tenantId}`);
}

export async function loadTenantDetailsFile(params) {
  return loadRequest(`${COPNETPATH}/tenantExcel/tenant`, {
    method: 'POST',
    body: params,
  });
}

export async function getMonitorResourceUseInfoOfInstance(params) {
  return request(
    `${COPNETPATH}/operator/monitorResourceUseInfoOfInstance?instanceId=${
      params.instanceId
    }&resourceType=${params.resourceType}&startDate=${params.startDate}&endDate=${params.endDate}`
  );
}
