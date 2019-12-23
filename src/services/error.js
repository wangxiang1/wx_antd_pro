import request from '../utils/request';

export async function query(code) {
  return request(`${COPNETPATH}/api/${code}`);
}
