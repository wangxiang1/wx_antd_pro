import React, { Component } from 'react';

import { Avatar, Table } from 'antd';

/**
 *author: wangxiang
 *desc: 数据获取情况
 *date: 2019/12/10
 */
export default class DataCollection extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const data = [
      {
        data1: 'opdn1woop',
        data2: '1976',
      },
      {
        data1: 'xiying5-2',
        data2: '1472',
      },
      {
        data1: 'opdn1woop',
        data2: '1472',
      },
      {
        data1: 'xiying5',
        data2: '1472',
      },
      {
        data1: 'opdn1woop',
        data2: '1472',
      },
      {
        data1: 'opdn1woop',
        data2: '1976',
      },
      {
        data1: 'xiying5-2',
        data2: '1472',
      },
      {
        data1: 'opdn1woop',
        data2: '1472',
      },
      {
        data1: 'xiying5',
        data2: '1472',
      },
    ];

    const columns = [
      {
        title: '序号',
        align: 'center',
        width: 120,
        ellipsis: true,
        render: (text, record, index) => <div style={{ height: '24.5px' }}>{index + 1}</div>,
      },
      {
        title: '租户名称',
        dataIndex: 'data1',
        // width: 100,
        ellipsis: true,
      },
      {
        title: '获取数据次数',
        dataIndex: 'data2',
        // width: 100,
        align: 'right',
      },
    ];

    return (
      <div>
        <div
          style={{
            width: '100%',
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 700,
            color: 'black',
            margin: '10px 0',
          }}
        >
          数据获取情况
          <span style={{ fontSize: '14px', fontWeight: 400 }}>（数据申请租户共18个）</span>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          footer={() => (
            <div style={{ width: '100%', textAlign: 'center', height: '24px', lineHeight: '24px' }}>
              <a href="#">查看全部（10）</a>
            </div>
          )}
        />
      </div>
    );
  }
}
