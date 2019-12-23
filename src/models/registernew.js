/* eslint-disable no-unused-vars,no-unneeded-ternary,no-shadow */
// import Cookies from 'js-cookie';
import {
  saveData,
  getTenantData,
  getIndustry,
  getNature,
  getProvince,
  saveTenantData,
  validateMobileTel,
  validateTenantName,
  validateTenantId,
  validateEmail,
  validateLoginId,
  syncUserInfo,
  syncTenantInfo,
  getInfo,
  checkIsComplete,
  getTenantName1,
  listCurrentUserRoles,
  checkTenantName,
  getDepartmentLevelInfo,
  getDepartmentTreeInfo,
  getTenantByOrgCode,
  checkOrderProcess,
  getFailEnterMessage,
  getEnterProcessInfo,
  cancelProcess,
  getOrgInfoByName,
} from '../services/user';

export default {
  namespace: 'registernew',

  state: {
    tenantData: [],
    tenantDataNew: [],
    province: [],
    industry: [],
    nature: [],
    cloudUserInfo: {},
    isComplete: null,
    tenantNames: [],
    orderProcess: {},
    failEnterMessage: {},
    enterProcessInfo: {},
  },

  effects: {
    *saveData({ payload }, { call }) {
      yield call(saveData, payload);
    },
    *saveTenantData({ payload, callback }, { call }) {
      const response = yield call(saveTenantData, payload);
      const { message, success } = response;
      if (callback) callback(message, success);
    },

    *saveUser({ payload, callback }, { call }) {
      const response = yield call(saveData, payload);
      const { message, success } = response;
      if (callback) callback(message, success);
    },

    *syncUserInfo1({ payload, callback }, { call }) {
      console.log('syncUserInfo1 async-------------------------');
      const response = yield call(syncUserInfo, payload);
      if (response && response.success) {
        const response2 = yield call(listCurrentUserRoles);
        if (response2 && response2.code === 200) {
          const userInfoTemp = JSON.parse(localStorage.getItem('currentUser'));
          userInfoTemp.roles = response2.data;
          localStorage.setItem('currentUser', JSON.stringify(userInfoTemp));
          localStorage.setItem('copnet-authority', response2.data);
        }

        console.log('syncUserInfo1 async res', response);
        if (callback) callback(response);
      }
    },

    *syncTenantInfo1({ payload, callback }, { call }) {
      console.log('syncTenantInfo1 async-------------------------');
      const response = yield call(syncTenantInfo, payload);
      if (response && response.success) {
        const response2 = yield call(listCurrentUserRoles);
        if (response2 && response2.code === 200) {
          const userInfoTemp = JSON.parse(localStorage.getItem('currentUser'));
          userInfoTemp.roles = response2.data;
          localStorage.setItem('currentUser', JSON.stringify(userInfoTemp));
          localStorage.setItem('copnet-authority', response2.data);
        }

        console.log('syncTenantInfo1 async res', response);
        if (callback) callback(response);
      }
    },

    *getTenantData(_, { call, put }) {
      const tenantData = yield call(getTenantData);

      yield put({
        type: 'save',
        payload: { tenantData: tenantData.data },
      });
    },

    *getIndustry(_, { call, put }) {
      const industry = yield call(getIndustry);

      const nature = yield call(getNature);

      const province = yield call(getProvince);

      yield put({
        type: 'save',
        payload: { industry: industry.data, nature: nature.data, province: province.data },
      });
    },

    *getProvince(_, { call, put }) {
      const province = yield call(getProvince);
      yield put({ type: 'setProvince', data: province.data });
    },

    *validateMobileTel({ payload, callback }, { call }) {
      const response = yield call(validateMobileTel, payload);
      const { message, success } = response;
      if (callback) callback(success, message);
    },

    *validateEmail({ payload, callback }, { call }) {
      const response = yield call(validateEmail, payload);
      const { message, success } = response;
      if (callback) callback(success, message);
    },
    *validateLoginId({ payload, callback }, { call }) {
      const response = yield call(validateLoginId, payload);
      const { message, success } = response;
      if (callback) callback(success, message);
    },
    *validateTenantName({ payload, callback }, { call }) {
      const response = yield call(validateTenantName, payload);
      const { message, success } = response;
      if (callback) callback(success, message);
    },
    *validateTenantId({ payload, callback }, { call }) {
      const response = yield call(validateTenantId, payload);
      const { message, success } = response;
      if (callback) callback(success, message);
    },

    *getCloudUserInfo({ payload, callback }, { call, put }) {
      const response = yield call(getInfo, payload);
      const { data } = response;
      yield put({
        type: 'save',
        payload: { cloudUserInfo: data },
      });
    },

    *getCheckIsComplete({ payload, callback }, { call, put }) {
      const response = yield call(checkIsComplete, payload);
      if (response && response.success) {
        localStorage.setItem('isComplete', response.data);
      }

      yield put({
        type: 'save',
        payload: { isComplete: response.data },
      });
    },

    *getCheckOrderProcess({ payload, callback }, { call, put }) {
      const response = yield call(checkOrderProcess, payload);
      let res2 = null;

      // 0：未入驻，1：审批通过，2：审批中，3：审批拒绝 4、此用户已删除 5、流程已撤销
      // 审批拒绝 查看已发起入驻的失败信息
      if (response && response.data && response.data.status === 3) {
        const response2 = yield call(getFailEnterMessage);
        res2 = response2 && response2.success ? response2.data : null;
      }

      if (response && response.data && response.data.status === 4) {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('isComplete');
        // Cookies.remove('access-token');
        // Cookies.set('__currentURL', `${CLIENT_HOST}`);
        // window.location.href = `${CLIENT_HOST}`;
      }

      yield put({
        type: 'save',
        payload: { orderProcess: response.data, failEnterMessage: res2 },
      });
    },

    *fetchEnterProcessInfo({ payload, callback }, { call, put }) {
      const response = yield call(getEnterProcessInfo, payload);

      yield put({
        type: 'save',
        payload: { enterProcessInfo: response.data },
      });
    },

    *userCancelProcess({ payload, callback }, { call, put }) {
      const response = yield call(cancelProcess, payload);

      if (response && response.success) {
        const response2 = yield call(checkOrderProcess);
        yield put({
          type: 'save',
          payload: { orderProcess: response2.data },
        });
      }

      callback(response);
    },

    *getTenantName1({ payload, callback }, { call, put }) {
      const response = yield call(getTenantName1);

      yield put({
        type: 'save',
        payload: { tenantNames: response.data },
      });
    },

    *validateTenantNameNew({ payload, callback }, { call, put }) {
      const response = yield call(checkTenantName, payload);
      if (callback) {
        callback(response.data);
      }
    },

    *validateTenantNameEdit({ payload, callback }, { call, put }) {
      const response = yield call(checkTenantName, payload);
      if (callback) {
        callback(response.data);
      }
    },

    *fetchDepartmentLevelInfo({ payload, callback }, { call, put }) {
      const response = yield call(getDepartmentLevelInfo, payload);

      let data = [];

      if (response && response.success) {
        data = response.data.map(item => {
          return {
            key: item.mdmOrgCode,
            value: item.mdmOrgCode,
            title: item.orgName,
            isLeaf: item.isLeaf === 'true' ? true : false,
          };
        });
      }

      if (callback) {
        callback(data);
      }
    },

    *fetchDepartmentTreeInfo({ payload, callback }, { call, put }) {
      const response = yield call(getDepartmentTreeInfo, payload);

      if (response && response.success) {
        const formatData = obj => {
          return obj.map(item => {
            if (item.children) {
              return {
                key: item.mdmOrgCode,
                value: item.mdmOrgCode,
                title: item.orgName,
                isLeaf: item.isLeaf,
                children: formatData(item.children),
              };
            } else {
              return {
                key: item.mdmOrgCode,
                value: item.mdmOrgCode,
                title: item.orgName,
                isLeaf: item.isLeaf === 'true' ? true : false,
              };
            }
          });
        };

        if (callback) {
          callback(formatData(response.data));
        }
      } else {
        callback([]);
      }
    },

    *fetchTenantByOrgCode({ payload, callback }, { call, put }) {
      const response = yield call(getTenantByOrgCode, payload);

      yield put({
        type: 'save',
        payload: { tenantDataNew: response && response.success ? response.data : [] },
      });
    },

    *fetchOrgInfoByName({ payload, callback }, { call }) {
      const response = yield call(getOrgInfoByName, payload);
      // let data = [];
      // if (response && response.success) {
      //   data = response.data.map(item => {
      //     return {
      //       key: item.orgCode,
      //       value: item.orgCode,
      //       title: item.orgName,
      //     };
      //   });
      // }
      if (callback) {
        callback(response && response.success ? response.data : []);
      }
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
