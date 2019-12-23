import request from '../../utils/request';
import loadRequest from '../../utils/loadRequest';

// 查询服务器详细信息（按cpu分配量从大到小排序）
export async function getMachinesList(params) {
  return request(`${COPNETPATH}/machines/getList`, {
    method: 'POST',
    body: params,
  });
}

export async function getMachinesCode() {
  return request(`${COPNETPATH}/machines/code`);
}

export async function getMachinesExcel(params) {
  return loadRequest(`${COPNETPATH}/excel/machines`, {
    method: 'POST',
    body: params,
  });
}

export async function addMachines(params) {
  return request(`${COPNETPATH}/machines/addMachines`, {
    method: 'POST',
    body: params,
  });
}

export async function editMachines(params) {
  return request(`${COPNETPATH}/machines/updateMachines`, {
    method: 'POST',
    body: params,
  });
}

export async function deleteMachines(params) {
  return request(`${COPNETPATH}/machines/deleteMachines`, {
    method: 'POST',
    body: params,
  });
}
