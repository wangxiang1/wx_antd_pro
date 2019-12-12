import React, { Component } from 'react';

import { Row, Col, Button, DatePicker } from 'antd';
import styles from './index.less';

/**
 *author: wangxiang
 *desc: 运营月报 - 查询
 *date: 2019/12/10
 */
export default class SearchCom extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onChangeTime = (dates, dateStrings) => {
    // this.setState({ startTime: dateStrings[0], endTime: dateStrings[1] });
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
  };

  handleSelectTime = e => {
    const id1 = e.target.id;

    const timeDiv = document.querySelector('#yyMonthlyTime');
    const divs = timeDiv.querySelectorAll('div');

    divs.forEach(item => {
      const dom = item;

      dom.style.color = dom.id === id1 ? '#655fd9' : 'rgba(0, 0, 0, 0.65)';
    });
  };

  render() {
    return (
      <div className={styles['yy-search']}>
        <Row>
          <Col span={4}>
            <div
              id="yyMonthlyTime"
              className={styles['click-time']}
              onClick={this.handleSelectTime}
            >
              <div id="day" className={styles['select-div']}>
                今日
              </div>
              <div id="week">本周</div>
              <div id="month">本月</div>
              <div className={styles['clear-b']} />
            </div>
          </Col>
          <Col span={2} className={styles['time-label']}>
            选择时间：
          </Col>
          <Col span={9}>
            <div className={styles['select-time']}>
              <DatePicker.RangePicker
                showTime
                format="YYYY-MM-DD HH:mm:ss"
                onChange={this.onChangeTime}
              />
            </div>
          </Col>
          <Col span={6}>
            <Button type="primary" style={{ marginRight: '15px' }}>
              查询
            </Button>
            <Button>导出报表</Button>
          </Col>
        </Row>
      </div>
    );
  }
}
