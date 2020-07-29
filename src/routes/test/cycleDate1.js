import React, { Component } from 'react';
import { Row, Col, TimePicker, InputNumber, Select } from 'antd';
import styles from './index1.less';

const { Option } = Select;

export default class CycleDate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: null,
      cycleType: '日',
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
      case '日':
        return (
          <Row>
            <Col span={6}>
              <TimePicker value={value} onChange={this.onChange} />
            </Col>
          </Row>
        );
      case '月':
        return (
          <Row>
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
      default:
        break;
    }
  };

  render() {
    return (
      <div className={styles['cycle-date']}>
        <Select defaultValue="日" onChange={this.handleChangeCycleType} style={{ width: '100%' }}>
          <Option value="日">每日</Option>
          <Option value="月">每月</Option>
        </Select>
        {this.getItem()}
      </div>
    );
  }
}
