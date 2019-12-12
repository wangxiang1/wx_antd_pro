import React, { Component } from 'react';

import { Row, Col, Card } from 'antd';
import styles from './index.less';
import DataProduct from './DataProduct';
import PushTask from './PushTask';
import HeatDataSheet from './HeatDataSheet';
import DataCollection from './DataCollection';

/**
 *author: wangxiang
 *desc: 运营月报 - 数据产品情况
 *date: 2019/12/10
 */
export default class DataProductSituation extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Card
        className={styles['machine-resource-allocation']}
        title="数据产品情况"
        style={{ width: '100%' }}
      >
        <Row gutter={10}>
          <Col span={10}>
            <DataProduct />
          </Col>
          <Col span={14}>
            <PushTask />
          </Col>
        </Row>
        <Row gutter={10}>
          <Col span={14}>
            <HeatDataSheet />
          </Col>
          <Col span={10}>
            <DataCollection />
          </Col>
        </Row>
      </Card>
    );
  }
}
