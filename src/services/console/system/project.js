/* eslint-disable no-unused-vars */
import { stringify } from 'qs';
import request from '../../../utils/request';
import { toFormData } from '../../../utils/utils';
import loadRequest from '../../../utils/loadRequest';

export async function queryALlProject(params) {
  return request(`${COPNETPATH}/project/getProjectByTenantId`, {
    method: 'POST',
    body: params,
  });
  // return {
  //   data: [
  //     {
  //       cpuLimit: 201,
  //       createDate: 1543561372000,
  //       description: '这是项目一',
  //       endDate: 1546066978000,
  //       headCode: '',
  //       manager: '',
  //       memoryLimit: 400,
  //       name: '项目1',
  //       projectId: 1011,
  //       startDate: 1544252575000,
  //       status: 1,
  //       storageLimit: 10000,
  //       tenantId: 'lzy',
  //       type: '',
  //       userId: 110,
  //     },
  //     {
  //       cpuLimit: 2001,
  //       createDate: 1543561372000,
  //       description: '这是项目一',
  //       endDate: 1546066978000,
  //       headCode: '',
  //       manager: '',
  //       memoryLimit: 400,
  //       name: '项目2',
  //       projectId: 1012,
  //       startDate: 1544252575000,
  //       status: 1,
  //       storageLimit: 10000,
  //       tenantId: 'lzy',
  //       type: '',
  //       userId: 110,
  //     },
  //     {
  //       cpuLimit: 200,
  //       createDate: 1543561372000,
  //       description: '这是项目一',
  //       endDate: 1546066978000,
  //       headCode: '',
  //       manager: '',
  //       memoryLimit: 400,
  //       name: '项目1',
  //       projectId: 1013,
  //       startDate: 1544252575000,
  //       status: 1,
  //       storageLimit: 10000,
  //       tenantId: 'lzy',
  //       type: '',
  //       userId: 110,
  //     },
  //   ],
  //   success: true,
  //   message: '操作成功',
  // };
}

export async function queryUserProject(params) {
  return request(`${COPNETPATH}/project/getProjectByUserId`, {
    method: 'post',
    body: params,
  });
}

export async function createProjectS(params) {
  return request(`${COPNETPATH}/project/createProject`, {
    method: 'post',
    body: params,
  });
}

export async function updateProject(params) {
  return request(`${COPNETPATH}/project/updateProject`, {
    method: 'PATCH',
    body: params,
  });
}

export async function deleteProjectS(params) {
  return request(`${COPNETPATH}/project/deleteProjectById`, {
    method: 'post',
    body: toFormData(params),
  });
}
export async function productTypeList() {
  return request(`${COPNETPATH}/paas/view/productTypeList`);
}
export async function insertProduct(params) {
  return request(`${COPNETPATH}/paas/insertProduct`, {
    method: 'post',
    body: toFormData(params),
  });
}
export async function inLineProject(params) {
  return request(`${COPNETPATH}/project/ProjectOnline`, {
    method: 'post',
    body: toFormData(params),
  });
}
export async function outLineProject(params) {
  return request(`${COPNETPATH}/project/ProjectOffline`, {
    method: 'post',
    body: toFormData(params),
  });
}
export async function batchProject(params) {
  // console.log('**:', params);
  return request(`${COPNETPATH}/project/batchOperate`, {
    method: 'post',
    body: params,
  });
}
export async function queryProjectByParams(params) {
  return request(`${COPNETPATH}/project/searchProject`, {
    method: 'post',
    body: toFormData(params),
  });
}

export async function listProjectByRole(params) {
  return request(`${COPNETPATH}/project/listProjectByRole`, {
    method: 'POST',
    body: toFormData(params),
  });
}
export async function getProjectByProjectId(param) {
  return request(`${COPNETPATH}/project/getProjectByProjectId`, {
    method: 'post',
    body: toFormData(param),
  });
}

export async function projectResource(params) {
  return request(`${COPNETPATH}/project/projectResource?projectId=${params}`);
}

export async function tenantResourceInfo(params) {
  return request(`${COPNETPATH}/tenant/tenantResourceInfo?tenantId=${params}`);
}

export async function createMoreProduct(params) {
  return request(`${COPNETPATH}/paas/createMoreProduct`, {
    method: 'POST',
    body: params,
    // body: toFormData(params),
  });
}
export async function traceObjectOrder(params) {
  return request(`${COPNETPATH}/order/traceObjectOrder?objectId=${params}`);
}

export async function valProjectName(params) {
  const encodeStr = encodeURI(params);
  return request(`${COPNETPATH}/project/valProjectName?name=${encodeStr}`);
}

export async function getAllProjectByRole() {
  return request(`${COPNETPATH}/project/listProjectByRole`, {
    method: 'POST',
    body: toFormData({
      current: 1,
      pageSize: 100000,
      status: 0,
    }),
  });
}

export async function listProject() {
  return request(`${COPNETPATH}/project/listProject`, {
    method: 'POST',
  });
}

export async function getProjectStatus() {
  return request(`${COPNETPATH}/project/getProjectStatus`);
}

export async function projectListFile(params) {
  return loadRequest(`${COPNETPATH}/excel/projectList`, {
    method: 'POST',
    body: params,
  });
}

// 获取项目成员（实际上返回该项目对应租户下的有效用户）
export async function getProjectMember(params) {
  return request(`${COPNETPATH}/project/getProjectMember?projectId=${params.projectId}`);
}

// 获取项目管理员候选人
export async function getProjectCandidate(params) {
  return request(`${COPNETPATH}/project/getProjectCandidate?projectId=${params.projectId}`);
}

// 获取用户对应租户下的用户
export async function getUserOfTenant(params) {
  return request(`${COPNETPATH}/project/getUserOfTenant?loginId=${params.loginId}`);
}
