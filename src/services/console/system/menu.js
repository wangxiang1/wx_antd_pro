import { stringify } from 'qs';
import request from '../../../utils/request';

export async function getTableData(params) {
  return request(`${COPNETPATH}/menu/listMenu`, {
    method: 'POST',
    body: params,
  });
}

export async function getMenuTreeData() {
  return request(`${COPNETPATH}/menu/menuTree`);
}

export async function addMenuData(params) {
  return request(`${COPNETPATH}/menu/addMenu`, {
    method: 'POST',
    body: params,
  });
}

export async function delMenuData(params) {
  return request(`${COPNETPATH}/menu/delById`, {
    method: 'POST',
    body: params,
  });
}

export async function updateMenu(params) {
  return request(`${COPNETPATH}/menu/updateMenu`, {
    method: 'POST',
    body: params,
  });
}

export async function checkResourceId(params) {
  return request(`${COPNETPATH}/menu/valResourceId?${stringify(params)}`);
}

export async function selectAppId() {
  return request(`${COPNETPATH}/appSystem/listAppSystem`);
}
