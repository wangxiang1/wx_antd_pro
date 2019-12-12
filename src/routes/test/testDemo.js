import React, { Component } from 'react';
import { Checkbox, Row, Col } from 'antd';

const CheckboxGroup = Checkbox.Group;

const plainOptions = [
  {
    title: '申请单号',
    dataIndex: 'requstName',
  },
  {
    title: '产品编码',
    dataIndex: 'productCode',
  },
  {
    title: '租户名称',
    dataIndex: 'tenantName',
  },
  {
    title: '租户ID',
    dataIndex: 'tenantId',
  },
  {
    title: '状态',
    dataIndex: 'status',
  },
  {
    title: '数据总量',
    dataIndex: 'dataCount',
  },
  {
    title: '任务开始时间',
    dataIndex: 'startTime',
  },
  {
    title: '任务结束时间',
    dataIndex: 'taskInstanceGainEndTime',
  },
  {
    title: '耗时',
    dataIndex: 'useTime',
  },
  {
    title: '获取时段',
    dataIndex: 'time',
  },
  {
    title: '申请人',
    dataIndex: 'loginId',
  },
  {
    title: '数据产品名称',
    dataIndex: 'productName',
  },
  {
    title: '资源名称',
    dataIndex: 'name',
  },

  {
    title: '申请类型',
    dataIndex: 'isObtain',
  },
  {
    title: '任务类型',
    dataIndex: 'obtainType',
  },
  {
    title: '实例id',
    dataIndex: 'taskInstanceId',
  },
  {
    title: '任务执行开始时间',
    dataIndex: 'taskInstanceGainStartTime',
  },
  {
    title: '最后访问时间',
    dataIndex: 'requestTime',
  },
];

const defaultCheckedList = [
  'requstName',
  'productCode',
  'tenantName',
  'status',
  'dataCount',
  'startTime',
  'taskInstanceGainEndTime',
  'useTime',
  'time',
];

class TestDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedList: defaultCheckedList,
      indeterminate: true,
      checkAll: false,
    };
  }

  onChange = checkedList => {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
      checkAll: checkedList.length === plainOptions.length,
    });
  };

  onCheckAllChange = e => {
    this.setState({
      checkedList: e.target.checked ? plainOptions.map(item => item.dataIndex) : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  };

  render() {
    const { indeterminate, checkedList, checkAll } = this.state;
    console.log(checkedList);
    return (
      <div>
        <div style={{ borderBottom: '1px solid #E9E9E9' }}>
          <Checkbox
            indeterminate={indeterminate}
            onChange={this.onCheckAllChange}
            checked={checkAll}
          >
            Check all
          </Checkbox>
        </div>
        <br />
        <CheckboxGroup value={checkedList} onChange={this.onChange}>
          <Row>
            {plainOptions
              ? plainOptions.map(item => (
                  <Col span={8}>
                    <Checkbox value={item.dataIndex}>{item.title}</Checkbox>
                  </Col>
                ))
              : null}
          </Row>
        </CheckboxGroup>
      </div>
    );
  }
}

export default TestDemo;
