/* eslint-disable no-script-url,react/jsx-curly-brace-presence,react/no-access-state-in-setstate,no-param-reassign,react/jsx-indent,class-methods-use-this,react/jsx-closing-tag-location,react/no-unused-state,no-unused-vars,react/destructuring-assignment,prefer-const,array-callback-return */
import React from 'react';
import {
  Input,
  Select,
  Button,
  Table,
  Divider,
  Row,
  Col,
  Form,
  Icon,
  Menu,
  TreeSelect,
  DatePicker,
  notification,
  Dropdown,
  Spin,
} from 'antd';
import { connect } from 'dva';
import moment from 'moment';
import { Link } from 'dva/router';
import style from './index.less';
import Ellipsis from '../../../components/Ellipsis';
import TreeSelectAndSearch from '../../../components/TreeSelectAndSearch';
import { deleteBlank } from '../../../utils/utils';

const FormItem = Form.Item;
/**
 *author: wangxiang
 *desc: 租户数据使用情况
 *date: 2019/12/5
 */
@connect(({ tenantData, loading }) => ({
  tenantData,
  loading,
}))
@Form.create()
export default class TenantDataUse extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      expandForm: false,
      current: 1,
      pageSize: 10,
      sort: '',
      order: '',
      tenantId: '',
      orgCode: '',
      startTime: moment()
        .subtract(7, 'days')
        .format('YYYY-MM-DD HH:mm:ss'),
      endTime: moment().format('YYYY-MM-DD HH:mm:ss'),
    };
  }

  componentDidMount() {
    this.fetchTenantData();
  }

  fetchTenantData = () => {
    const { dispatch } = this.props;

    const {
      current,
      pageSize,
      sort,
      order,
      tenantId,
      tenantName,
      orgCode,
      startTime,
      endTime,
    } = this.state;

    dispatch({
      type: 'tenantData/fetchTenantData',
      payload: {
        current,
        pageSize,
        sort,
        order,
        tenantId: deleteBlank(tenantId),
        tenantName: deleteBlank(tenantName),
        organization: orgCode,
        startTime,
        endTime,
      },
    });
  };

  tableChage(pagination, filter, sorter) {
    this.setState(
      {
        current: pagination.current,
        pageSize: pagination.pageSize,
        sort: sorter && sorter.field ? sorter.field : '',
        order: sorter && sorter.order ? (sorter.order === 'ascend' ? 'asc' : 'desc') : '',
      },
      this.fetchTenantData
    );
  }

  handleFormReset = () => {
    const { form } = this.props;
    form.resetFields();
    form.setFieldsValue({
      startTime: moment()
        .subtract(7, 'days')
        .format('YYYY-MM-DD HH:mm:ss'),
      endTime: moment().format('YYYY-MM-DD HH:mm:ss'),
      orgCode: '',
    });
  };

  toggleForm = () => {
    const { expandForm } = this.state;
    this.setState({
      expandForm: !expandForm,
    });
  };

  handleUpload = () => {
    const {
      tenantData: { tenantDataInfo },
    } = this.props;

    if (tenantDataInfo.data === null || tenantDataInfo.data.length === 0) {
      notification.warning({
        message: '导出内容不能为空',
        description: '',
      });
      return;
    }

    const { dispatch } = this.props;

    const { sort, order, tenantId, tenantName, orgCode, startTime, endTime } = this.state;

    dispatch({
      type: 'tenantData/fetchTenantDataFile',
      payload: {
        sort,
        order,
        tenantId: deleteBlank(tenantId),
        tenantName: deleteBlank(tenantName),
        organization: orgCode,
        startTime,
        endTime,
        filename: '租户数据使用情况.xls',
      },
    });
  };

  handleSearch = () => {
    const { form } = this.props;
    const { startTime, endTime } = this.state;

    form.validateFields((err, fieldsValue) => {
      if (err) return;

      const { time } = fieldsValue;

      const startTime1 = time
        ? time.length > 0 && time[0]
          ? moment(time[0]).format('YYYY-MM-DD HH:mm:ss')
          : ''
        : startTime;
      const endTime1 = time
        ? time.length > 0 && time[1]
          ? moment(time[1]).format('YYYY-MM-DD HH:mm:ss')
          : ''
        : endTime;

      this.setState(
        { ...fieldsValue, startTime: startTime1, endTime: endTime1, current: 1, pageSize: 10 },
        this.fetchTenantData
      );
    });
  };

  handleChangeSort = e => {
    this.setState({ sort: e.target.value, current: 1 }, this.fetchTenantData);
  };

  renderSimpleForm() {
    const { form } = this.props;
    const { getFieldDecorator } = form;

    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
    };

    return (
      <Form onSubmit={this.handleSearch} layout="inline">
        <Row gutter={10}>
          <Col md={7} sm={24}>
            <FormItem {...formItemLayout} label="租户ID">
              {getFieldDecorator('tenantId', {
                initialValue: '',
              })(<Input placeholder="请输入" style={{ width: '100%' }} />)}
            </FormItem>
          </Col>
          <Col md={7} sm={24}>
            <FormItem {...formItemLayout} label="租户名称">
              {getFieldDecorator('tenantName', {
                initialValue: '',
              })(<Input placeholder="请输入" style={{ width: '100%' }} />)}
            </FormItem>
          </Col>
          <Col md={6} sm={24}>
            <span className={style.submitButtons} style={{ paddingLeft: 20, paddingRight: 24 }}>
              <Button type="primary" onClick={this.handleSearch} style={{ marginLeft: -25 }}>
                查询
              </Button>
              <Button style={{ marginLeft: 5 }} onClick={this.handleFormReset}>
                重置
              </Button>
              <Button type="primary" style={{ marginLeft: 5 }} onClick={this.handleUpload}>
                导出Excel
              </Button>
              <a style={{ marginLeft: 5 }} onClick={this.toggleForm}>
                展开 <Icon type="down" />
              </a>
            </span>
          </Col>
        </Row>
      </Form>
    );
  }

  onChangeTime = (dates, dateStrings) => {
    this.setState({ startTime: dateStrings[0], endTime: dateStrings[1] });
    // console.log('From: ', dates[0], ', to: ', dates[1]);
    // console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
  };

  renderAdvancedForm() {
    const { form } = this.props;
    const { getFieldDecorator } = form;

    const { startTime, endTime } = this.state;

    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
    };
    return (
      <Form layout="inline">
        <Row gutter={10}>
          <Col md={7} sm={24}>
            <FormItem {...formItemLayout} label="租户ID">
              {getFieldDecorator('tenantId', {
                initialValue: '',
              })(<Input placeholder="请输入" style={{ width: '100%' }} />)}
            </FormItem>
          </Col>
          <Col md={7} sm={24}>
            <FormItem {...formItemLayout} label="租户名称">
              {getFieldDecorator('tenantName', {
                initialValue: '',
              })(<Input placeholder="请输入" style={{ width: '100%' }} />)}
            </FormItem>
          </Col>
          <Col md={6} sm={24}>
            <span className={style.submitButtons} style={{ paddingLeft: 20, paddingRight: 24 }}>
              <Button type="primary" onClick={this.handleSearch} style={{ marginLeft: -25 }}>
                查询
              </Button>
              <Button style={{ marginLeft: 5 }} onClick={this.handleFormReset}>
                重置
              </Button>
              <Button type="primary" style={{ marginLeft: 5 }} onClick={this.handleUpload}>
                导出Excel
              </Button>
              <a style={{ marginLeft: 5 }} onClick={this.toggleForm}>
                收起 <Icon type="up" />
              </a>
            </span>
          </Col>
        </Row>
        <Row gutter={10}>
          <Col span={7}>
            <FormItem {...formItemLayout} label="组织机构">
              {getFieldDecorator('orgCode', {
                initialValue: '',
              })(
                <TreeSelectAndSearch
                  onChange={val => {
                    console.log(val);
                  }}
                />
              )}
            </FormItem>
          </Col>
          <Col md={12} sm={24}>
            <FormItem {...formItemLayout} label="任务开始时间">
              {getFieldDecorator('time', {
                initialValue: [
                  startTime ? moment(startTime, 'YYYY-MM-DD HH:mm:ss') : '',
                  endTime ? moment(endTime, 'YYYY-MM-DD HH:mm:ss') : '',
                ],
              })(
                <DatePicker.RangePicker
                  showTime
                  format="YYYY-MM-DD HH:mm:ss"
                  onChange={this.onChangeTime}
                />
              )}
            </FormItem>
          </Col>
        </Row>
        {/* <Row>
          <Col span={7}>
            <FormItem {...formItemLayout} label="组织机构">
              {getFieldDecorator('orgCode', {
                initialValue: '',
              })(
                <TreeSelectAndSearch onChange={(val) => {console.log(val)}} />
              )}
            </FormItem>
          </Col>
        </Row> */}
      </Form>
    );
  }

  renderForm() {
    const { expandForm } = this.state;
    return expandForm ? this.renderAdvancedForm() : this.renderSimpleForm();
  }

  render() {
    const {
      tenantData: { tenantDataInfo },
      loading,
    } = this.props;

    const { current, pageSize, startTime, endTime } = this.state;

    const columns = [
      {
        title: '序号',
        width: '5%',
        align: 'center',
        render: (text, record, index) => (
          <span>{(this.state.current - 1) * this.state.pageSize + index + 1}</span>
        ),
      },
      {
        title: '租户ID',
        dataIndex: 'tenantId',
        width: '15%',
        render: text => (
          <Ellipsis lines={1} tooltip>
            {text}
          </Ellipsis>
        ),
      },
      {
        title: '租户名称',
        dataIndex: 'tenantName',
        key: 'tenantName',
        width: '15%',
        render: text => (
          <Ellipsis lines={1} tooltip>
            {text}
          </Ellipsis>
        ),
      },
      {
        title: '组织机构',
        dataIndex: 'orgnization',
        width: '15%',
        render: text => (
          <Ellipsis lines={1} tooltip>
            {text || '-'}
          </Ellipsis>
        ),
      },
      {
        title: '新增申请单量',
        dataIndex: 'applyNum',
        key: 'applyNum',
        align: 'right',
        sorter: true,
        width: 100,
        render: (text, record) => {
          if (startTime) {
            return (
              <Link
                to={`/console/Operation/dataApplicationForm/${
                  record.tenantName
                }/${startTime}/${endTime}`}
              >
                {text || text === 0 ? text.toLocaleString() : ''}
              </Link>
            );
          } else {
            return (
              <Link to={`/console/Operation/dataApplicationForm/${record.tenantName}`}>
                {text || text === 0 ? text.toLocaleString() : ''}
              </Link>
            );
          }

          // return (
          //   <Link to={`/console/Operation/dataApplicationForm/${record.tenantName}`}>
          //     {text || text === 0 ? text.toLocaleString() : ''}
          //   </Link>
          // );
        },
      },
      {
        title: '数据产品量',
        dataIndex: 'applyProduct',
        key: 'applyProduct',
        width: 110,
        align: 'right',
        sorter: true,
        render: (text, record) => {
          if (startTime) {
            return (
              <Link
                to={`/console/Operation/tenantProduct/${record.tenantId}/${
                  record.tenantName
                }/${startTime}/${endTime}`}
              >
                {text || text === 0 ? text.toLocaleString() : ''}
              </Link>
            );
          } else {
            return (
              <Link to={`/console/Operation/tenantProduct/${record.tenantId}/${record.tenantName}`}>
                {text || text === 0 ? text.toLocaleString() : ''}
              </Link>
            );
          }
        },
      },
      {
        title: '应推送量',
        dataIndex: 'pushNum',
        key: 'pushNum',
        align: 'right',
        width: 110,
        sorter: true,
        render: text => {
          return text || text === 0 ? text.toLocaleString() : '';
        },
      },
      {
        title: '实际推送量',
        dataIndex: 'actualPushNum',
        key: 'actualPushNum',
        width: 90,
        align: 'right',
        render: text => {
          return text || text === 0 ? text.toLocaleString() : '';
        },
      },
      {
        title: '推送成功率',
        dataIndex: 'successRate',
        key: 'successRate',
        align: 'right',
        width: 90,
        render: text => {
          return text || text === 0 ? text + '%' : '';
        },
      },
      // {
      //   title: '操作',
      //   align: 'center',
      //   width: 70,
      //   render: (text, record) => {
      //     return (
      //       <Link
      //         to={`/console/Operation/tenantResUseDetails/${record.tenantId}/${record.tenantName}`}
      //       >
      //         详情
      //       </Link>
      //     );
      //   },
      // },
    ];

    return (
      <div className={style.parent}>
        <div className={style.tabsContent}>
          <Row>
            <Col span={20} className={style.title}>
              租户数据使用情况
            </Col>
            {/* <Col span={4}>
              <Link style={{ float: 'right' }} to="/console/overview">
                返回
              </Link>
            </Col> */}
          </Row>
          <Divider />
          <div className={style.tableListForm}>{this.renderForm()}</div>
          <Table
            columns={columns}
            pagination={{
              current,
              showSizeChanger: true,
              showQuickJumper: true,
              defaultPageSize: 10,
              pageSize,
              total: tenantDataInfo && tenantDataInfo.pagi ? tenantDataInfo.pagi.total : 0,
            }}
            rowKey={record => record.tenantId}
            dataSource={tenantDataInfo && tenantDataInfo.data ? tenantDataInfo.data : []}
            onChange={this.tableChage.bind(this)}
            loading={loading.effects['tenantData/fetchTenantData']}
          />
        </div>
      </div>
    );
  }
}
