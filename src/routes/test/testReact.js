/* eslint-disable*/
/*
 * @Author: wangxiang
 * @Date: 2019-07-10 11:18:31
 * @Last Modified by: wangxiang
 * @Last Modified time: 2020-03-23 11:03:36
 */
import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import { Dropdown, Menu, Icon, Spin, Input, Tree } from 'antd';
import moment from 'moment';
import { Link } from 'react-router-dom';
import styles from './testreact.less';

const { TreeNode } = Tree;

class testReact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      selectValue: '',
      selectCode: '',
      searchValue: '',
      searchValueFlag: '',
      menus: [],
    };

    this.fetchOrg = debounce(this.fetchOrg, 800);
  }

  resetState = () => {
    this.setState({
      searchValue: '',
      searchValueFlag: '',
      menus: [],
    });
  };

  handleVisibleChange = flag => {
    console.log('flag', flag);
    if (!flag) {
      this.setState({ searchValue: '', searchValueFlag: '' });
    }

    this.setState({ visible: flag });
  };

  fetchOrg = val => {
    console.log('fetchOrg', moment(), val);
    this.setState({ menus: [] }, () => {
      setTimeout(() => {
        const menus = [
          {
            orgName: '中国联通总部',
            orgCode: '001000',
          },
          {
            orgName: '中国联通总部-管理层',
            orgCode: '00100033539',
          },
          {
            orgName: '中国联通总部-企业发展部/法律部',
            orgCode: '00100076132',
          },
          {
            orgName: '中国联通总部-财务部',
            orgCode: '00100000400',
          },
          {
            orgName: '中国联通总部-人力资源部（党组组织部）',
            orgCode: '00100085839',
          },
          {
            orgName: '中国联通总部-市场部',
            orgCode: '00100021700',
          },
          {
            orgName: '中国联通总部-网络发展部',
            orgCode: '00100046438',
          },
          {
            orgName: '中国联通总部-实体渠道部',
            orgCode: '00100032217',
          },
          {
            orgName: '中国联通总部-政企客户事业部',
            orgCode: '00100011591',
          },
          {
            orgName: '中国联通总部-电子商务部',
            orgCode: '00100061370',
          },
          {
            orgName: '中国联通总部-互联网运营部',
            orgCode: '00100058994',
          },
          {
            orgName: '中国联通总部-客户服务部',
            orgCode: '00100001000',
          },
          {
            orgName: '中国联通总部-监管事务部',
            orgCode: '00100006200',
          },
          {
            orgName: '中国联通总部-信息化部（信息安全部）',
            orgCode: '00100012230',
          },
          {
            orgName: '中国联通总部-运行维护部',
            orgCode: '00100084258',
          },
          {
            orgName: '中国联通总部-技术部',
            orgCode: '00100001700',
          },
          {
            orgName: '中国联通总部-物资采购与管理部',
            orgCode: '00100002400',
          },
          {
            orgName: '中国联通总部-审计部',
            orgCode: '00100001800',
          },
          {
            orgName: '中国联通总部-党群工作部（党组宣传部、党组统战部）',
            orgCode: '00100061071',
          },
          {
            orgName: '中国联通总部-党组巡视办',
            orgCode: '00100086215',
          },
          {
            orgName: '中国联通总部-党群工作部（党组宣传部）',
            orgCode: '00100067966',
          },
        ];
        console.log('setTimeout', moment());
        this.setState({ searchValue: val, menus });
      }, 1500);
    });
  };

  handleSearchInputChange = e => {
    // console.log('handleSearchInputChange', e.target.value);
    const { searchValueFlag } = this.state;
    if (searchValueFlag !== e.target.value) {
      this.setState({ searchValueFlag: e.target.value });
      this.fetchOrg(e.target.value);
    }
  };

  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
    this.setState(
      {
        selectCode: selectedKeys.length > 0 ? info.selectedNodes[0].key : '',
        selectValue: selectedKeys.length > 0 ? info.selectedNodes[0].props.title : '',
        visible: false,
      },
      this.resetState
    );
  };

  handleSelectMenu = ({ item, key }) => {
    console.log('handleSelectMenu', item, key);
    this.setState(
      {
        selectCode: key,
        selectValue: item.props.title,
        visible: false,
      },
      this.resetState
    );
  };

  render() {
    const { selectValue, searchValueFlag, menus } = this.state;
    console.log(this.props);

    const menu = (
      <div className={styles['my-dropdown-menu']}>
        <div className={styles['search-input']}>
          <Input
            placeholder="请输入搜索内容"
            value={searchValueFlag}
            onChange={this.handleSearchInputChange}
          />
        </div>
        <div className={styles['search-content']}>
          <div style={{ display: !searchValueFlag ? 'block' : 'none' }}>
            {!searchValueFlag ? (
              <Tree onSelect={this.onSelect}>
                <TreeNode title="parent 1" key="0-0">
                  <TreeNode title="parent 1-0" key="0-0-0" disabled>
                    <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
                    <TreeNode title="leaf" key="0-0-0-1" />
                  </TreeNode>
                  <TreeNode title="parent 1-1" key="0-0-1">
                    <TreeNode title={<span style={{ color: '#1890ff' }}>sss</span>} key="0-0-1-0" />
                  </TreeNode>
                </TreeNode>
              </Tree>
            ) : null}
          </div>
          <div style={{ display: searchValueFlag ? 'block' : 'none', minHeight: '50px' }}>
            {menus.length > 0 ? (
              <Menu onSelect={this.handleSelectMenu}>
                {menus.length > 0
                  ? menus.map(item => (
                      <Menu.Item key={item.orgCode} title={item.orgName}>
                        {item.orgName}
                      </Menu.Item>
                    ))
                  : null}
              </Menu>
            ) : (
              <Spin size="small" style={{ margin: '8px' }} />
            )}
          </div>
        </div>
      </div>
    );

    return (
      <div className={styles['my-tree-select']} style={{ width: '300px', height: '1000px' }}>
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
            suffix={<Icon className={styles['btn-icon']} type="down" />}
          />
        </Dropdown>
        <div>
          上级页面传递的location：
          {this.props.location.state ? JSON.stringify(this.props.location.state) : ''}
        </div>

        <Link
          to={{
            pathname: '/testState',
            state: this.props.location.state,
          }}
        >
          返回
        </Link>

        <Link
          to={{
            pathname: '/testDemo',
            state: {
              name: '三级页面参数',
            },
          }}
        >
          三级页面
        </Link>
      </div>
    );
  }
}

export default testReact;
