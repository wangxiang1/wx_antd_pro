import React, { Component } from 'react';

import { Row, Col, Card } from 'antd';
import img2 from './img2.png';
import styles from './DataProduct.less';

/**
 *author: wangxiang
 *desc: 数据推送任务
 *date: 2019/12/10
 */
export default class PushTask extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Card className={styles['data-product']} style={{ width: '100%' }}>
        <Row gutter={10}>
          <Col span={4} className={styles.title}>
            <img src={img2} alt="pic" />
            <div>数据推送任务</div>
          </Col>
          <Col span={4} className={styles.content}>
            <div>292</div>
            <div>总量 / 个</div>
          </Col>
          <Col span={4} className={styles.content}>
            <div>32</div>
            <div>未执行 / 个</div>
          </Col>
          <Col span={4} className={styles.content}>
            <div>18</div>
            <div>执行中 / 个</div>
          </Col>
          <Col span={4} className={styles.content}>
            <div>32</div>
            <div>已完成 / 个</div>
          </Col>
          <Col span={4} className={styles.content} style={{ borderRight: 0 }}>
            <div>18</div>
            <div>执行异常 / 个</div>
          </Col>
        </Row>
      </Card>
    );
  }
}
