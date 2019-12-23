import React, { Component } from 'react';

import { Card, DatePicker, Button, Row, Col } from 'antd';

import styles from './index.less';
import DataChart from './DataChart';

const { RangePicker } = DatePicker;

/**
 *author: wangxiang
 *desc: 数据推送情况
 *date: 2019/12/10
 */
export default class DataPushChart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  render() {
    return (
      <Card
        title={
          <div>
            数据推送情况
            <RangePicker
              style={{ width: 220, marginLeft: '10px', marginRight: '5px' }}
              onChange={this.onChange}
            />
            <Button type="primary">查询</Button>
          </div>
        }
        className={styles['data-push-chart']}
        style={{ width: '100%' }}
      >
        <Row>
          <Col span={12}>
            <DataChart
              color={['#7A77DE', '#FF3559']}
              title={['任务全成功表量', '任务出现异常表量']}
              legend="申请数据表总量"
              unit="张"
            />
          </Col>
          <Col span={12}>
            <DataChart
              color={['#00A0FF', '#FF3559']}
              title={['推送任务成功量', '推送任务失败量']}
              legend="推送任务数"
              unit="条"
            />
          </Col>
        </Row>
        <div className={styles['warning-text']}>
          <span className={styles.title}>异常任务说明：</span>
          <div>1. 数据源异常任务量：120条；</div>
          <div>2. 数据推送失败任务量：85；</div>
        </div>
      </Card>
    );
  }
}
