import request from '../../utils/request';
// import loadRequest from '../../utils/loadRequest';

// 购物车列表
export async function getProductCartList(params) {
  return request(`${BDSPATH}/data/get/productCartList?userId=${params.userId}`);
}

// 查询产品字段信息
export async function oneProductField(params) {
  return request(`${BDSPATH}/data/get/oneProductField?productId=${params.productId}`);
}

// export async function getMachinesExcel(params) {
//   return loadRequest(`${COPNETPATH}/excel/machines`, {
//     method: 'POST',
//     body: params,
//   });
// }

// 购物车列表批量删除
export async function deleteProductCartList(params) {
  return request(`${BDSPATH}/data/delete/productCartList`, {
    method: 'POST',
    body: params,
  });
}

// 购物车一键申请 / 申请单查询
export async function productCartList(params) {
  return request(`${BDSPATH}/data/apply/productCartList`, {
    method: 'POST',
    body: params,
  });
}

// 查询数据获取方式
export async function dataAccess(params) {
  return request(`${BDSPATH}/data/get/dataAccess?userId=${params.userId}`);
}
