import request from '../../../utils/request';

// 租户入驻情况
export async function getTenantOverall(params) {
  return request(
    `${COPNETPATH}/monthlyReports/getTentantOverall?startTime=${params.startTime}&endTime=${
      params.endTime
    }`
  );
}

// 集群资源监控情况查询
export async function getClusterResource(params) {
  return request(
    `${COPNETPATH}/monthlyReports/getclusterResource?startTime=${params.startTime}&endTime=${
      params.endTime
    }`
  );
}

// 退租清单查询
export async function getOutTenantList(params) {
  return request(
    `${COPNETPATH}/monthlyReports/getOutTenantList?startTime=${params.startTime}&endTime=${
      params.endTime
    }`
  );
}

// 新入驻清单
export async function getNewTenantList(params) {
  return request(
    `${COPNETPATH}/monthlyReports/getNewTenantList?startTime=${params.startTime}&endTime=${
      params.endTime
    }`
  );
}

// 高活跃度租户清单
export async function getTenantActiveList(params) {
  return request(
    `${COPNETPATH}/monthlyReports/getTenantActiveList?startTime=${params.startTime}&endTime=${
      params.endTime
    }`
  );
}

// 组织机构活跃度概况
export async function getOrgActiveList(params) {
  return request(
    `${COPNETPATH}/monthlyReports/getOrgActiveList?startTime=${params.startTime}&endTime=${
      params.endTime
    }`
  );
}

// 租户活跃度情况概况
export async function getTenantActive(params) {
  return request(`${COPNETPATH}/monthlyReports/getTenantActive`, {
    method: 'POST',
    body: params,
  });
}

// 机器资源分配情况
export async function getMachine(params) {
  return request(
    `${COPNETPATH}/monthReport/machine?startTime=${params.startTime}&endTime=${params.endTime}`
  );
}

// 数据产品情况
export async function getProduct(params) {
  return request(
    `${COPNETPATH}t/monthReport/product?startTime=${params.startTime}&endTime=${params.endTime}`
  );
}
