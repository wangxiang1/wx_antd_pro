import React, { Component } from 'react';
import { connect } from 'dva';

import { Card } from 'antd';
import SearchCom from './SearchCom';
import TenantOverallSituation from './TenantOverallSituation';
import MachineResourceAllocation from './MachineResourceAllocation';

import styles from './index.less';
import DataProductSituation from './DataProductSituation';

/**
 *author: wangxiang
 *desc: 运营月报
 *date: 2019/12/10
 */
@connect(({ yyManagerMonthly, loading }) => ({
  yyManagerMonthly,
  loading,
}))
export default class YyManagerMonthly extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className={styles['yy-manager']}>
        <Card title="报表查询" bordered={false} style={{ width: '100%' }}>
          <SearchCom />
          <br />
          <TenantOverallSituation />
          <br />
          <MachineResourceAllocation />
          <br />
          <DataProductSituation />
        </Card>
      </div>
    );
  }
}
