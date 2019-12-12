import React, { Component } from 'react';

import { Row, Col, Card, Table } from 'antd';

/**
 *author: wangxiang
 *desc: 低活跃度租户清单
 *date: 2019/12/10
 */
export default class LowActivityTenantList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const data = [
      {
        tenantName: '杨萌',
        org: '联通网优智拉拉',
        activity: '低',
      },
      {
        tenantName: '赵玉田',
        org: '联通网优智拉拉',
        activity: '低',
      },
      {
        tenantName: '王东',
        org: '联通网优智拉拉',
        activity: '低',
      },
      {
        tenantName: '徐萍',
        org: '联通网优智拉拉',
        activity: '低',
      },
      {
        tenantName: '薛亚勇',
        org: '联通网优智拉拉',
        activity: '低',
      },
    ];

    const columns = [
      {
        title: '序号',
        width: '12%',
        align: 'center',
        ellipsis: true,
        render: (text, record, index) => index + 1,
      },
      {
        title: '租户名称',
        dataIndex: 'tenantName',
        ellipsis: true,
      },
      {
        title: '组织机构',
        ellipsis: true,
        dataIndex: 'org',
      },
      {
        title: '入驻时间',
        dataIndex: 'time',
        ellipsis: true,
        align: 'center',
        render: () => '2019-12-11 11:22:00',
      },
      {
        title: '活跃度',
        dataIndex: 'activity',
        align: 'center',
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
            margin: '-5px 0 10px 0',
          }}
        >
          低活跃度租户清单
        </div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          footer={() => (
            <div style={{ width: '100%', textAlign: 'center' }}>
              <a href="#">查看全部（10）</a>
            </div>
          )}
        />
      </div>
    );
  }
}
