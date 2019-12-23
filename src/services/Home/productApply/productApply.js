/**
 * Created by culture on 2018/8/29.
 */

import request from '../../../utils/request';

export async function getData(oid) {
  return request(`${COPNETPATH}/competency/getProductAttr/` + oid.toString());
  // return {
  //   tabData,
  //   bodyData,
  //   success: true,
  // };
}

export async function addCart(params) {
  // 未登录： {loginInfo: false}  登录： {loginInfo: true}
  let applyInfo = [];
  if (params.loginInfo) {
    applyInfo = JSON.parse(params.productInfo);
  } else {
    const { loginId, email, mobile } = params;

    let orderItems = localStorage.getItem('applyInfo');
    orderItems = JSON.parse(orderItems);
    orderItems.forEach(orderItem => {
      let { orderJson } = orderItem;
      if (typeof orderJson === 'string') {
        orderJson = JSON.parse(orderJson);
      }
      if ('orderBasicAttrOrm' in orderJson) {
        const { orderBasicAttrOrm } = orderJson;
        const orderBasicAttrOrmNew = [];
        for (let i = 0; i < orderBasicAttrOrm.length; i++) {
          if (orderBasicAttrOrm[i].proCode === 'loginId') {
            orderBasicAttrOrm[i].proValue = loginId;
          }
          if (orderBasicAttrOrm[i].proCode === 'email') {
            orderBasicAttrOrm[i].proValue = email;
          }
          if (orderBasicAttrOrm[i].proCode === 'mobile') {
            orderBasicAttrOrm[i].proValue = mobile;
          }
          // if (orderBasicAttrOrm[i].proCode === 'serviceName') {
          //   orderBasicAttrOrm[i].proValue += getUUUID();
          // }
          orderBasicAttrOrmNew.push(orderBasicAttrOrm[i]);
        }

        orderJson = {
          ...orderJson,
          orderBasicAttrOrm: orderBasicAttrOrmNew,
        };
      }

      if ('orderRelyOnBasicAttrOrm' in orderJson) {
        const { orderRelyOnBasicAttrOrm, productId } = orderJson;
        const attrOrm = orderRelyOnBasicAttrOrm[productId];
        let orderRelyOnBasicAttrOrmNew = {};
        const attrOrmNew = [];
        for (let i = 0; i < attrOrm.length; i++) {
          if (attrOrm[i].proCode === 'loginId') {
            attrOrm[i].proValue = loginId;
          }
          if (attrOrm[i].proCode === 'email') {
            attrOrm[i].proValue = email;
          }
          if (attrOrm[i].proCode === 'mobile') {
            attrOrm[i].proValue = mobile;
          }
          // if (orderBasicAttrOrm[i].proCode === 'serviceName') {
          //   orderBasicAttrOrm[i].proValue += getUUUID();
          // }
          attrOrmNew.push(attrOrm[i]);
        }
        orderRelyOnBasicAttrOrmNew = { ...orderRelyOnBasicAttrOrm };
        orderRelyOnBasicAttrOrmNew[productId] = attrOrmNew;
        orderJson = {
          ...orderJson,
          orderRelyOnBasicAttrOrm: orderRelyOnBasicAttrOrmNew,
        };
      }
      applyInfo.push(orderJson);
    });
  }
  // const applyInfo = params.loginInfo ? params.productInfo : localStorage.getItem('applyInfo');
  return request(`${COPNETPATH}/cart/addCart`, {
    method: 'POST',
    body: applyInfo,
  });
}

export async function cartCount() {
  return request(`${COPNETPATH}/cart/cartCount`);
}

export async function charge(params) {
  return request(`${COPNETPATH}/billing/valuation`, {
    method: 'POST',
    body: params,
  });
}

export async function listValuation(params) {
  return request(`${COPNETPATH}/billing/valuation`, {
    method: 'POST',
    body: params,
  });
}

export async function addOrder(params) {
  return request(`${COPNETPATH}/billing/order/addOrder`, {
    method: 'POST',
    body: params,
  });
}
