import React, { Component } from 'react';

import { Card, Tooltip, Progress, Row, Col } from 'antd';
import styles from './index.less';
import cpu from './cpu.png';
import memory from './memory.png';
import storage from './storage.png';

/**
 *author: wangxiang
 *desc: 资源使用情况
 *date: 2019/12/10
 */
export default class ResourceUsedLine extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Card title="资源使用情况" className={styles['resource-used-line']} style={{ width: '100%' }}>
        <Row className={styles.content}>
          <Col className={styles.item1} span={1}>
            <img src={cpu} alt="cpu" />
          </Col>
          <Col className={styles.item2} span={4}>
            <span>CPU总量：365C</span>
          </Col>
          <Col className={styles.item3} span={8}>
            <Tooltip title="3 done / 3 in progress / 4 to do">
              <Progress
                percent={60}
                successPercent={30}
                showInfo={false}
                strokeColor="#7A77DE"
                status="normal"
                strokeWidth={12}
              />
            </Tooltip>
          </Col>
          <Col className={styles.item4} span={4}>
            <span>
              <span className={styles.dot} style={{ color: '#7A77DE' }}>
                ●
              </span>项目配额：218C
            </span>
          </Col>
          <Col className={styles.item4} span={4}>
            <span>
              <span className={styles.dot}>●</span>服务配额：135C
            </span>
          </Col>
        </Row>
        <br />
        <Row className={styles.content}>
          <Col className={styles.item1} span={1}>
            <img src={memory} alt="memory" />
          </Col>
          <Col className={styles.item2} span={4}>
            <span>内存总量：8,000G</span>
          </Col>
          <Col className={styles.item3} span={8}>
            <Tooltip title="3 done / 3 in progress / 4 to do">
              <Progress
                percent={60}
                successPercent={30}
                showInfo={false}
                strokeColor="#1890ff"
                status="normal"
                strokeWidth={12}
              />
            </Tooltip>
          </Col>
          <Col className={styles.item4} span={4}>
            <span>
              <span className={styles.dot} style={{ color: '#1890ff' }}>
                ●
              </span>项目配额：8000G
            </span>
          </Col>
          <Col className={styles.item4} span={4}>
            <span>
              <span className={styles.dot}>●</span>服务配额：135C
            </span>
          </Col>
        </Row>
        <br />
        <Row className={styles.content}>
          <Col className={styles.item1} span={1}>
            <img src={storage} alt="storage" />
          </Col>
          <Col className={styles.item2} span={4}>
            <span>存储总量：2,223G</span>
          </Col>
          <Col className={styles.item3} span={8}>
            <Tooltip title="3 done / 3 in progress / 4 to do">
              <Progress
                percent={60}
                successPercent={30}
                showInfo={false}
                strokeColor="#52c41a"
                status="normal"
                strokeWidth={12}
              />
            </Tooltip>
          </Col>
          <Col className={styles.item4} span={4}>
            <span>
              <span className={styles.dot} style={{ color: '#52c41a' }}>
                ●
              </span>项目配额：218G
            </span>
          </Col>
          <Col className={styles.item4} span={4}>
            <span>
              <span className={styles.dot}>●</span>服务配额：135C
            </span>
          </Col>
        </Row>
      </Card>
    );
  }
}
