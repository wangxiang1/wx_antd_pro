import React, { Component } from 'react';

import { Card, Table } from 'antd';
import styles from './index.less';

/**
 *author: wangxiang
 *desc: 项目概览
 *date: 2019/12/10
 */
export default class ServiceUsed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredInfo: null,
    };
  }

  handleChange = (pagination, filters) => {
    console.log('Various parameters', filters);
    this.setState({
      filteredInfo: filters,
    });
  };

  render() {
    const data = [
      {
        serviceName: 'CDH资源',
        quotaName: 'CPU/C',
        data1: 140,
        dataMax: 140,
        dataPre: 1.93,
      },
      {
        serviceName: 'CDH资源',
        quotaName: '内存/G',
        data1: 140,
        dataMax: 140,
        dataPre: 1.93,
      },
      {
        serviceName: 'CDH资源',
        quotaName: '存储/T',
        projectManager: '杨萌',
        data1: 140,
        dataMax: 140,
        dataPre: 1.93,
      },
      {
        serviceName: 'CDH资源',
        quotaName: '文件数/M',
        data1: 140,
        dataMax: 140,
        dataPre: 1.93,
      },

      {
        serviceName: 'Kafka',
        quotaName: 'CPU/C',
        data1: 140,
        dataMax: 140,
        dataPre: 1.93,
      },
      {
        serviceName: 'Kafka',
        quotaName: '内存/G',
        data1: 140,
        dataMax: 140,
        dataPre: 1.93,
      },
      {
        serviceName: 'Kafka',
        quotaName: '存储/T',
        projectManager: '杨萌',
        data1: 140,
        dataMax: 140,
        dataPre: 1.93,
      },

      {
        serviceName: 'Hive',
        quotaName: 'CPU/C',
        data1: 140,
        dataMax: 140,
        dataPre: 1.93,
      },
      {
        serviceName: 'Hive',
        quotaName: '内存/G',
        data1: 140,
        dataMax: 140,
        dataPre: 1.93,
      },
      {
        serviceName: 'Hive',
        quotaName: '存储/T',
        projectManager: '杨萌',
        data1: 140,
        dataMax: 140,
        dataPre: 1.93,
      },
    ];

    let { filteredInfo } = this.state;
    filteredInfo = filteredInfo || {};
    console.log(filteredInfo);

    const columns = [
      {
        title: '服务名称',
        dataIndex: 'serviceName',
        ellipsis: true,
        filters: [
          { text: 'CDH资源', value: 'CDH资源' },
          { text: 'Kafka', value: 'Kafka' },
          { text: 'Hive', value: 'Hive' },
        ],
        onFilter: (value, record) => record.serviceName.includes(value),
        filteredValue: filteredInfo.serviceName || ['CDH资源', 'Kafka'],
        render: (text, row, index) => {
          const obj = {
            children: text,
            props: {},
          };

          if (index === 0) {
            obj.props.rowSpan = 4;
          } else if (index > 0 && index < 4) {
            obj.props.rowSpan = 0;
          } else if (index === 4) {
            obj.props.rowSpan = 3;
          } else if (index > 4 && index < 7) {
            obj.props.rowSpan = 0;
          } else if (index === 7) {
            obj.props.rowSpan = 3;
          } else if (index > 7 && index < 10) {
            obj.props.rowSpan = 0;
          }

          return obj;
        },
      },
      {
        title: '配额名称',
        dataIndex: 'quotaName',
        // width: 100,
        ellipsis: true,
      },
      {
        title: '服务分配值',
        ellipsis: true,
        // width: 100,
        align: 'right',
        dataIndex: 'data1',
      },
      {
        title: '使用最大值',
        dataIndex: 'dataMax',
        // width: 100,
        align: 'right',
        ellipsis: true,
      },
      {
        title: '月均使用值',
        dataIndex: 'dataPre',
        // width: 100,
        align: 'right',
        ellipsis: true,
      },
    ];

    return (
      <Card title="服务概况" className={styles['service-used']} style={{ width: '100%' }}>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          onChange={this.handleChange}
        />
        <div className={styles['warning-text']}>
          <span className={styles.title}>使用建议：</span>
          <span>hive存储以及CPU使用较饱和，建议扩容；</span>
        </div>
      </Card>
    );
  }
}
