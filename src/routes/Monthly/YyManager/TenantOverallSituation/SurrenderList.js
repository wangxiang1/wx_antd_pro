import React, { Component } from 'react';

import { Table } from 'antd';

/**
 *author: wangxiang
 *desc: 退租清单
 *date: 2019/12/10
 */
export default class SurrenderList extends Component {
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
      },
      {
        org: '智网中心',
        tenantNum: '10',
        nameList: '杨萌/杨冠宇',
      },
      {
        org: '租赁公司',
        tenantNum: '10',
        nameList: '杨萌/杨冠宇',
      },
      {
        org: '山东分公司',
        tenantNum: '10',
        nameList: '杨萌/杨冠宇',
      },
      {
        org: '参赛选手',
        tenantNum: '10',
        nameList: '杨萌/杨冠宇/薛亚勇/吕秋鸣',
      },
    ];

    const columns = [
      {
        title: '序号',
        width: '14%',
        align: 'center',
        ellipsis: true,
        render: (text, record, index) => index + 1,
      },
      {
        title: '组织机构',
        width: 100,
        ellipsis: true,
        dataIndex: 'org',
      },
      {
        title: '租户数量',
        dataIndex: 'tenantNum',
        width: 100,
        ellipsis: true,
        align: 'right',
      },
      {
        title: '租户名单',
        dataIndex: 'nameList',
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
          退租清单
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
