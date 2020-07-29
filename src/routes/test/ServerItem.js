import React, { Component } from 'react';
import { Card, Row, Col } from 'antd';
import img from './img/u1.png';
import styles from './ServerItem.less';

export function ServerItem1() {
  return (
    <Card className={styles.pitem1}>
      <div className={styles.title}>慧企云平台</div>
      <div className={styles.content}>
        <img src={img} />
        <Row className={styles.right}>
          <Col span={12}>
            <Row gutter={[0, 8]}>
              <Col offset={1} span={15}>
                集群数量：
              </Col>
              <Col span={8} className={styles.number}>
                4
              </Col>
            </Row>
            <Row gutter={[0, 8]}>
              <Col offset={1} span={15}>
                主机总数：
              </Col>
              <Col span={8} className={styles.number}>
                1593
              </Col>
            </Row>
            <Row gutter={[0, 8]}>
              <Col offset={1} span={15}>
                故障主机总数：
              </Col>
              <Col span={8} className={styles.number}>
                75
              </Col>
            </Row>
            <Row gutter={[0, 8]}>
              <Col offset={1} span={15}>
                <a>查看设备</a>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row gutter={[0, 8]}>
              <Col offset={1} span={15}>
                物理机数：
              </Col>
              <Col span={8} className={styles.number}>
                1148
              </Col>
            </Row>
            <Row gutter={[0, 8]}>
              <Col offset={1} span={15}>
                空闲物理机数：
              </Col>
              <Col span={8} className={styles.number}>
                87
              </Col>
            </Row>
            <Row gutter={[0, 8]}>
              <Col offset={1} span={15}>
                虚拟机数：
              </Col>
              <Col span={8} className={styles.number}>
                445
              </Col>
            </Row>
            <Row gutter={[0, 8]}>
              <Col offset={1} span={15}>
                空闲虚拟机数：
              </Col>
              <Col span={8} className={styles.number}>
                135
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Card>
  );
}

export function ServerItem2() {
  return (
    <Card className={styles.pitem2}>
      <div className={styles.title}>廊坊数据中心</div>
      <div className={styles.content}>
        <Row>
          <Col span={10}>
            <img src={img} />
            <div className={styles.showServer}>
              <a>查看设备</a>
            </div>
          </Col>
          <Col span={14}>
            <Row gutter={[0, 8]}>
              <Col offset={1} span={15}>
                主机总数：
              </Col>
              <Col span={8} className={styles.number}>
                775
              </Col>
            </Row>
            <Row gutter={[0, 8]}>
              <Col offset={1} span={15}>
                物理机数：
              </Col>
              <Col span={8} className={styles.number}>
                470
              </Col>
            </Row>
            <Row gutter={[0, 8]}>
              <Col offset={1} span={15}>
                空闲物理机数：
              </Col>
              <Col span={8} className={styles.number}>
                75
              </Col>
            </Row>
            <Row gutter={[0, 8]}>
              <Col offset={1} span={15}>
                虚拟机数：
              </Col>
              <Col span={8} className={styles.number}>
                445
              </Col>
            </Row>
            <Row gutter={[0, 8]}>
              <Col offset={1} span={15}>
                空闲虚拟机数：
              </Col>
              <Col span={8} className={styles.number}>
                135
              </Col>
            </Row>
            <Row gutter={[0, 8]}>
              <Col offset={1} span={15}>
                故障主机总数：
              </Col>
              <Col span={8} className={styles.number}>
                0
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Card>
  );
}

export function ServerItem3() {
  return (
    <Card className={styles.pitem3}>
      <div className={styles.title}>服务器</div>
      <div className={styles.content}>
        <img src={img} />
        <Row gutter={[0, 8]}>
          <Col offset={1} span={16}>
            主机总数：
          </Col>
          <Col span={7} className={styles.number}>
            775
          </Col>
        </Row>
        <Row gutter={[0, 8]}>
          <Col offset={1} span={16}>
            故障主机总数：
          </Col>
          <Col span={7} className={styles.number}>
            0
          </Col>
        </Row>
        <Row gutter={[0, 8]}>
          <Col offset={1} span={16}>
            物理机数：
          </Col>
          <Col span={7} className={styles.number}>
            470
          </Col>
        </Row>
        <Row gutter={[0, 8]}>
          <Col offset={1} span={16}>
            虚拟机数：
          </Col>
          <Col span={7} className={styles.number}>
            445
          </Col>
        </Row>
        <Row gutter={[0, 8]}>
          <Col offset={1} span={16}>
            <a>查看设备</a>
          </Col>
        </Row>
      </div>
    </Card>
  );
}
