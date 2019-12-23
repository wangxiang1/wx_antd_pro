import request from '../../../utils/request';

export async function listDemand(params) {
  return request(`${COPNETPATH}/demand/listDemand`, {
    method: 'POST',
    body: params,
  });
}

export async function judgeProposer(params) {
  return request(`${COPNETPATH}/demand/judgeProposer`, {
    method: 'POST',
    body: params,
  });
}

export async function addProposer(params) {
  return request(`${COPNETPATH}/demand/addProposer`, {
    method: 'POST',
    body: params,
  });
}
