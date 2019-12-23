/**
 * Created by culture on 2018/7/31.
 */
import { stringify } from 'qs';
import request from '../../../utils/request';

export async function queryTable(params) {
  return request(`${COPNETPATH}/detail/list?${stringify(params)}`);
}
