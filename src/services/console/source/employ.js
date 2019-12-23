/**
 * Created by culture on 2018/7/30.
 */

import { stringify } from 'qs';
import request from '../../../utils/request';

export async function queryEmploy(params) {
  return request(`${COPNETPATH}/employ/listEmploy?${stringify(params)}`);
}
