import React, { Component } from 'react';

import { Table } from 'antd';

/**
 *author: wangxiang
 *desc: 集群资源监控情况
 *date: 2019/12/10
 */
export default class ClusterResourceMonitor extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const data = [
      {
        data1: '逻辑多租大数据集群-1',
        data2: '1472',
        data3: '92%',
        data4: '8.54',
        data5: '92%',
        data6: '1.33',
        data7: '92%',
      },
      {
        data1: '逻辑多租大数据集群-2',
        data2: '1472',
        data3: '92%',
        data4: '8.54',
        data5: '92%',
        data6: '1.33',
        data7: '92%',
      },
      {
        data1: '容器化大数据集群',
        data2: '1472',
        data3: '92%',
        data4: '8.54',
        data5: '92%',
        data6: '1.33',
        data7: '92%',
      },
      {
        data1: '云数据库与网络中间件',
        data2: '1472',
        data3: '92%',
        data4: '8.54',
        data5: '92%',
        data6: '1.33',
        data7: '92%',
      },
      {
        data1: '能力平台集群',
        data2: '1472',
        data3: '92%',
        data4: '8.54',
        data5: '92%',
        data6: '1.33',
        data7: '92%',
      },
    ];

    const columns = [
      {
        title: '集群名称',
        width: 160,
        dataIndex: 'data1',
        ellipsis: true,
      },
      {
        title: 'CPU总量/C',
        dataIndex: 'data2',
        // width: 100,
        align: 'right',
      },
      {
        title: 'CPU使用率峰值',
        dataIndex: 'data3',
        // width: 100,
        align: 'right',
      },
      {
        title: '内存总量/T',
        dataIndex: 'data4',
        // width: 130,
        align: 'right',
      },
      {
        title: '内存使用率峰值',
        dataIndex: 'data5',
        // width: 130,
        align: 'right',
      },
      {
        title: '存储总量/P',
        dataIndex: 'data6',
        // width: 130,
        align: 'right',
      },
      {
        title: '存储使用率峰值',
        dataIndex: 'data7',
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
          集群资源监控情况
        </div>
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
    );
  }
}
