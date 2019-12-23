import React, { Component } from 'react';

import { Row, Col, Card } from 'antd';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import img4 from './img4.png';
import styles from './index.less';

/**
 *author: wangxiang
 *desc: 租户情况概览
 *date: 2019/12/10
 */
export default class TenantCase extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Card className={styles['tenant-case']} title="租户情况概览" style={{ width: '100%' }}>
        <Row gutter={10}>
          <Col span={6} className={styles.content}>
            <img src={img1} alt="pic" />
            <div className={styles.text}>
              <div>用户数/个</div>
              <div>937</div>
            </div>
          </Col>
          <Col span={6} className={styles.content}>
            <img src={img2} alt="pic" />
            <div className={styles.text}>
              <div>项目数/个</div>
              <div>937</div>
            </div>
          </Col>
          <Col span={6} className={styles.content}>
            <img src={img3} alt="pic" />
            <div className={styles.text}>
              <div>服务数/个</div>
              <div>937</div>
            </div>
          </Col>
          <Col span={6} className={styles.content} style={{ borderRight: 0 }}>
            <img src={img4} alt="pic" />
            <div className={styles.text}>
              <div>申请数据产品/个</div>
              <div>937</div>
            </div>
          </Col>
        </Row>
      </Card>
    );
  }
}
