import { stringify } from 'qs';
import request from '../../../utils/request';
import { toFormData } from '../../../utils/utils';
import loadRequest from '../../../utils/loadRequest';

export async function listTenant(params) {
  return request(`${COPNETPATH}/tenant/listTenant`, {
    method: 'POST',
    body: toFormData(params),
  });
}
export async function listTable(params) {
  return request(`${XBCONSOLEPATH}/api/productOrder/allOrders`, {
    method: 'POST',
    body: params,
  });
}
export async function registChart() {
  return request(`${COPNETPATH}/tenant/tenantRegistChart`);
}

export async function getTenant(params) {
  return request(`${COPNETPATH}/tenant/getTenant?tenantId=${params}`);
}

export async function addTenant(params) {
  return request(`${COPNETPATH}/tenant/addTenant`, {
    method: 'POST',
    body: params,
  });
}

export async function updateTenant(params) {
  return request(`${COPNETPATH}/tenant/updateTenant`, {
    method: 'POST',
    body: params,
  });
}

export async function delTenant(params) {
  return request(`${COPNETPATH}/tenant/delTenant`, {
    method: 'POST',
    body: params,
  });
}

export async function valTenantId(params) {
  return request(`${COPNETPATH}/tenant/valTenantId?${stringify(params)}`);
}

// 租户名称唯一性校验-编辑租户用
export async function checkTenantName(params) {
  return request(
    `${COPNETPATH}/tenant/checkTenantNameExceptItself?tenantId=${params.tenantId}&tenantName=${
      params.tenantName
    }`
  );
}

export async function valLoginId(params) {
  return request(`${COPNETPATH}/user/valLoginId?${stringify(params)}`);
}

export async function valEmail(params) {
  return request(`${COPNETPATH}/user/valEmail?${stringify(params)}`);
}

export async function valMobileTel(params) {
  return request(`${COPNETPATH}/user/valMobileTel?${stringify(params)}`);
}

export async function tenantInfo(params) {
  return request(`${COPNETPATH}/tenant/tenantInfo?${stringify(params)}`);
}

export async function listProvince() {
  return request(`${COPNETPATH}/province/listProvince`);
}

export async function listTenantIndustry() {
  return request(`${COPNETPATH}/industry/listTenantIndustry`);
}

export async function listTenantNature() {
  return request(`${COPNETPATH}/nature/listTenantNature`);
}

export async function lockTenant(params) {
  return request(`${COPNETPATH}/tenant/lockTenant`, {
    method: 'POST',
    body: params,
  });
}

export async function agreeTenant(params) {
  return request(`${COPNETPATH}/tenant/agreeTenant`, {
    method: 'POST',
    body: params,
  });
}

export async function industryPercent() {
  return request(`${COPNETPATH}/tenant/IndustryPercent`);
}

export async function naturePercent() {
  return request(`${COPNETPATH}/tenant/naturePercent`);
}

export async function tenantApprove() {
  return request(`${COPNETPATH}/tenant/tenantApprove`);
}
export async function tentantDataMonthMethod() {
  return request(`${COPNETPATH}/user/tenantMouthCount`);
}

export async function changeProject(params) {
  return request(`${APIIP}/paas/integration/service/project/${params.project}`, {
    method: 'GET',
    withCredentials: true,
    headers: { 'Content-Type': 'application/json' },
    NoHeader: true,
  });
}

export async function getAllProjectByTenantId(params) {
  return request(`${COPNETPATH}/project/getAllProjectByTenantId`, {
    method: 'POST',
    body: params,
  });
}

// 资源监控
export async function listClusters() {
  return request(`${RESOURCEMONITORPATH}/app/monitor/ajax/get/clusters?monitorType=server`);
}

// 紧急联系人
export async function getOperationInfo() {
  return request(`${COPNETPATH}/user/getOperationInfo`);
}

export async function tenantListFile(params) {
  return loadRequest(`${COPNETPATH}/excel/tentantInfoList`, {
    method: 'POST',
    body: params,
  });
}
