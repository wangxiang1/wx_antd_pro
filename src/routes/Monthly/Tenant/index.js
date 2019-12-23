import React, { Component } from 'react';
import { Card, Row, Col } from 'antd';
import TenantCase from './TenantCase';
import styles from './index.less';
import ProjectOverview from './ProjectOverview';
import ResourceUsedLine from './ResourceUsedLine';
import ServiceUsed from './ServiceUsed';
import DataPushChart from './DataPushChart';

/**
 *author: wangxiang
 *desc: 租户月报
 *date: 2019/12/10
 */
export default class TenantMonthly extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className={styles.tenant}>
        <Card
          title={
            <div>
              报表查询
              <span style={{ color: 'grey', fontSize: '12px' }}>（默认时间段选择当月）</span>
            </div>
          }
          bordered={false}
          style={{ width: '100%' }}
        >
          <TenantCase />
          <br />
          <ProjectOverview />
          <br />
          <ResourceUsedLine />
          <br />
          <Row gutter={10}>
            <Col span={12}>
              <ServiceUsed />
            </Col>
            <Col span={12}>
              <DataPushChart />
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}
