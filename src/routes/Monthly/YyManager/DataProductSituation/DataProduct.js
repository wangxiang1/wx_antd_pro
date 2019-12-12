import React, { Component } from 'react';

import { Row, Col, Card } from 'antd';
import img1 from './img1.png';
import styles from './DataProduct.less';

/**
 *author: wangxiang
 *desc: 数据产品
 *date: 2019/12/10
 */
export default class DataProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Card className={styles['data-product']} style={{ width: '100%' }}>
        <Row gutter={10}>
          <Col span={6} className={styles.title}>
            <img src={img1} alt="pic" />
            <div>数据产品</div>
          </Col>
          <Col span={6} className={styles.content}>
            <div>292</div>
            <div>在线产品 / 个</div>
          </Col>
          <Col span={6} className={styles.content}>
            <div>32</div>
            <div>上线产品 / 个</div>
          </Col>
          <Col span={6} className={styles.content} style={{ borderRight: 0 }}>
            <div>18</div>
            <div>下线产品 / 个</div>
          </Col>
        </Row>
      </Card>
    );
  }
}
