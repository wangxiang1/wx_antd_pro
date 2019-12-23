/**
 * Created by culture on 2018/7/20.
 */
import { stringify } from 'qs';
import request from '../../../utils/request';
import { toFormData } from '../../../utils/utils';

export async function valRoleId(params) {
  return request(`${COPNETPATH}/role/valRoleId?${stringify(params)}`);
}

export async function getRoleByMenuId(params) {
  const formParams = toFormData(params);
  return request(`${COPNETPATH}/role/listRole`, {
    method: 'POST',
    body: formParams,
  });
}

export async function removeRole(params) {
  return request(`${COPNETPATH}/role/delRole`, {
    method: 'POST',
    body: params,
  });
}

export async function addRole(params) {
  return request(`${COPNETPATH}/role/addRole`, {
    method: 'POST',
    body: params,
  });
}

export async function updateRole(params) {
  return request(`${COPNETPATH}/role/updateRole`, {
    method: 'POST',
    body: params,
  });
}

export async function getTransfer(params) {
  return request(`${COPNETPATH}/permission/rolePerms?${stringify(params)}`);
}

export async function getHasUsers(params) {
  return request(`${COPNETPATH}/role/listUserId?${stringify(params)}`);
}

export async function getAllUsers(params) {
  const formParams = toFormData(params);
  return request(`${COPNETPATH}/user/listUser`, {
    method: 'POST',
    body: formParams,
  });
}

export async function editHasUsers(params) {
  return request(`${COPNETPATH}/role/empowerRole`, {
    method: 'POST',
    body: params,
  });
}
