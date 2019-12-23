/* eslint-disable no-undef */
import request from '../../utils/request';

// 主机监控
export async function getHostMonitor() {
  return request(`${COPNETPATH}/paas/view/getHostMonitor`);
}

// 集群监控
export async function getClusterMonitor(params) {
  return request(`${COPNETPATH}/paas/view/getClusterMonitor?clusterCode=${params}`);
}

// 实例监控 按状态
export async function getInstanceMonitor() {
  return request(`${COPNETPATH}/paas/view/getInstanceMonitor`);
}

// 实例监控 按服务 统计各个运行状态的服务个数
export async function getInstanceMonitorInfo() {
  return request(`${COPNETPATH}/order/view/getInstanceMonitorInfo`);
}

// 服务概况–获取服务个数以及订阅个数
export async function getSubscriptionCountAndServiceNum() {
  return request(`${COPNETPATH}/order/view/getSubscriptionCountAndServiceNum`);
}

// 租户与项目数量情况
export async function getTenantAndProjectNum() {
  return request(`${COPNETPATH}/order/view/getTenantAndProjectNum`);
}

// 平台服务活跃度获取排行/周
export async function getDataProductSort() {
  return request(`${COPNETPATH}/order/view/getDataProductSort`);
}

// 数据产品活跃度获取排行/周
export async function getProductSubscriptionCountByCycleAndTenantUser(params) {
  return request(`${COPNETPATH}/dataService/view/getProductSubscriptionCountByCycleAndTenantUser`, {
    method: 'POST',
    body: params,
  });
}

// 数据推送业务监控
export async function getTaskExecution(params) {
  return request(`${COPNETPATH}/dataService/view/getTaskExecution?number=${params.number}`);
}

// 租户资源使用情况|组件总申请数|租户配额
export async function getTenantResourceInfo(params) {
  return request(`${COPNETPATH}/order/view/getTenantResourceInfo?provinceId=${params.provinceId}`);
}

// 租户配额
export async function getTenantCountResource() {
  return request(`${COPNETPATH}/order/view/getTenantCountResource`);
}

// 地图
export async function getTenantByProvince() {
  return request(`${COPNETPATH}/order/view/getTenantByProvince`);
}
