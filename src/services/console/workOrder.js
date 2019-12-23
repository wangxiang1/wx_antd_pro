import { stringify } from 'qs';
import request from '../../utils/request';
import loadRequest from '../../utils/loadRequest';

// 获取待审批工单
export async function getWillBeDoneTask(params) {
  return request(`${COPNETPATH}/order/getWillBeDoneTask?${stringify(params.data)}`, {
    method: 'POST',
    body: params,
  });
}

// 获取已审批工单
export async function getHaveBeDoneTask(params) {
  return request(`${COPNETPATH}/order/getHaveBeDoneTask?${stringify(params.data)}`, {
    method: 'POST',
    body: params,
  });
}

// 旧获取工单
export async function getAllOrderS() {
  return request(`${COPNETPATH}/order/getOrderList`);
}
// 旧审批工单
export async function approvedOrderS(params) {
  return request(`${COPNETPATH}/order/view/updateOrderStatusByOrderId/${params.orderId}`, {
    method: 'POST',
    // body: toFormData(params),
  });
}

// 获取待阅知会工单
export async function getWillNoticeProcess(params) {
  return request(`${COPNETPATH}/order/getWillNoticeProcess?${stringify(params.data)}`, {
    method: 'POST',
    body: params,
  });
}

// 获取已阅知会批工单
export async function getHaveNoticeProcess(params) {
  return request(`${COPNETPATH}/order/getHaveNoticeProcess?${stringify(params.data)}`, {
    method: 'POST',
    body: params,
  });
}
// 知会阅览
export async function completeZhiHui(params) {
  return request(`${COPNETPATH}/order/completeZhiHui?${stringify(params)}`, {
    method: 'POST',
    body: params,
  });
}

// 获取已发起工单
export async function getApplyProcess(params) {
  return request(`${COPNETPATH}/order/getApplyProcess?${stringify(params.data)}`, {
    method: 'POST',
    body: params,
  });
}

// 获取所有已发起工单
export async function getAllTask(params) {
  return request(`${COPNETPATH}/order/getApplyProcessAll?${stringify(params.data)}`, {
    method: 'POST',
    body: params,
  });
}

// 获取模型类别
export async function getDeploymentModelList() {
  return request(`${COPNETPATH}/order/getDeploymentModelList`);
}

// 签收工单
export async function claimTask(params) {
  return request(`${COPNETPATH}/order/claimTask?taskId=${params.taskId}`, {
    method: 'GET',
  });
}
// 反签收工单
export async function unclaimTask(params) {
  return request(`${COPNETPATH}/order/unClaimTask?taskId=${params.taskId}`, {
    method: 'GET',
  });
}
// 跟踪
export async function traceOrder(params) {
  return request(
    `${COPNETPATH}/order/traceOrder?bpmModelNo=${params.bpmModelNo}&instanceId=${
      params.instanceId
    } `,
    {
      method: 'GET',
    }
  );
}
// 工单详情
export async function getOrderInfo(params) {
  return request(
    `${COPNETPATH}/order/getOrderInfo?processInstanceId=${params.instanceId}&sign=${
      params.sign
    }&arriveTime=${params.arriveTime} `
  );
}
// 审批，办理工单
export async function approveProcess(params) {
  return request(`${COPNETPATH}/order/approveProcess`, {
    method: 'POST',
    body: params,
  });
}

// 批量办理审批
export async function batchApproveProcess(params) {
  return request(`${COPNETPATH}/order/batchApproveProcess`, {
    method: 'POST',
    body: params,
  });
}

// 审批总览，新增保存
export async function saveApprove(params) {
  return request(`${COPNETPATH}/approvalManage/add`, {
    method: 'POST',
    body: params,
  });
}

// 审批总览列表
export async function approvalList(params) {
  return request(`${COPNETPATH}/approvalManage/approvalList`, {
    method: 'POST',
    body: params,
  });
}

// 审批编辑
export async function editApprove(params) {
  return request(`${COPNETPATH}/approvalManage/edit`, {
    method: 'POST',
    body: params,
  });
}

// 审批删除
export async function deleteApprove(params) {
  return request(`${COPNETPATH}/approvalManage/delete?oid=${params.oid}&userId=${params.userId}`, {
    method: 'GET',
  });
}

// 工单搜索
export async function getOrderInfoList(params) {
  return request(`${COPNETPATH}/order/getOrderInfoList`, {
    method: 'POST',
    body: params,
  });
}

// 获取模型名称列表接口
export async function getListProcess() {
  return request(`${COPNETPATH}/approvalManage/listProcess?tenantId=systenant`, {
    method: 'GET',
  });
}

// 获取节点名称列表接口
export async function getProcessDefinitions(params) {
  return request(`${COPNETPATH}/approvalManage/getProcessDefinitions?modelKey=${params.modelKey}`, {
    method: 'GET',
  });
}

// 获取审批人接口
export async function getApprover(params) {
  return request(`${COPNETPATH}/approvalManage/approver?roleId=${params.roleId}`, {
    method: 'GET',
  });
}

// 获取工单审批列表
export async function repairOrderApprove(params) {
  return loadRequest(`${COPNETPATH}/excel/repairOrderApprove`, {
    method: 'POST',
    body: params,
  });
}

// 获取工单查询列表
export async function repairOrder(params) {
  return loadRequest(`${COPNETPATH}/excel/repairOrder`, {
    method: 'POST',
    body: params,
  });
}

// 获取审批管理表
export async function approvalManagement(params) {
  return loadRequest(`${COPNETPATH}/excel/approvalManagement`, {
    method: 'POST',
    body: params,
  });
}

// 数据服务数据申请单
export async function dataServiceOrder(params) {
  return request(`${COPNETPATH}/tenantData/dataServiceOrder?reqNo=${params.reqNo}`, {
    method: 'GET',
  });
}

// 数据服务..
export async function fieldInfo(params) {
  return request(`${COPNETPATH}/tenantData/fieldInfo?taskId=${params.taskId}`, {
    method: 'GET',
  });
}

// 数据服务历史
export async function getHistoryTask(params) {
  return request(
    `${COPNETPATH}/tenantData/getHistoryTask?processInstanceId=${params.processInstanceId}`,
    {
      method: 'GET',
    }
  );
}

// 数据服务提交
export async function commitTask(params) {
  return request(`${COPNETPATH}/tenantData/commitTask`, {
    method: 'POST',
    body: params,
  });
}

// 数据申请单（批量）终止
export async function stopReq(params) {
  return request(`${COPNETPATH}/tenantData/stopReq`, {
    method: 'POST',
    body: params,
  });
}

// 数据申请单（批量）清缓
export async function cleanReq(params) {
  return request(`${COPNETPATH}/tenantData/cleanReq`, {
    method: 'POST',
    body: params,
  });
}

/*
获取元数据属性（仅用于创建CDH)

数据库-字符集：dbCharset；
数据库-数据库类型：dbType；
FTP-模式：ftpMode；
代理-资源类型：proxyType
*/
export async function getMetaDataAttribute(params) {
  return request(`${COPNETPATH}/order/getMetaDataAttribute?sign=${params.sign}`);
}

/*
 获取4位随机数（仅用于创建CDH-元数据属性）
*/
export async function getMetaDataSignCode() {
  return request(`${COPNETPATH}/order/getMetaDataSignCode`);
}

// 数据申请单-查看时候，修改开始执行时间
export async function updateStartTime(params) {
  return request(`${COPNETPATH}/tenantData/updateStartTime`, {
    method: 'POST',
    body: params,
  });
}
