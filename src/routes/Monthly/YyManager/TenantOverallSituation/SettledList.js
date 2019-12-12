import React, { Component } from 'react';

import { Row, Col, Card, Table } from 'antd';

/**
 *author: wangxiang
 *desc: 新入驻清单
 *date: 2019/12/10
 */
export default class SettledList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const data = [
      {
        org: '联通在线',
        tenantNum: '10',
        nameList: '杨萌/杨冠宇',
        desc: '使用智汇平台的资源和数据构建本省NPS智eiosfnoiaregnoiadsnfio',
      },
      {
        org: '智网中心',
        tenantNum: '10',
        nameList: '杨萌/杨冠宇',
        desc: '使用智汇平台的资源和数据构建本省NPS智eiosfnoiaregnoiadsnfio',
      },
      {
        org: '租赁公司',
        tenantNum: '10',
        nameList: '杨萌/杨冠宇',
        desc: '使用智汇平台的资源和数据构建本省NPS智eiosfnoiaregnoiadsnfio',
      },
      {
        org: '山东分公司',
        tenantNum: '10',
        nameList: '杨萌/杨冠宇',
        desc: '使用智汇平台的资源和数据构建本省NPS智eiosfnoiaregnoiadsnfio',
      },
      {
        org: '参赛选手',
        tenantNum: '10',
        nameList: '杨萌/杨冠宇/薛亚勇/吕秋鸣',
        desc: '使用智汇平台的资源和数据构建本省NPS智eiosfnoiaregnoiadsnfio',
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
        title: '组织机构',
        ellipsis: true,
        width: 100,
        dataIndex: 'org',
      },
      {
        title: '租户数量',
        dataIndex: 'tenantNum',
        ellipsis: true,
        width: 100,
        align: 'right',
      },
      {
        title: '租户名单',
        dataIndex: 'nameList',
        ellipsis: true,
      },
      {
        title: '使用业务场景',
        dataIndex: 'desc',
        ellipsis: true,
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
          新入驻清单
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
