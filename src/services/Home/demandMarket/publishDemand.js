import request from '../../../utils/request';

export async function addDemand(params) {
  return request(`${COPNETPATH}/demand/addDemand`, {
    method: 'POST',
    body: params,
  });
}
