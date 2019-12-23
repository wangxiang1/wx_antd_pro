import React, { Component } from 'react';

import { Card, Table } from 'antd';
import styles from './index.less';

/**
 *author: wangxiang
 *desc: 项目概览
 *date: 2019/12/10
 */
export default class ProjectOverview extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const data = [
      {
        projectName: '联通网优智能分析系统',
        projectManager: '杨萌',
        userNum: 8,
        users: '杨萌/杨冠宇/赵玉田/王东/徐萍',
        pro: '数据仓库',
      },
      {
        projectName: '联通网优智能分析系统',
        projectManager: '杨萌',
        userNum: 8,
        users: '杨萌/杨冠宇/赵玉田/王东/徐萍',
        pro: '数据挖掘、KAFKA',
      },
      {
        projectName: '联通网优智能分析系统',
        projectManager: '杨萌',
        userNum: 8,
        users: '杨萌/杨冠宇/赵玉田/王东/徐萍',
        pro: '实时计算、数据挖掘、KAFKA、实时计算',
      },
      {
        projectName: '联通网优智能分析系统',
        projectManager: '杨萌',
        userNum: 8,
        users: '杨萌/杨冠宇/赵玉田/王东/徐萍',
        pro: '数据仓库',
      },
      {
        projectName: '联通网优智能分析系统',
        projectManager: '杨萌',
        userNum: 8,
        users: '杨萌/杨冠宇/赵玉田/王东/徐萍',
        pro: '数据仓库',
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
        title: '项目名称',
        dataIndex: 'projectName',
        ellipsis: true,
      },
      {
        title: '项目管理员',
        dataIndex: 'projectManager',
        width: 100,
        ellipsis: true,
      },
      {
        title: '项目用户数',
        ellipsis: true,
        width: 100,
        align: 'right',
        dataIndex: 'userNum',
      },
      {
        title: '项目用户名单',
        dataIndex: 'users',
        ellipsis: true,
        render: () => '杨萌/杨冠宇/赵玉田/王东/徐萍',
      },
      {
        title: '项目服务',
        dataIndex: 'pro',
        ellipsis: true,
      },
    ];

    return (
      <Card title="项目概况" className={styles['project-overview']} style={{ width: '100%' }}>
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
      </Card>
    );
  }
}
