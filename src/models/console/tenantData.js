/* eslint-disable prefer-const,comma-dangle,prefer-destructuring */
import {
  // getTenantData,
  getProductData,
  getProductDataDetails,
} from '../../services/console/tenantData';

export default {
  namespace: 'tenantData',

  state: {
    tenantDataInfo: {},
    productDataInfo: {},
    productDataDetailsInfo: {},
  },

  effects: {
    *fetchTenantData({ payload }, { call, put }) {
      const response = {
        data: [
          {
            applyProduct: 13, // 数据产品数
            tenantName: '租户demo', // 租户名称
            successRate: 0.1474, // 推送成功率
            tenantId: 'demo', // 租户id
            orgnization: '演示租户1', // 组织机构
            pushNum: 95, // 应推送量
            actualPushNum: 14, // 实际推送量
            applyNum: 53, // 申请单量
          },
          {
            applyProduct: 2,
            tenantName: '租户demotenant1',
            successRate: 0.0,
            tenantId: 'demotenant1',
            orgnization: '演示租户2',
            pushNum: 3,
            actualPushNum: 0,
            applyNum: 5,
          },
          {
            applyProduct: 0,
            tenantName: '租户demo567',
            successRate: 0.0,
            tenantId: 'demo567',
            orgnization: '中国联通天津市分公司',
            pushNum: 0,
            actualPushNum: 0,
            applyNum: 0,
          },
          {
            applyProduct: 0,
            tenantName: 'test0919',
            successRate: 0.0,
            tenantId: 'demo0919',
            orgnization: '',
            pushNum: 0,
            actualPushNum: 0,
            applyNum: 0,
          },
          {
            applyProduct: 0,
            tenantName: '租户demotest01g',
            successRate: 0.0,
            tenantId: 'demotest01g',
            orgnization: '租户名称i',
            pushNum: 0,
            actualPushNum: 0,
            applyNum: 0,
          },
          {
            applyProduct: 0,
            tenantName: 'test1001',
            successRate: 0.0,
            tenantId: 'demo1001',
            orgnization: '',
            pushNum: 0,
            actualPushNum: 0,
            applyNum: 0,
          },
          {
            applyProduct: 0,
            tenantName: '租户demo1122',
            successRate: 0.0,
            tenantId: 'demo1122',
            orgnization: '中国联通总部管理部门',
            pushNum: 0,
            actualPushNum: 0,
            applyNum: 0,
          },
          {
            applyProduct: 0,
            tenantName: '租户demo09',
            successRate: 0.0,
            tenantId: 'demo09',
            orgnization: 'werdf',
            pushNum: 0,
            actualPushNum: 0,
            applyNum: 0,
          },
          {
            applyProduct: 0,
            tenantName: '租户demoq123',
            successRate: 0.0,
            tenantId: 'demoq123',
            orgnization: '中国联通总部管理部门',
            pushNum: 0,
            actualPushNum: 0,
            applyNum: 0,
          },
          {
            applyProduct: 0,
            tenantName: 'ceshi0923',
            successRate: 0.0,
            tenantId: 'demo0923',
            orgnization: '',
            pushNum: 0,
            actualPushNum: 0,
            applyNum: 0,
          },
        ],
        success: true,
        pagi: {
          total: 13,
          current: 1,
          pageSize: 10,
        },
        message: '操作成功',
      };

      if (response && response.success) {
        yield put({
          type: 'save',
          payload: { tenantDataInfo: response },
        });
      }
    },

    *fetchTenantDataFile({ payload }, { call }) {
      // yield call(getTenantDataExcel, payload);
    },

    *fetchProductData({ payload }, { call, put }) {
      const response = yield call(getProductData, payload);

      if (response && response.success) {
        yield put({
          type: 'save',
          payload: { productDataInfo: response },
        });
      }
    },

    *fetchProductDataFile({ payload }, { call }) {
      // yield call(getProductDataExcel, payload);
    },

    *fetchProductDataDetails({ payload }, { call, put }) {
      const response = yield call(getProductDataDetails, payload);

      if (response && response.success) {
        yield put({
          type: 'save',
          payload: { productDataDetailsInfo: response },
        });
      }
    },

    *fetchLoadProductDetailsFile({ payload }, { call }) {
      // yield call(getProductDataDetailsExcel, payload);
    },
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
