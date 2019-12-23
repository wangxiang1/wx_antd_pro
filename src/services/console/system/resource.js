// import { stringify } from 'qs';
import request from '../../../utils/request';

export async function tabData() {
  return request(`${COPNETPATH}/resource/tabData`);
}
