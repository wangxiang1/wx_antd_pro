import request from '../../../../utils/request';

// 获取所有API信息
export async function listApiDatas(params) {
  return request(
    `${APIPATH}/display/api-list/list.jag?action=getApiList&userName=${params.loginId}&tenantId=${
      params.tenantId
    }&tag=&query=&page=&size=&sortType=`
  );
}

// 根据用户名获取其发布的API下的订阅者，以及订阅者对这些api的调用次数
export async function listApiSubscribersInfoByProvider(params) {
  return request(
    `${APIPUBLISHERPATH}/display/analysis.jag?action=getSubscribersInfoByProvider&userName=${
      params.loginId
    }&tenantId=${params.tenantId}`
  );
}

// 获取所有数据产品
export async function listProductDatas(params) {
  return request(`${PRODUCTPATH}/bss/product/productList`, {
    method: 'POST',
    body: { pageindex: '', pagesize: '', tenantId: params.tenantId, productStatus: '3' },
  });
}

// 获取所有订阅的数据产品信息
export async function listSubscribedProductCountByOthers(params) {
  return request(
    `${PRODUCTPATH}/bdsMonitorRest/getSubscribedProductCountByOthers/${params.userId}`,
    {
      method: 'POST',
    }
  );
}

// 获取所有的租户信息，及用户信息,key为userId
export async function listUserTenantsByUserId(params) {
  return request(`${COPNETPATH}/sso/rest/v1/usertenants/${params}`);
}

// 获取所有的租户信息，及用户信息,key为tenantId
export async function listUserTenantsByTenantId(params) {
  return request(`${COPNETPATH}/sso/rest/v1/usertenants/${params}`);
}

// 租户控制台，获取租户项目概况
export async function getProjectStatusNumByTenantId(params) {
  return request(`${COPNETPATH}/order/getProjectStatusNumByTenantId?tenantId=${params}`);
}

// 租户控制台，获取用户数
export async function getUserNumByTenantId(params) {
  return request(`${COPNETPATH}/order/getUserNumByTenantId?tenantId=${params}`);
}

// 租户控制台，工单
export async function getTenantOrderTypeNum() {
  return request(`${COPNETPATH}/order/getAllOrderStatus`);
}

// 租户控制台，资源使用情况(饼图)
export async function getResourceInfoByCondition(params) {
  return request(`${COPNETPATH}/order/getResourceInfoByCondition?tenantId=${params}`);
}

// 租户控制台，已订阅服务
export async function getServiceNum(params) {
  return request(`${COPNETPATH}/order/getServiceNum?tenantId=${params}`);
}

// 租户控制台，服务资源占用情况
export async function getResourceUsedStatusByTenantId(params) {
  return request(`${COPNETPATH}/order/getResourceDetail?tenantId=${params}`);
}

// 租户控制台，我的资源
export async function getMyResourceByTenantId(params) {
  return request(`${COPNETPATH}/order/getMyResourceByTenantId?tenantId=${params}`);
}
