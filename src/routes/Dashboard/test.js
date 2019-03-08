/* eslint-disable react/jsx-tag-spacing,prefer-destructuring,no-param-reassign,no-unreachable,prefer-const,linebreak-style */
import React, { PureComponent } from 'react';
import { connect } from 'dva/index';
import { Card } from 'antd';

@connect(({ project,loading }) => ({
  project,
  projectLoading: loading.effects['project/fetchNotice'],
}))
export default class DataBackup extends PureComponent {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'project/fetchNotice',
    });

  }

  render() {

    console.log('test-props:', this.props);
    return (
      <Card bordered={false}>
        wangtest
      </Card>
    );
  }
}
