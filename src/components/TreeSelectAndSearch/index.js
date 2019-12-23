/* eslint-disable prefer-const,react/jsx-indent,react/no-unused-state,comma-dangle,guard-for-in, no-param-reassign, react/destructuring-assignment, react/button-has-type, react/no-access-state-in-setstate */
/**
 *author: wangxiang
 *desc: treeSelect 和 模糊查询 （组织机构）
 *date: 2019/11/28
 */
import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import { connect } from 'dva';
import { Dropdown, Icon, Spin, Input, Tree } from 'antd';
import styles from './index.less';

const { TreeNode } = Tree;

@connect(({ registernew, loading }) => ({
  registernew,
  loading,
}))
class TreeSelectAndSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      treeData: [{ title: '中国联通', key: '0000', value: '0000', isLeaf: false }],
      visible: false,
      selectValue: '',
      data: props.value || undefined,
      searchValue: '', // dropdown 搜索框内容
      menus: [],
      fetching: false,
    };

    this.fetchOrg = debounce(this.fetchOrg, 800);
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps)
    if (nextProps.value !== this.state.data) {
      this.setState({ data: nextProps.value, selectValue: '' });
    }
  }

  resetState = () => {
    const { onChange } = this.props;
    const { data } = this.state;

    onChange(data);

    this.setState({
      searchValue: '',
      menus: [],
    });
  };

  handleVisibleChange = flag => {
    // console.log('flag', flag);
    if (!flag) {
      this.setState({ searchValue: '' });
    }

    this.setState({ visible: flag });
  };

  fetchOrg = val => {
    // console.log('fetchOrg', val);
    this.setState({ menus: [], fetching: true }, () => {
      const { dispatch } = this.props;
      if (val.trim()) {
        dispatch({
          type: 'registernew/fetchOrgInfoByName',
          payload: { orgName: val.trim() },
          callback: data => {
            this.setState({ menus: data, fetching: false });
          },
        });
      }
    });
  };

  handleSearchInputChange = e => {
    // console.log('handleSearchInputChange', e.target.value);
    const { searchValue } = this.state;
    if (searchValue !== e.target.value) {
      this.setState({ searchValue: e.target.value });
      this.fetchOrg(e.target.value);
    }
  };

  onSelect = (selectedKeys, info) => {
    // console.log('selected', selectedKeys, info);
    this.setState(
      {
        data: selectedKeys.length > 0 ? info.selectedNodes[0].key : '',
        selectValue: selectedKeys.length > 0 ? info.selectedNodes[0].props.title : '',
        visible: false,
      },
      this.resetState
    );
  };

  handleSelectMenu = e => {
    const value = e.target.dataset.code;
    const name = e.target.title;

    this.setState(
      {
        data: value,
        selectValue: name,
        visible: false,
      },
      this.resetState
    );
  };

  fetchDepartmentLevelInfo = (mdmOrgCode, treeNode, resolve) => {
    const { dispatch } = this.props;

    dispatch({
      type: 'registernew/fetchDepartmentLevelInfo',
      payload: { mdmOrgCode },
      callback: data => {
        treeNode.props.dataRef.children = data;
        this.setState({
          treeData: [...this.state.treeData],
        });
        resolve();
      },
    });
  };

  onLoadData = treeNode =>
    new Promise(resolve => {
      if (treeNode.props.children) {
        resolve();
        return;
      }
      this.fetchDepartmentLevelInfo(treeNode.props.value, treeNode, resolve);
    });

  renderTreeNodes = data =>
    data.map(item => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} value={item.value} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode key={item.key} {...item} dataRef={item} />;
    });

  render() {
    const { selectValue, searchValue, menus, treeData, fetching } = this.state;
    // console.log('com:', this.state);
    console.log('searchValue:', searchValue.trim(), !searchValue.trim());

    const menu = (
      <div className={styles['my-dropdown-menu']}>
        <div className={styles['search-input']}>
          <Input
            placeholder="请输入搜索内容"
            value={searchValue}
            onChange={this.handleSearchInputChange}
          />
        </div>
        <div className={styles['search-content']}>
          <div style={{ display: !searchValue.trim() ? 'block' : 'none' }}>
            {!searchValue.trim() ? (
              <Tree onSelect={this.onSelect} loadData={this.onLoadData}>
                {this.renderTreeNodes(treeData)}
              </Tree>
            ) : null}
          </div>
          <div style={{ display: searchValue.trim() ? 'block' : 'none', minHeight: '50px' }}>
            {!fetching ? (
              <div onClick={this.handleSelectMenu}>
                {menus.map(item => (
                  <div
                    className={styles['menu-item']}
                    key={item.orgCode}
                    title={item.orgName}
                    data-code={item.orgCode}
                  >
                    {item.orgName}
                  </div>
                ))}
              </div>
            ) : (
              <Spin size="small" style={{ margin: '8px' }} />
            )}
          </div>
        </div>
      </div>
    );

    return (
      <div className={styles['my-tree-select']}>
        <Dropdown
          overlay={menu}
          trigger={['click']}
          onVisibleChange={this.handleVisibleChange}
          visible={this.state.visible}
        >
          <Input
            className={styles['my-select-btn']}
            placeholder="请选择"
            readOnly
            value={selectValue}
            title={selectValue}
            suffix={
              <Icon
                className={styles['btn-icon']}
                type="down"
                onClick={() => {
                  // const {visible} = this.state;
                  this.setState({ visible: true });
                }}
              />
            }
          />
        </Dropdown>
      </div>
    );
  }
}

export default TreeSelectAndSearch;
