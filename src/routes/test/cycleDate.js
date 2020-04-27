import React, { Component } from 'react';
import { Row, Col, TimePicker, InputNumber, Select } from 'antd';
import styles from './index1.less';

const { Option } = Select;

export default class CycleDate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: null,
      cycleType: '周',
    };
  }

  onChange = time => {
    console.log(time);
    this.setState({ value: time });
  };

  handleNumberChange = (type, value) => {
    this.setState({ [type]: value });
  };

  handleChangeCycleType = cycleType => {
    this.setState({ cycleType });
  };

  getItem = () => {
    const { hour, day, mouth, value, cycleType } = this.state;

    switch (cycleType) {
      case '时':
        return (
          <Row>
            <Col span={6}>
              <InputNumber
                min={1}
                max={24}
                value={hour}
                onChange={this.handleNumberChange.bind(this, 'hour')}
                className={styles['input-number']}
              />
            </Col>
            <Col span={6} className={styles.title}>
              小时前数据
            </Col>
          </Row>
        );
      case '日':
        return (
          <Row>
            <Col span={4} className={styles.title}>
              次日
            </Col>
            <Col span={6}>
              <TimePicker value={value} onChange={this.onChange} />
            </Col>
          </Row>
        );
      case '月':
        return (
          <Row>
            <Col span={4} className={styles.title}>
              次月
            </Col>
            <Col span={6}>
              <InputNumber
                min={1}
                value={day}
                onChange={this.handleNumberChange.bind(this, 'day')}
                className={styles['input-number']}
              />
              日
            </Col>
            <Col span={6}>
              <TimePicker value={value} onChange={this.onChange} />
            </Col>
          </Row>
        );
      case '年':
        return (
          <Row>
            <Col span={4} className={styles.title}>
              次年
            </Col>
            <Col span={6}>
              <InputNumber
                className={styles['input-number']}
                min={1}
                max={12}
                value={mouth}
                onChange={this.handleNumberChange.bind(this, 'mouth')}
              />
              月
            </Col>
            <Col span={6}>
              <InputNumber
                min={1}
                max={31}
                value={day}
                onChange={this.handleNumberChange.bind(this, 'day')}
                className={styles['input-number']}
              />
              日
            </Col>
            <Col span={6}>
              <TimePicker value={value} onChange={this.onChange} />
            </Col>
          </Row>
        );
      default:
        break;
    }
  };

  render() {
    return (
      <div className={styles['cycle-date']}>
        <Select onChange={this.handleChangeCycleType} style={{ width: '100%' }}>
          <Option value="日">日</Option>
          <Option value="月">月</Option>
          {/* <Option value="季">季</Option> */}
          <Option value="年">年</Option>
          <Option value="时">时</Option>
          {/*  <Option value="分">分</Option> */}
          <Option value="其他">其他</Option>
        </Select>
        <br />
        {this.getItem()}
      </div>
    );
  }
}
