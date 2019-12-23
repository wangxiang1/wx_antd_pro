/**
 * Created by culture on 2018/8/16.
 */

import request from '../../utils/request';

// 获取所有产品信息（mysql等资源、数据产品、api）
export async function getAllData() {
  return request(`${COPNETPATH}/competency/getCompetency`);
}

// 获取所有API信息
export async function getApiData(params) {
  return request(
    `${APIPATH}/display/api-list/list.jag?action=getApiList&userName=${params.loginId}&tenantId=${
      params.tenantId
    }&tag=&query=&page=&size=&sortType=`
  );
}

// 获取所有API标签
export async function getApiTags(params) {
  return request(
    `${APIPATH}/display/tag-list/list.jag?action=getAllTags&userName=${params.loginId}&tenantId=${
      params.tenantId
    }`
  );
}

// 获取所有数据产品
export async function getProductsData() {
  return request(`${PRODUCTPATH}/bss/product/productList`, {
    method: 'POST',
    body: { pageindex: '', pagesize: '', productStatus: '3' },
  });
}

// 获取所有计费策略
export async function listStrategys(params) {
  return request(`${COPNETPATH}/billing/strategys`, {
    method: 'POST',
    body: params,
  });
}
