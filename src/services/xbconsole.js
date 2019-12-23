import request from '../utils/request';
import { isLogin, toFormData } from '../utils/utils';
import loadRequest from '../utils/loadRequest';

// 服务接口
export async function getAllProducts(params) {
  return request(`${XBCONSOLEPATH}/api/product/products`, {
    method: 'POST',
    body: params,
  });
}

export async function getProData(params) {
  if (isLogin()) {
    let currentUser = {};
    if (localStorage.getItem('currentUser')) {
      currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    const { tenantId } = currentUser;

    return request(`${XBCONSOLEPATH}/api/productPackage/productPackagesApi/${params}/${tenantId}`);
  } else {
    return request(`${XBCONSOLEPATH}/api/productPackage/productPackagesApi/${params}/systenant`);
  }
}

export async function getPackageData(params) {
  if (isLogin()) {
    let currentUser = {};
    if (localStorage.getItem('currentUser')) {
      currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    const { tenantId } = currentUser;

    return request(`${XBCONSOLEPATH}/api/productPackage/singlePackageApi/${params}/${tenantId}`);
  } else {
    return request(`${XBCONSOLEPATH}/api/productPackage/singlePackageApi/${params}/systenant`);
  }
}

export async function applyProduct(params) {
  return request(`${XBCONSOLEPATH}/api/productOrder/apply`, {
    method: 'POST',
    body: params,
  });
}

// 服务分类接口
export async function getCategoryInfos(params) {
  return request(`${XBCONSOLEPATH}/api/productType/categoryInfos`, {
    method: 'POST',
    body: params,
  });
}

// 服务实例
export async function getCaseInfoByProduct(params) {
  return request(`${XBCONSOLEPATH}/api/productCase/caseInfoByProduct`, {
    method: 'POST',
    body: params,
  });
}

export async function getSingleCase(params) {
  return request(`${XBCONSOLEPATH}/api/productCase/singleCase/${params}`);
}

export async function updateCase(params) {
  return request(`${XBCONSOLEPATH}/api/productCase/updateCase`, {
    method: 'POST',
    body: params,
  });
}

export async function getNodeByCase(params) {
  return request(`${XBCONSOLEPATH}/api/productNode/nodesByCase`, {
    method: 'POST',
    body: params,
  });
}

// 订单接口
export async function getOrders(params) {
  return request(`${XBCONSOLEPATH}/api/productOrder/allOrders`, {
    method: 'POST',
    body: params,
  });
}

export async function getPways(params) {
  return request(`${XBCONSOLEPATH}/api/porderWays/allPorderWays`, {
    method: 'POST',
    body: params,
  });
}

export async function getOrderDetails(params) {
  return request(`${XBCONSOLEPATH}/api/productOrder/singleOrder/${params.orderId}`);
}

// 工单接口
export async function getUnapprovaledOrder(params) {
  return request(`${XBCONSOLEPATH}/api/bpmOrderProcess/pendingTask`, {
    method: 'POST',
    body: params,
  });
}

export async function getApprovaledOrder(params) {
  return request(`${XBCONSOLEPATH}/api/bpmOrderProcess/finishTask`, {
    method: 'POST',
    body: params,
  });
}

export async function orderApproval(params) {
  return request(`${XBCONSOLEPATH}/api/bpmOrderProcess/${params.orderId}/approval`, {
    method: 'POST',
    body: params,
  });
}

export async function getHisApproval(params) {
  return request(`${XBCONSOLEPATH}/api/bpmOrderProcess/${params.orderId}/hisApproval`);
}

// 控制台用户--工单提醒
export async function getWorkOrder() {
  return request(`${COPNETPATH}/order/getAllOrderStatus`);
}

// 控制台用户--资源分配情况
export async function getResource(params) {
  return request(`${COPNETPATH}/order/getUserResourceInfoByProjectId?projectId=${params}`);
}

// 用户id查询项目列表信息
export async function getProjectList(params) {
  return request(`${COPNETPATH}/project/getProjectByUserId`, {
    method: 'POST',
    body: params,
  });
}

// 控制台用户--我的资源
export async function getMyResource(params) {
  return request(`${COPNETPATH}/order/getMyResourceByProjectId?projectId=${params}`);
}

// 控制台--数据服务-数据产品按账期分布情况(统计平台管理员各个周期（日、月、时、其它）类型下的产品数量)
export async function getProductCountByCycleType(params) {
  return request(`${COPNETPATH}/dataService/getProductCountGroupByCycleType`, {
    method: 'POST',
    body: params,
  });
}

// 控制台--数据服务-数据产品按集群分布情况(统计平台管理员视角下的各个schema的产品数量)
export async function getProductCountBySchema(params) {
  return request(`${COPNETPATH}/dataService/getProductCountGroupBySchema`, {
    method: 'POST',
    body: params,
  });
}

export async function getProductCountBySchema2() {
  return {
    data: {
      oraclekf: '20',
      mysqlkf: '20',
      test0831: '2',
    },
    success: true,
    message: '操作成功',
  };
}

// 控制台--数据服务-数据推送任务执行情况(未执行、执行中、执行完成、异常）的数量统计)
export async function getTaskExecution(params) {
  return request(`${COPNETPATH}/dataService/getTaskExecutionByTenantUser`, {
    method: 'POST',
    body: params,
  });
}

export async function getTaskExecution1() {
  return {
    data: {
      info: {
        unexecuted: 5,
        executing: 2,
        execution: 4,
        exception: 1,
        executionNoData: 1,
        exceptionTimeout: 3,
      },
    },
    success: true,
    message: '操作成功',
  };
}

// 控制台--数据服务-数据申请排行:按产品
export async function getProductSubscript(params) {
  return request(`${COPNETPATH}/dataService/getProductSubscriptionCountByCycleAndTenantUser`, {
    method: 'POST',
    body: params,
  });
}

// 控制台--数据服务-数据申请排行:按租户
export async function getProductByTenantId(params) {
  return request(`${COPNETPATH}/dataService/getCountProductGroupByTenantId`, {
    method: 'POST',
    body: params,
  });
}

export async function getProductCountByCycleType1() {
  return {
    data: {
      dayCount: '1111',
      monthCount: '2222',
      hourCount: '1111',
      otherCount: '2222',
    },
    success: true,
    message: '操作成功',
  };
}

// 控制台用户--资源使用情况图表
export async function getResourceMonitor(params) {
  const { start, end, query, tenantId, projectId } = params;
  return request(
    `${COPNETPATH}/paas/getResourceMonitor?start=${start}&end=${end}&query=${query}${
      tenantId ? `&tenantId=${tenantId}` : ''
    }${projectId ? `&projectId=${projectId}` : ''}`
  );
}

// 控制台用户--资源使用情况图表 租户列表
export async function listTenant() {
  return request(`${COPNETPATH}/tenant/listTenant`, {
    method: 'POST',
    body: toFormData({
      current: 1,
      pageSize: 100000,
    }),
  });
}

// 控制台用户--资源使用情况图表 项目列表
export async function listProjectByRole() {
  return request(`${COPNETPATH}/project/listProjectByRole`, {
    method: 'POST',
    body: toFormData({
      current: 1,
      pageSize: 100000,
      status: 0,
    }),
  });
}

// 明文数据
export async function getRequestList(params) {
  return request(`${COPNETPATH}/dataService/view/reqProductList`, {
    method: 'POST',
    body: params,
  });
}
// 数据申请单，获取状态列表
export async function getRequestStatusList() {
  return request(`${COPNETPATH}/dataService/view/getReqStatus`);
}

// 获取数据申请单下载列表
export async function dataApply(params) {
  return loadRequest(`${COPNETPATH}/excel/dataApply`, {
    method: 'POST',
    body: params,
  });
}
