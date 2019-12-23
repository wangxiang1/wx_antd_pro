/* eslint-disable no-unused-vars */
import request from '../../utils/request';
import { getTenantId, toFormData } from '../../utils/utils';

export async function getProductListS() {
  return request(`${COPNETPATH}/paas/view/productNameList`);
}

export async function getProductListIndex() {
  return request(`${COPNETPATH}/paas/view/productNameListIndex`);
}

export async function getDocument(parmas) {
  return request(`${COPNETPATH}/paas/view/getDocument?serviceCode=${parmas}`);
}

export async function getDataServiceDocuments(parmas) {
  return request(`${COPNETPATH}/dataService/view/getDataServiceDocuments`);
}

export async function productIntroduction(parmas) {
  return request(`${COPNETPATH}/paas/view/getIntroduction?serviceCode=${parmas}`);
}

export async function instanceNameAvailable(params) {
  const encodeStr = encodeURI(params);
  return request(`${COPNETPATH}/instance/instanceNameAvailable?serviceName=${encodeStr}`);
}

export async function getProductList1() {
  return {
    data: {
      '逻辑多租大数据平台(CDH)': {
        name: '逻辑多租大数据平台(CDH)',
        from: '0',
        id: 1,
        list: [
          {
            describe: '',
            id: 2,
            introduction: '',
            name: 'Hbase',
            planId: null,
            typeId: 1,
          },
          { describe: '', id: 5, introduction: '', name: 'Spark', planId: null, typeId: 1 },
          {
            describe: '',
            id: 6,
            introduction: '',
            name: 'Storm',
            planId: null,
            typeId: 1,
          },
          { describe: '', id: 7, introduction: '', name: 'Hive', planId: null, typeId: 1 },
          {
            describe: '',
            id: 10,
            introduction: '',
            name: 'Hadoop',
            planId: null,
            typeId: 1,
          },
          {
            describe: '',
            id: 11,
            introduction: '',
            name: 'Flume',
            planId: null,
            typeId: 1,
          },
          { describe: '', id: 12, introduction: '', name: 'Impala', planId: null, typeId: 1 },
        ],
      },
      数据集成工具: {
        name: '数据集成工具',
        from: '0',
        id: 3,
        list: [
          {
            describe: '',
            id: 9,
            introduction: '',
            name: '云化ETL',
            planId: null,
            typeId: 3,
          },
          { describe: '', id: 13, introduction: '', name: '数据质量', planId: null, typeId: 3 },
          {
            describe: '',
            id: 14,
            introduction: '',
            name: '元数据',
            planId: null,
            typeId: 3,
          },
        ],
      },
      云数据库与网络中间件: {
        name: '云数据库与网络中间件',
        from: '1',
        id: 'cateCode1',
        list: [
          { name: 'Redis', id: '764ad650-e6cf-4855-9ab5-51820afa3515' },
          {
            name: 'Mysql',
            id: '8780d398-a010-4696-bb0d-78ea6511fa95',
          },
        ],
      },
      应用服务: {
        name: '应用服务',
        from: '0',
        id: 2,
        list: [{ describe: '', id: 15, introduction: '', name: '容器云', planId: null, typeId: 2 }],
      },
      数据服务: {
        name: '数据服务',
        from: '1',
        id: 'cateCode4',
        list: [{ name: '数据共享分析', id: 'f7fcea02f91e4103bdab7f3ecd2eaf39' }],
      },
      '容器化大数据平台(TDH)': {
        name: '容器化大数据平台(TDH)',
        from: '1',
        id: 'cateCode2',
        list: [
          { name: '数据挖掘', id: '8098b0f79c2b46e4a06ad98c9da7da85' },
          {
            name: '数据仓库',
            id: '92d801f0481b4b4ebcf26b7a752fa3c7',
          },
          { name: '实时计算', id: 'b3f1706834c04124a790f620723ef8b2' },
          {
            name: '信息检索',
            id: 'b4d8930390684794be41c05a32f69785',
          },
          { name: '数据集市', id: 'c1237d3ca7164d49adc3e4f6384d7847' },
        ],
      },
    },
    success: true,
    message: '操作成功',
  };
}
export async function getDataServiceProductList(params) {
  return request(`${COPNETPATH}/dataService/view/productList`, {
    method: 'POST',
    body: params,
  });
}
// 获取产品类型
export async function productTypes(params) {
  return request(`${COPNETPATH}/dataService/view/productTypes`, {
    method: 'POST',
    body: params,
  });
}
export async function getNumberByUserId(params) {
  return request(
    `${COPNETPATH}/dataService/getProductCountInCartByUserId?userId=${params.userId}`,
    {
      method: 'GET',
    }
  );
}
export async function getProductDetail(params) {
  return request(`${COPNETPATH}/dataService/view/productInfo?productId=${params.productId}`, {
    method: 'GET',
  });
}
export async function addProductToCart(params) {
  return request(`${COPNETPATH}/dataService/addProductToCart`, {
    method: 'POST',
    body: toFormData(params),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
}
export async function getDataServiceProductList1() {
  return {
    data: [
      {
        oid: '88125239',
        name: '互联网行为标签',
        remark: '准确校验姓名与身份证号是否一致',
        scribe: '0次',
        createTime: '2018-9-13 19:24:20',
      },
      {
        oid: '88125145',
        name: 'URL产品码表',
        remark: '快速精准从图片中定位名片区域...',
        scribe: '0次',
        createTime: '2018-9-13 18:57:42',
      },
      {
        oid: '88125155',
        name: '用户离线轨迹',
        remark: '快速精准从图片中定位名片区域...',
        scribe: '0次',
        createTime: '2018-9-13 18:57:42',
      },
      {
        oid: '88125145',
        name: 'BSS短信详单(日)',
        remark: '快速精准从图片中定位名片区域...',
        scribe: '0次',
        createTime: '2018-9-13 18:57:42',
      },
      {
        oid: '88125145',
        name: '4G用户欠费表',
        remark: '快速精准从图片中定位名片区域...',
        scribe: '0次',
        createTime: '2018-9-13 18:57:42',
      },
      {
        oid: '88125145',
        name: 'BSS语音详单(日)',
        remark: '快速精准从图片中定位名片区域...',
        scribe: '0次',
        createTime: '2018-9-13 18:57:42',
      },
      {
        oid: '88125145',
        name: '订单基础表(日)',
        remark: '快速精准从图片中定位名片区域...',
        scribe: '0次',
        createTime: '2018-9-13 18:57:42',
      },
      {
        oid: '88125145',
        name: '宽带用户挖掘',
        remark: '快速精准从图片中定位名片区域...',
        scribe: '0次',
        createTime: '2018-9-13 18:57:42',
      },
    ],
    returnStatus: 200,
    success: true / false,
    message: '操作成功/操作失败',
  };
}

export async function orderProductS(params) {
  return request(`${COPNETPATH}/paas/createProduct`, {
    method: 'POST',
    body: params,
  });
  // return {success:true,message:'666',data:{instance_id:'6666'}};
}

export async function queryProductByIdS(parmas) {
  return request(
    `${COPNETPATH}/paas/productInfo?productId=${parmas.productId}&serviceId=${parmas.serviceId}`
  );
}

export async function updateProduct(parmas) {
  return request(`${COPNETPATH}/paas/updateProduct`, {
    method: 'PATCH',
    body: parmas,
  });
}

export async function searchStatusByInstanceIdS(parmas) {
  return request(
    `${COPNETPATH}/order/getInstanceStatus?instanceId=${parmas}&tenantId=${getTenantId()}`
  );
  // return {"data":{"reason":null,"binding_info":{"mysql-a1905zsp55-master-1":"{\"inside_k8s\":{\"password\":\"root123\",\"port\":\"3306\",\"role\":\"master-1\",\"svcname\":\"mysql-a1905zsp55-master-1\",\"username\":\"root\"},\"outside_k8s\":{\"host\":\"10.162.162.40\",\"password\":\"root123\",\"port\":\"30124\",\"role\":\"master-1\",\"username\":\"root\"}}","mysql-a1905zsp55-master-2":"{\"inside_k8s\":{\"password\":\"root123\",\"port\":\"3306\",\"role\":\"master-2\",\"svcname\":\"mysql-a1905zsp55-master-2\",\"username\":\"root\"},\"outside_k8s\":{\"host\":\"10.162.162.36\",\"password\":\"root123\",\"port\":\"31614\",\"role\":\"master-2\",\"username\":\"root\"}}"},"message":null,"status":0.0,"binding_id":"loeqfucn20181226"},"success":true,"message":"操作成功"};
}
