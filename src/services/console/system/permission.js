import { stringify } from 'qs';
import request from '../../../utils/request';

export async function getMenuTree() {
  return request(`${COPNETPATH}/menu/menuTree`);
  // return request('/menu/listMenu', {
  //   method: 'POST',
  //   body: { current: 1, pageSize: 100000 }
  // });
}

export async function getAllMenu() {
  return request(`${COPNETPATH}/menu/allMenu`);
}

export async function listRole(params) {
  return request(`${COPNETPATH}/role/listRole`, {
    method: 'POST',
    body: params,
  });
}

export async function empowerRole(params) {
  return request(`${COPNETPATH}/permission/empowerRole`, {
    method: 'POST',
    body: params,
  });
}

export async function rolePerms(params) {
  return request(`${COPNETPATH}/permission/rolePerms?${stringify(params)}`);
}

export async function empowerUser(params) {
  return request(`${COPNETPATH}/permission/empowerUser`, {
    method: 'POST',
    body: params,
  });
}
