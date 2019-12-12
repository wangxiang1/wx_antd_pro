import React, { Component } from 'react';

import { Row, Col, Button, DatePicker, Card } from 'antd';
import styles from './index.less';
import OverallMachine from './OverallMachine';
import PlatformsMachines from './PlatformsMachines';
import PlatformsMachinesHQY from './PlatformsMachinesHQY';
import ClusterResourceMonitor from './ClusterResourceMonitor';

/**
 *author: wangxiang
 *desc: 运营月报 - 机器资源分配情况
 *date: 2019/12/10
 */
export default class MachineResourceAllocation extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Card
        className={styles['machine-resource-allocation']}
        title={
          <div>
            机器资源分配情况&nbsp;&nbsp;<span style={{ fontSize: 12 }}>(现有分配情况）</span>
          </div>
        }
        extra={<a href="#">查看全部</a>}
        style={{ width: '100%' }}
      >
        <OverallMachine />
        <Row gutter={10}>
          <Col span={14}>
            <PlatformsMachines />
          </Col>
          <Col span={10}>
            <PlatformsMachinesHQY />
          </Col>
        </Row>
        <ClusterResourceMonitor />
      </Card>
    );
  }
}
