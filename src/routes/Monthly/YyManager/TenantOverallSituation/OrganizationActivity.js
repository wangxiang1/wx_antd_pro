import React, { Component } from 'react';

import { Row, Col, Card, Table } from 'antd';

/**
 *author: wangxiang
 *desc: 组织机构活跃度概况
 *date: 2019/12/10
 */
export default class OrganizationActivity extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const data = [
      {
        org: '总公司',
        tenantNum: '22',
        highTenantNum: '10',
        lowTenantNum: '5',
      },
      {
        org: '省分公司',
        tenantNum: '22',
        highTenantNum: '10',
        lowTenantNum: '5',
      },
      {
        org: '子公司',
        tenantNum: '22',
        highTenantNum: '10',
        lowTenantNum: '5',
      },
      {
        org: '其他',
        tenantNum: '22',
        highTenantNum: '10',
        lowTenantNum: '5',
      },
      {
        org: '总计',
        tenantNum: '60',
        highTenantNum: '15',
        lowTenantNum: '5',
      },
    ];

    const columns = [
      {
        title: '序号',
        width: '10%',
        align: 'center',
        ellipsis: true,
        render: (text, record, index) => index + 1,
      },
      {
        title: '组织类型',
        dataIndex: 'org',
        width: 100,
        align: 'left',
      },
      {
        title: '租户数量',
        dataIndex: 'tenantNum',
        width: 100,
        align: 'right',
      },
      {
        title: '高活跃度租户量',
        dataIndex: 'highTenantNum',
        // width: 130,
        align: 'right',
      },
      {
        title: '无活跃度租户量',
        dataIndex: 'lowTenantNum',
        width: 130,
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
            margin: '-5px 0 10px 0',
          }}
        >
          组织机构活跃度概况
        </div>
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
    );
  }
}
