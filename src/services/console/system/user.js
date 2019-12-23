import { stringify } from 'qs';

import request from '../../../utils/request';
import loadRequest from '../../../utils/loadRequest';

export async function listUser(params) {
  return request(`${COPNETPATH}/user/listUser`, {
    method: 'POST',
    body: params,
  });
}
export async function listUserByTenant() {
  return request(`${COPNETPATH}/user/listUserByTenant`, {
    method: 'POST',
  });
}

export async function userInfo(params) {
  return request(`${COPNETPATH}/user/usertInfo?${stringify(params)}`);
}

export async function editUserInfo(params) {
  return request(`${COPNETPATH}/user/usertInfo?${stringify(params)}`);
}

export async function addUser(params) {
  return request(`${COPNETPATH}/user/addUser`, {
    method: 'POST',
    body: params,
  });
}

export async function updateUser(params) {
  return request(`${COPNETPATH}/user/updateUser`, {
    method: 'POST',
    body: params,
  });
}

export async function updatePassword(params) {
  return request(`${COPNETPATH}/user/updatePassword`, {
    method: 'POST',
    body: params,
  });
}

export async function delUser(params) {
  return request(`${COPNETPATH}/user/delUser`, {
    method: 'POST',
    body: params,
  });
}

export async function lockUser(params) {
  return request(`${COPNETPATH}/user/lockUser`, {
    method: 'POST',
    body: params,
  });
}

export async function lockUser1(params) {
  return request(`${COPNETPATH}/user/unLockAccount?loginId=${params.loginId}`);
}

export async function agreeUser(params) {
  return request(`${COPNETPATH}/user/agreeUser`, {
    method: 'POST',
    body: params,
  });
}

export async function listRole(params) {
  return request(`${COPNETPATH}/role/listRole`, {
    method: 'POST',
    body: params,
  });
}

export async function valLoginId(params) {
  return request(`${COPNETPATH}/user/valLoginId?${stringify(params)}`);
}
export async function valMobileTel(params) {
  return request(`${COPNETPATH}/user/valMobileTel?${stringify(params)}`);
}

export async function valEmail(params) {
  return request(`${COPNETPATH}/user/valEmail?${stringify(params)}`);
}

export async function createTypePercent(params) {
  return request(`${COPNETPATH}/user/createTypePercent?${stringify(params)}`);
}
export async function activeNumber(params) {
  return request(`${COPNETPATH}/user/activeNumber?${stringify(params)}`);
}
export async function userRoles(params) {
  return request(`${COPNETPATH}/user/userRoles?${stringify(params)}`);
}

export async function userListFile(params) {
  return loadRequest(`${COPNETPATH}/excel/userList`, {
    method: 'POST',
    body: params,
  });
}

// 获取租户下的用户（不包括自己）
export async function getUsersOfTenant(params) {
  return request(`${COPNETPATH}/tenant/getUsersOfTenant?tenantId=${params.tenantId}`);
}

// 租户转移
export async function transferTenantOrder(params) {
  return request(
    `${COPNETPATH}/tenant/transferTenantOrder?tenantId=${params.tenantId}&userId=${
      params.userId
    }&message=${params.message}`
  );
}
// 获取租户转移的状态（注：只用于租户）
export async function getTenantTransferStatus(params) {
  return request(`${COPNETPATH}/tenant/getTenantTransferStatus?tenantId=${params.tenantId}`);
}
