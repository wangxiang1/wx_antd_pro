/**
 * Created by culture on 2018/8/28.
 */
import request from '../../../utils/request';

export async function getAllData(oid) {
  return request(`${COPNETPATH}/competency/getCompetencyById/` + oid.toString());
  // return {
  //   tabData,
  //   bodyData,
  //   success: true,
  // };
}
