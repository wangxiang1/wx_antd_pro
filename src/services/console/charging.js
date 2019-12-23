import request from '../../utils/request';

// 添加计费策略
export async function addStrategy(params) {
  return request(`${COPNETPATH}/billing/addStrategy`, {
    method: 'POST',
    body: params,
  });
}
// 修改计费策略
export async function updateStrategy(params) {
  return request(`${COPNETPATH}/billing/updateStrategy`, {
    method: 'POST',
    body: params,
  });
}

// 修改计费策略
export async function delStrategy(params) {
  return request(`${COPNETPATH}/billing/delStrategy`, {
    method: 'POST',
    body: params,
  });
}

// 查询计费策略
export async function getStrategys(params) {
  return request(`${COPNETPATH}/billing/strategys`, {
    method: 'POST',
    body: params,
  });
}

// 过滤套餐
export async function getExitStrategys() {
  return request(`${COPNETPATH}/billing/exitStrategys`);
}

// 获取所有api信息
export async function getApiData() {
  return request(
    `${APIPATH}/display/api-list/list.jag?action=getApiList&userName=admin&tenantId=system_tenant&tag=&query=&page=&size=&sortType=`
  );
}

// 获取所有数据产品
export async function listProductDatas() {
  return request(`${PRODUCTPATH}/bss/product/productList`, {
    method: 'POST',
    body: { pageindex: '', pagesize: '' },
  });
}
