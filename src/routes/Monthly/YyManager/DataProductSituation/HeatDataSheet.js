import React, { Component } from 'react';

import { Table, Avatar } from 'antd';

/**
 *author: wangxiang
 *desc: 热度数据表获取情况
 *date: 2019/12/10
 */
export default class HeatDataSheet extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const data = [
      {
        data1: 'dwa_d_ia_basic_user_web',
        data2: '1976',
      },
      {
        data1: 'dwa_d_ia_basic_user_web-2',
        data2: '1472',
      },
      {
        data1: 'dwa_d_ia_basic_user_web',
        data2: '1472',
      },
      {
        data1: 'dwa_d_ia_basic_user_web',
        data2: '1472',
      },
      {
        data1: 'dwa_d_ia_basic_user_web',
        data2: '1472',
      },
      {
        data1: 'dwa_d_ia_basic_user_web',
        data2: '1976',
      },
      {
        data1: 'dwa_d_ia_basic_user_web-2',
        data2: '1472',
      },
      {
        data1: 'dwa_d_ia_basic_user_web',
        data2: '1472',
      },
      {
        data1: 'dwa_d_ia_basic_user_web',
        data2: '1472',
      },
      {
        data1: 'dwa_d_ia_basic_user_web',
        data2: '1472',
      },
    ];

    const columns = [
      {
        title: 'TOP10',
        width: 120,
        align: 'center',
        ellipsis: true,
        render: (text, record, index) => (
          <Avatar
            style={{ backgroundColor: index < 3 ? '#FFC237' : '#bdbaba', verticalAlign: 'middle' }}
            size="small"
          >
            {index + 1}
          </Avatar>
        ),
      },
      {
        title: '数据表名称',
        dataIndex: 'data1',
        // width: 100,
        ellipsis: true,
      },
      {
        title: '获取次数',
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
          热度数据表获取情况
          <span style={{ fontSize: '14px', fontWeight: 400 }}>（共申请100张）</span>
        </div>
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
    );
  }
}
