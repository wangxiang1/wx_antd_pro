import React, { Component } from 'react';

import { Row, Col, Button, DatePicker, Card } from 'antd';
import PieMonitor from './PieMonitor';
import OrganizationActivity from './OrganizationActivity';
import HighActivityTenantList from './HighActivityTenantList';
import LowActivityTenantList from './LowActivityTenantList';
import SurrenderList from './SurrenderList';
import SettledList from './SettledList';
import styles from './index.less';

/**
 *author: wangxiang
 *desc: 运营月报 - 租户整体情况
 *date: 2019/12/10
 */
export default class TenantOverallSituation extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Card
        className={styles['tenant-overall-situation']}
        title="租户整体情况"
        style={{ width: '100%' }}
      >
        <Row gutter={10}>
          <Col span={11}>
            <PieMonitor />
          </Col>
          <Col span={13}>
            <OrganizationActivity />
          </Col>
        </Row>
        <Row gutter={10}>
          <Col span={12}>
            <HighActivityTenantList />
          </Col>
          <Col span={12}>
            <LowActivityTenantList />
          </Col>
        </Row>
        <br />
        <Row gutter={10}>
          <Col span={10}>
            <SurrenderList />
          </Col>
          <Col span={14}>
            <SettledList />
          </Col>
        </Row>
      </Card>
    );
  }
}
