import request from '../../../utils/request';

// 管理员总览页面，获取服务情况
export async function getService() {
  return request(`${COPNETPATH}/order/getServiceAndNum`);
}

// 管理员总览页面，获取僵尸用户数
export async function getUserCleanUp() {
  return request(`${COPNETPATH}/user/deadUserCount`);
}

// 总览，工单详情
export async function getJobReminder() {
  return request(`${COPNETPATH}/order/getAllOrderStatus`);
}

// 管理员总览页面，获取租户用户
export async function getTenantAndProjectNum() {
  return request(`${COPNETPATH}/order/getTenantAndProjectNum`);
}

// 管理员总览页面，获取资源排行
export async function getResourceRank() {
  return request(`${COPNETPATH}/order/getAllResourceNo`);
}

// 管理员总览页面，获取统计资源
export async function getStatistics() {
  return request(`${COPNETPATH}/order/getAllServiceReq`);
}

// 管理员总览页面，获取统计资源
export async function getCountProduct() {
  return request(`${COPNETPATH}/dataService/getCountProduct`);
}
