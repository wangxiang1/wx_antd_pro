import React, { Component } from 'react';

import { Row, Col, Card, Table } from 'antd';

/**
 *author: wangxiang
 *desc: 慧企云平台机器数量分布/台
 *date: 2019/12/10
 */
export default class PlatformsMachinesHQY extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const data = [
      {
        data1: '逻辑多租大数据集群-1',
        data2: '亦庄301',
        data3: '81',
        data4: '12',
        data5: '0',
        data6: '0',
      },
      {
        data1: '逻辑多租大数据集群-2',
        data2: '亦庄402-用户访问',
        data3: '81',
        data4: '12',
        data5: '0',
        data6: '0',
      },
      {
        data1: '容器化大数据集群',
        data2: '廊坊224-dmz',
        data3: '81',
        data4: '12',
        data5: '0',
        data6: '0',
      },
      {
        data1: '云数据库与网络中间件',
        data2: '廊坊224-核心',
        data3: '81',
        data4: '12',
        data5: '0',
        data6: '0',
      },
      {
        data1: '其他',
        data2: '廊坊224-用户访问',
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
        title: '集群名称',
        width: 140,
        dataIndex: 'data1',
        ellipsis: true,
      },
      {
        title: '物理机',
        dataIndex: 'data3',
        // width: 100,
        align: 'right',
      },
      {
        title: '管理节点',
        dataIndex: 'data4',
        // width: 100,
        align: 'right',
      },
      {
        title: '工作节点',
        dataIndex: 'data5',
        // width: 130,
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
          慧企云平台机器数量分布/台
        </div>
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
    );
  }
}
