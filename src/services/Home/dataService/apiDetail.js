/**
 * Created by culture on 2018/8/28.
 */
import { stringify } from 'qs';
import request from '../../../utils/request';
import requestApi from '../../../utils/requestApi';

export async function getAllData(oid) {
  return request(`${COPNETPATH}/competency/getCompetencyById/` + oid.toString());
}

// export async function getProData(params) {
//   return request(`${XBCONSOLEPATH}/api/productPackage/productPackagesApi/${params}/testbonc`);
// }

// export async function getPackageData(params) {
//   return request(`${XBCONSOLEPATH}/api/productPackage/singlePackageApi/${params}/testbonc`);
// }

// export async function applyAPI(params) {
//   return request(`${XBCONSOLEPATH}/api/productOrder/apply`, {
//     method: 'POST',
//     body: params,
//   });
// }

export async function getApiByName(params) {
  return request(
    `${APIPATH}/api/api-info/ajax/api-info-api.jag?action=getApiInfoPageData&${params}`
  );
}

export async function testApi(params) {
  if (params.reqType.toLowerCase() === 'get') {
    return requestApi(`${params.baseUrl}?${stringify(JSON.parse(params.reqParam))}`);
  }
  if (!params.paramIsJSON) {
    return requestApi(`${params.baseUrl}`, {
      method: params.reqType,
      body: params.reqParam,
    });
  } else {
    return requestApi(`${params.baseUrl}?${stringify(JSON.parse(params.reqParam))}`, {
      method: params.reqType,
    });
  }
}
