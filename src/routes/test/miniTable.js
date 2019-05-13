/* eslint-disable comma-dangle,react/no-array-index-key,no-unused-vars */
import React, {Fragment, PureComponent} from 'react';
import { connect } from 'dva';
import {
  Form,
  Row,
  Input,
  Button,
  Card,
  Col,
  Icon,

} from 'antd';
import TestModel from '../../components/TestComponent/TestModel';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

const FormItem = Form.Item;

@connect(({ loading }) => ({
  submitting: loading.effects['form/submitRegularForm'],
}))
@Form.create()
export default class MiniTable extends PureComponent {

  state = {
    // visible: false,
    // showStep1: true,
    // showStep2: false,
    // content: '',
    // i: 0,
  };

  componentDidMount () {

    // this.timer = setInterval(
    //   () => {
    //     const { i } = this.state;
    //
    //     this.setState({i: i+1, content:'我是定时器打印的内容...One' + i})
    //   },
    //   500
    // );
  }

  componentWillUnmount() {
   // clearInterval(this.timer);
  }

  // showModal = () => {
  //   this.setState({
  //     visible: true,
  //   });
  // }

  // handleOk = () => {
  //   this.setState({ visible: false });
  // }
  //
  // handleCancel = () => {
  //   this.setState({ visible: false });
  // }

  handleMenuClick = (n) => {
    console.log('click000', n);
  }

  handleSubmit = (e) => {
   // e.preventDefault();
    console.log('submit--------------')
   /*  this.setState({
      visible: false,
      showStep1: true,
      showStep2: false
    }); */
    const {form} = this.props;

    form.validateFields((err, values) => {
      if (!err) {
        console.log('values:', values);
      }
    });
  }

  // ccc = () => {
  //   const src = "var result = {}; result.success = true; result.message = ''; if (!properties['memory'] || typeof properties['memory'] === 'number' || properties['memory'] < 1 || properties['memory'] > 64) { result.success = false; result.message = '请输入单实例内存值(单位是G)，范围是1-64之间的值'; } return result;";
  //   const func = new Function("properties",src );
  //   console.log(func({memory: '56'}))
  // }

  render(){

    const { form } = this.props;
    const { getFieldDecorator } = form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const data = [1, 2];

    return (
      <PageHeaderLayout
        title="基础表单"
        content="表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。"
      >
        <Card bordered={false}>
          <Row>
            <Form onSubmit={this.handleSubmit}>
              {
                data ? data.map((item, index) => {
                  return (
                    <Fragment>
                      <Row gutter={{ md: 8, lg: 24, xl: 48 }} key={`row1${index}`}>
                        <Col md={8} sm={8} style={{ paddingRight: 10 }}>
                          <FormItem {...formItemLayout} label="场景标题">
                            {getFieldDecorator(`descData[${index}].title`, { initialValue: '' })(
                              <Input />
                            )}
                          </FormItem>
                        </Col>
                      </Row>
                      <Row key={`row2${index}`}>
                        <Col md={8} sm={8} style={{ paddingRight: 10 }}>
                          <FormItem {...formItemLayout} label="场景描述">
                            {getFieldDecorator(`descData[${index}].params[0]`, { initialValue: ''})(
                              <Input />
                            )}
                          </FormItem>
                        </Col>
                        <Col md={8} sm={8} style={{ paddingLeft: 0, paddingRight: 10 }}>
                          <FormItem {...formItemLayout} label="场景描述">
                            {getFieldDecorator(`descData[${index}].params[1]`, { initialValue: '' })(
                              <Input />
                            )}
                          </FormItem>
                        </Col>
                        <Col md={8} sm={8} style={{ paddingLeft: 0, paddingRight: 10 }}>
                          <FormItem {...formItemLayout} label="场景描述">
                            {getFieldDecorator(`descData[${index}].params[2]`, { initialValue: '' })(
                              <Input />
                            )}
                          </FormItem>
                        </Col>
                      </Row>
                    </Fragment>
                  )
                }): null
              }
              <Row>
                <Col md={8} sm={12} style={{ paddingLeft: 0, paddingRight: 0 }}>
                  <span className={{whiteSpace: 'nowrap', marginBottom: 24}}>
                    <Button type="primary" htmlType="submit" style={{ marginRight: 10 }}>
                      确定
                    </Button>
                    <Button style={{ marginRight: 10 }}>
                      重置
                    </Button>
                    <div style={{ float: 'right' }}>
                      <Icon
                        type="reload"
                        style={{ fontSize: 14, color: '#1890ff', fontWeight: 700, cursor: 'pointer' }}
                      />
                    </div>
                  </span>
                </Col>
              </Row>
            </Form>
          </Row>
          <TestModel />
        </Card>
      </PageHeaderLayout>
    );
  }
}
