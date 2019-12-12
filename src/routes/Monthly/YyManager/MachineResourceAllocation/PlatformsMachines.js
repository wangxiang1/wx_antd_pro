import React, { Component } from 'react';

import { Row, Col, Card, Table } from 'antd';

/**
 *author: wangxiang
 *desc: 能力平台机器数量分布/台
 *date: 2019/12/10
 */
export default class PlatformsMachines extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const data = [
      {
        data1: '亦庄',
        data2: '亦庄301',
        data3: '81',
        data4: '12',
        data5: '0',
        data6: '0',
      },
      {
        data1: '亦庄',
        data2: '亦庄402-用户访问',
        data3: '81',
        data4: '12',
        data5: '0',
        data6: '0',
      },
      {
        data1: '廊坊',
        data2: '廊坊224-dmz',
        data3: '81',
        data4: '12',
        data5: '0',
        data6: '0',
      },
      {
        data1: '廊坊',
        data2: '廊坊224-核心',
        data3: '81',
        data4: '12',
        data5: '0',
        data6: '0',
      },
      {
        data1: '廊坊',
        data2: '廊坊224-用户访问',
        data3: '81',
        data4: '12',
        data5: '0',
        data6: '0',
      },
      {
        data1: '廊坊',
        data2: '廊坊324-大数据区',
        data3: '81',
        data4: '12',
        data5: '0',
        data6: '0',
      },
      {
        data1: '廊坊',
        data2: '廊坊419-核心区',
        data3: '81',
        data4: '12',
        data5: '0',
        data6: '0',
      },
      {
        data1: '廊坊',
        data2: '廊坊225-核心区',
        data3: '81',
        data4: '12',
        data5: '0',
        data6: '0',
      },
      {
        data1: '廊坊',
        data2: '廊坊423',
        data3: '81',
        data4: '12',
        data5: '0',
        data6: '0',
      },

      {
        data1: '合计',
        data3: '81',
        data4: '12',
        data5: '0',
        data6: '0',
      },
    ];

    const columns = [
      {
        title: '地点',
        align: 'center',
        dataIndex: 'data1',
        ellipsis: true,
        render: (text, row, index) => {
          if (index !== 9) {
            return text;
          }
          return {
            children: text,
            props: {
              colSpan: 2,
            },
          };
        },
      },
      {
        title: '机房名称',
        dataIndex: 'data2',
        width: 120,
        ellipsis: true,
        align: 'left',
        render: (text, row, index) => {
          const obj = {
            children: text,
            props: {},
          };
          if (index === 9) {
            obj.props.colSpan = 0;
          }
          return obj;
        },
      },
      {
        title: '物理机',
        dataIndex: 'data3',
        // width: 100,
        align: 'right',
      },
      {
        title: '空闲物理机',
        dataIndex: 'data4',
        width: 100,
        align: 'right',
      },
      {
        title: '虚拟机',
        dataIndex: 'data5',
        // width: 130,
        align: 'right',
      },
      {
        title: '空闲虚拟机',
        dataIndex: 'data6',
        width: 100,
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
          能力平台机器数量分布/台
        </div>
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
    );
  }
}
