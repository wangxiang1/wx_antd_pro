import request from '../utils/request';
import { toFormData } from '../utils/utils';

export async function query() {
  return request(`${COPNETPATH}/api/users`);
}

export async function queryCurrent() {
  return request(`${COPNETPATH}/user/currentUser`);
}
export async function queryTenant(parmas) {
  return request(`${COPNETPATH}/tenant/tenantInfo?tenantId=${parmas}`);
}

export async function userRoles() {
  return request(`${COPNETPATH}/user/currentUserRoles`);
}

export async function saveData(params) {
  return request(`${COPNETPATH}/register/private`, {
    method: 'POST',
    body: params,
  });
}
// 修改用户信息
export async function updateUser(params) {
  return request(`${COPNETPATH}/user/updateUser`, {
    method: 'POST',
    body: params,
  });
}
// 修改租户信息
export async function updateTenant(params) {
  return request(`${COPNETPATH}/tenant/updateTenant`, {
    method: 'POST',
    body: params,
  });
}
// 用户升级租户
export async function upTenant(params) {
  return request(`${COPNETPATH}/tenant/upTenant`, {
    method: 'POST',
    body: params,
  });
}
// 修改密码信息
export async function updatePassword(params) {
  return request(`${COPNETPATH}/user/updatePassword`, {
    method: 'POST',
    body: params,
  });
}

export async function saveTenantData(params) {
  const formParams = toFormData(params);
  return request(`${COPNETPATH}/register/tenant`, {
    method: 'POST',
    body: formParams,
  });
}

// 完善用户信息
export async function syncUserInfo(params) {
  return request(`${COPNETPATH}/cloud/updateUserInfo`, {
    method: 'POST',
    body: params,
  });
}

// 完善租户信息
export async function syncTenantInfo(params) {
  return request(`${COPNETPATH}/cloud/updateTenantInfo`, {
    method: 'POST',
    body: params,
  });
}

// 根据userId获取云门户用户信息
export async function getInfo(params) {
  return request(`${COPNETPATH}/cloud/getInfo?type=${params.type}&userId=${params.userId}`);
}

// 检测租户信息是否完善
export async function checkIsComplete(params) {
  return request(`${COPNETPATH}/cloud/checkIsComplete?loginId=${params.loginId}`);
}

// 检查用户入驻流程的审批进度
export async function checkOrderProcess() {
  return request(`${COPNETPATH}/cloud/checkOrderProcess`);
}

// 用户可查看已发起入驻的失败信息
export async function getFailEnterMessage() {
  return request(`${COPNETPATH}/order/getFailEnterMessage`);
}

// 用户可查看已发起入驻的流程详情
export async function getEnterProcessInfo() {
  return request(`${COPNETPATH}/order/getEnterProcessInfo`);
}

// 撤销已发起的流程
export async function cancelProcess(params) {
  return request(`${COPNETPATH}/order/cancelProcess`, {
    method: 'POST',
    body: toFormData(params),
  });
}

// 获取单位名称
export async function getTenantName1() {
  return request(`${COPNETPATH}/cloud/getTenantName`);
}

// 租户名称唯一性校验
export async function checkTenantName(params) {
  return request(`${COPNETPATH}/cloud/checkTenantName?tenantName=${params.tenantName}`);
}

// 根据组织编码获取其下级部门的组织信息
export async function getDepartmentLevelInfo(params) {
  return request(`${COPNETPATH}/cloud/getDepartmentLevelInfo?mdmOrgCode=${params.mdmOrgCode}`);
}

// 获取用户上级部门（成为租户)
export async function getDepartmentTreeInfo(params) {
  return request(`${COPNETPATH}/cloud/getDepartmentTreeInfo?loginId=${params.loginId}`);
}

// 根据组织编码获取租户信息
export async function getTenantByOrgCode(params) {
  return request(`${COPNETPATH}/cloud/getTenantByOrgCode?mdmOrgCode=${params.mdmOrgCode}`);
}

// 根据组织机构名称获取组织机构
export async function getOrgInfoByName(params) {
  return request(`${COPNETPATH}/operator/getOrgInfo?orgName=${encodeURIComponent(params.orgName)}`);
}

export async function getTenantData() {
  return request(`${COPNETPATH}/register/selectTenant`);
}
export async function getIndustry() {
  return request(`${COPNETPATH}/register/selectIndustry`);
}
export async function getNature() {
  return request(`${COPNETPATH}/register/selectNature`);
}
export async function getProvince() {
  return request(`${COPNETPATH}/register/selectProvince`);
}
export async function validateMobileTel(params) {
  return request(`${COPNETPATH}/register/valMobileTel?mobileTel=${Number(params)}`);
}
export async function validateTenantName(params) {
  return request(`${COPNETPATH}/register/valTenantName?tenantName=${params}`);
}
export async function validateTenantId(params) {
  return request(`${COPNETPATH}/register/valTenantId?tenantId=${params}`);
}
export async function validateEmail(params) {
  return request(`${COPNETPATH}/register/valEmail?email=${params}`);
}
export async function validateLoginId(params) {
  return request(`${COPNETPATH}/register/valLoginId?loginId=${params}`);
}

// 获取当前登录用户的角色
export async function listCurrentUserRoles() {
  return request(`${COPNETPATH}/sso/rest/v1/user/roles`);
}
