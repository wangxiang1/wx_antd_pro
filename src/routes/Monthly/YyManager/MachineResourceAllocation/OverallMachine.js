import React, { Component } from 'react';

import { Row, Col, Card } from 'antd';
import img1 from './img1.png';
import styles from './OverallMachine.less';

/**
 *author: wangxiang
 *desc: 机器总体情况
 *date: 2019/12/10
 */
export default class OverallMachine extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Card className={styles['overall-machine']} style={{ width: '100%' }}>
        <Row gutter={10}>
          <Col span={3} className={styles.title}>
            <img src={img1} alt="pic" />
            <div>机器总体情况</div>
          </Col>
          <Col span={3} className={styles.content}>
            <div>937</div>
            <div>机器总量 /台</div>
          </Col>
          <Col span={3} className={styles.content}>
            <div>533</div>
            <div>已分配 /台</div>
          </Col>
          <Col span={3} className={styles.content}>
            <div>937</div>
            <div>未分配 /台</div>
          </Col>
          <Col span={3} className={styles.content}>
            <div>937</div>
            <div>管理节点 /台</div>
          </Col>
          <Col span={3} className={styles.content}>
            <div>937</div>
            <div>工作节点 /台</div>
          </Col>
          <Col span={3} className={styles.content}>
            <div>937</div>
            <div>物理机 /台</div>
          </Col>
          <Col span={3} className={styles.content} style={{ borderRight: 0 }}>
            <div>937</div>
            <div>虚拟机 /台</div>
          </Col>
        </Row>
      </Card>
    );
  }
}
