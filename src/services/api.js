import { stringify } from 'qs';
import request from '../utils/request';
import { toFormData } from '../utils/utils';

export async function queryProjectNotice() {
  return request(`${COPNETPATH}/api/project/notice`);
}

export async function queryActivities() {
  return request(`${COPNETPATH}/api/activities`);
}

export async function queryRule(params) {
  return request(`${COPNETPATH}/api/rule?${stringify(params)}`);
}

export async function removeRule(params) {
  return request(`${COPNETPATH}/api/rule`, {
    method: 'POST',
    body: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params) {
  return request(`${COPNETPATH}/api/rule`, {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}

export async function queryLog(params) {
  return request(`${COPNETPATH}/log/reqLogs`, {
    method: 'POST',
    body: params,
  });
  // return request(`/log/reqLogs?${stringify(params)}`);
  // return request(`/api/log?${stringify(params)}`);
}

export async function queryApiLog(params) {
  return request(`${COPNETPATH}/api/log?${stringify(params)}`);
}

export async function queryUserLoginInfo(params) {
  return request(`${COPNETPATH}/log/userloginlog`, {
    method: 'POST',
    body: params,
  });
  // return request(`/log/userloginlog?${stringify(params)}`);
  // return request(`/api/loginInfo?${stringify(params)}`);
}

export async function removeLog(params) {
  return request(`${COPNETPATH}/api/log`, {
    method: 'POST',
    body: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addLog(params) {
  return request(`${COPNETPATH}/api/log`, {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}

export async function queryCharactar(params) {
  return request(`${COPNETPATH}/api/charactar?${stringify(params)}`);
}

export async function removeCharactar(params) {
  return request(`${COPNETPATH}/api/charactar`, {
    method: 'POST',
    body: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addCharactar(params) {
  return request(`${COPNETPATH}/api/charactar`, {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateCharactar(params) {
  return request(`${COPNETPATH}/api/charactar`, {
    method: 'POST',
    body: {
      ...params,
      method: 'update',
    },
  });
}

export async function fakeSubmitForm(params) {
  return request(`${COPNETPATH}/api/forms`, {
    method: 'POST',
    body: params,
  });
}

export async function fakeChartData() {
  return request(`${COPNETPATH}/api/fake_chart_data`);
}

export async function getOverview() {
  return request(`/api/get_overview_data`);
}

export async function queryTags() {
  return request(`${COPNETPATH}/api/tags`);
}

export async function queryBasicProfile() {
  return request(`${COPNETPATH}/api/profile/basic`);
}

export async function queryAdvancedProfile() {
  return request(`${COPNETPATH}/api/profile/advanced`);
}

export async function queryFakeList(params) {
  return request(`${COPNETPATH}/api/fake_list?${stringify(params)}`);
}

export async function fakeAccountLogin(params) {
  return request(`${COPNETPATH}/login`, {
    method: 'POST',
    body: params,
  });
}

export async function fakeAccountLogout() {
  return request(`${COPNETPATH}/logout`, {
    method: 'GET',
  });
}

export async function fakeRegister(params) {
  return request(`${COPNETPATH}/api/register`, {
    method: 'POST',
    body: params,
  });
}

export async function queryNotices() {
  return request(`${COPNETPATH}/api/notices`);
}

export async function getOrderApprovalDetails() {
  return request(`${COPNETPATH}/api/svcorders/svcOrderId`);
}

export async function addUserMenuRole(params) {
  return request(`${COPNETPATH}/role/addUserMenuRole`, {
    method: 'POST',
    body: params,
  });
}

export async function addCase(params) {
  return request(`${COPNETPATH}/offlineCase/addCase`, {
    method: 'POST',
    body: params,
  });
}

export async function delCase(params) {
  return request(`${COPNETPATH}/offlineCase/delCase?orderId=${params.orderId}`, {
    method: 'DELETE',
  });
}

export async function updateCase(params) {
  return request(`${COPNETPATH}/offlineCase/updateCase`, {
    method: 'PUT',
    body: params,
  });
}

export async function approveCase(params) {
  return request(`${COPNETPATH}/offlineCase/approveCase?orderId=${params.orderId}`, {
    method: 'PUT',
  });
}

export async function showCases(params) {
  const formParams = toFormData(params);
  return request(`${COPNETPATH}/offlineCase/showCases`, {
    method: 'POST',
    body: formParams,
  });
}

export async function getParticipantDemandInfo(params) {
  const formParams = toFormData(params);
  return request(`${COPNETPATH}/demand/getParticipantDemandInfo`, {
    method: 'POST',
    body: formParams,
  });
}

export async function demands(params) {
  const formParams = toFormData(params);
  return request(`${COPNETPATH}/demand/demands`, {
    method: 'POST',
    body: formParams,
  });
}

export async function getDemands(params) {
  const formParams = toFormData(params);
  return request(`${COPNETPATH}/demand/listDemand`, {
    method: 'POST',
    body: formParams,
  });
}

export async function delDemands(params) {
  return request(`${COPNETPATH}/demand/deleteDemand?demandId=${params.demandId}`, {
    method: 'GET',
  });
}

export async function updateDemandStatus(params) {
  return request(
    `${COPNETPATH}/demand/updateDemandStatus?demandId=${params.demandId}&demandStatus=${
      params.demandStatus
    }`,
    {
      method: 'GET',
    }
  );
}

export async function updateDemand(params) {
  return request(`${COPNETPATH}/demand/updateDemand`, {
    method: 'POST',
    body: params,
  });
}

export async function updateViewCount(params) {
  return request(`${COPNETPATH}/demand/updateViewCount?demandId=${params.demandId}`, {
    method: 'GET',
  });
}
