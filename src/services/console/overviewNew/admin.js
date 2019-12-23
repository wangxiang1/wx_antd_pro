import request from '../../../utils/request';
import loadRequest from '../../../utils/loadRequest';

// 平台概况
export async function getPlatInfo() {
  return request(`${COPNETPATH}/operator/getPlatInfo`);
}

// 待办事项
export async function getWillTaskInfo() {
  return request(`${COPNETPATH}/operator/getWillTaskInfo`);
}

// 运营周数据
export async function getWeekData() {
  return request(`${COPNETPATH}/operator/getWeekData`);
}

// 租户资源概况 查询运营人员的主机和CPU使用情况
export async function getTenantResourceInfo() {
  return request(`${COPNETPATH}/operator/getTenantResourceInfo`);
}

// 租户资源概况 主机状态
export async function getHostStatusOfPlat(params) {
  return request(`${COPNETPATH}/operator/getHostStatusOfPlat?clusterType=${params.clusterType}`);
}

// 租户资源概况-集群机器概况
export async function getClusterMachineInfo() {
  return request(`${COPNETPATH}/operator/getClusterMachineInfo`);
}

// 租户资源概况-折线图
export async function getResourceInfoOfPlat(params) {
  return request(
    `${COPNETPATH}/operator/getResourceInfoOfPlat?clusterType=${params.clusterType}&monitorType=${
      params.monitorType
    }&startDate=${params.startDate}&endDate=${params.endDate}`
  );
}

// 租户资源使用情况
export async function getTenantResource() {
  return request(`${COPNETPATH}/operator/getTenantResource`);
}

// 平台使用情况
export async function onLineUserNum() {
  return request(`${COPNETPATH}/operator/onLineUserNum`);
}

// 平台热门资源
export async function getPlatResource() {
  return request(`${COPNETPATH}/operator/getPlatResource`);
}

// 平台热门数据
export async function getProductSubscriptionCountByCycleAndTenantUser() {
  return request(`${COPNETPATH}/operator/getProductSubscriptionCountByCycleAndTenantUser`);
}

// 查询所有租户的服务和资源分配情况
export async function getTenantResourceDetailInfo(params) {
  return request(`${COPNETPATH}/operator/getTenantResourceDetailInfo`, {
    method: 'POST',
    body: params,
  });
}

export async function loadTenantFile(params) {
  return loadRequest(`${COPNETPATH}/tenantExcel/all`, {
    method: 'POST',
    body: params,
  });
}
