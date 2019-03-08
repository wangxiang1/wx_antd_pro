/* eslint-disable comma-dangle */
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import {
  Form,
  Row,
  Input,
  Button,
  Card,
  Col,
  Icon,
  Modal,
  Checkbox,
  Tooltip,

} from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

@connect(({ loading }) => ({
  submitting: loading.effects['form/submitRegularForm'],
}))
@Form.create()
export default class MiniTable extends PureComponent {

  state = {
    visible: false,
    showStep1: true,
    showStep2: false
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    this.setState({ visible: false });
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  handleMenuClick = (n) => {
    console.log('click000', n);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit--------------')
    this.setState({
      visible: false,
      showStep1: true,
      showStep2: false
    });
  }

  render(){
    const { visible, showStep1, showStep2 } = this.state;

    /* const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1"><Icon type="user" />1st menu item</Menu.Item>
        <Menu.Item key="2"><Icon type="user" />2nd menu item</Menu.Item>
        <Menu.Item key="3"><Icon type="user" />3rd item</Menu.Item>
      </Menu>
    ); */
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
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 4,
        },
      },
    };

    return (
      <PageHeaderLayout
        title="基础表单"
        content="表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。"
      >
        <Card bordered={false}>
          {/* <Row>
            <span style={{ fontWeight: 700, fontSize: 16 }}>mysql</span>
            <div style={{float: 'right'}}>
              <Link to='/list/table-list'><Icon type="arrow-left" style={{fontSize: 16, fontWeight: 700}} /></Link>
              &nbsp;&nbsp;
              <Icon type="reload" onClick={() => {console.log(1)}} style={{fontSize: 16, color: '#1890ff', fontWeight: 700, cursor: 'pointer'}} />
            </div>
          </Row>
          <hr style={{ border: 'none', height: '1px', backgroundColor: '#e3e3e3' }} />
          <Button onClick={() => {this.setState({text: 1})}}>same state</Button>
          <h2>{text}</h2>
          <Dropdown overlay={menu}>
            <Button style={{ marginLeft: 8 }}>
              Button <Icon type="down" />
            </Button>
          </Dropdown>
          <Row>
            <Form onSubmit={this.handleSubmit}>
              <Col md={10} sm={8} style={{ paddingLeft: 0 }}>
                <FormItem label="开始时间">
                  {getFieldDecorator('starttime')(
                    <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
                  )}
                </FormItem>
                <Button htmlType='submit'>submit</Button>
              </Col>
            </Form>
          </Row>
          <Row>
            <Form>
              <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
                <Col md={5} sm={8} style={{ paddingRight: 10 }}>
                  <FormItem label="服务名称">
                    {getFieldDecorator('productName', { initialValue: '' })(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col md={5} sm={8} style={{ paddingLeft: 0, paddingRight: 10 }}>
                  <FormItem label="租户名称">
                    {getFieldDecorator('tenantId', { initialValue: '' })(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col md={12} sm={24} style={{ paddingLeft: 0, paddingRight: 0 }}>
                  <span className={{whiteSpace: 'nowrap', marginBottom: 24}}>
                    <Button type="primary" htmlType="submit" style={{ marginRight: 10 }}>
                      查询
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
          <Row>
            <Col span={6}>
              <Input value={value} onChange={(e) => {this.setState({value: e.target.value})}} />
            </Col>
          </Row> */}


          <Row>
            <Button onClick={this.showModal}>简历表单测试</Button>

            <Modal
              width='60%'
              visible={visible}
              title="Title"
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              footer={null}
            >
              <Form onSubmit={this.handleSubmit}>
                <div style={{display: showStep1 ? 'block' : 'none'}}>
                  <Form.Item
                    {...formItemLayout}
                    label="E-mail"
                  >
                    {getFieldDecorator('email', {
                      rules: [{
                        type: 'email', message: 'The input is not valid E-mail!',
                      }, {
                        required: true, message: 'Please input your E-mail!',
                      }],
                    })(
                      <Input />
                    )}
                  </Form.Item>
                  <Form.Item
                    {...formItemLayout}
                    label="Password"
                  >
                    {getFieldDecorator('password', {
                      rules: [{
                        required: true, message: 'Please input your password!',
                      }],
                    })(
                      <Input type="password" />
                    )}
                  </Form.Item>
                  <Form.Item
                    {...formItemLayout}
                    label="Confirm Password"
                  >
                    {getFieldDecorator('confirm', {
                      rules: [{
                        required: true, message: 'Please confirm your password!',
                      }, {
                        validator: this.compareToFirstPassword,
                      }],
                    })(
                      <Input type="password" onBlur={this.handleConfirmBlur} />
                    )}
                  </Form.Item>
                  <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" onClick={() => {this.setState({showStep1: false, showStep2: true})}}>
                      下一步
                    </Button>
                  </Form.Item>
                </div>
                <div style={{display: showStep2 ? 'block' : 'none'}}>
                  <Form.Item
                    {...formItemLayout}
                    label={(
                      <span>
                        Nickname&nbsp;
                        <Tooltip title="What do you want others to call you?">
                          <Icon type="question-circle-o" />
                        </Tooltip>
                      </span>
                    )}
                  >
                    {getFieldDecorator('nickname', {
                      rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                    })(
                      <Input />
                    )}
                  </Form.Item>
                  <Form.Item
                    {...formItemLayout}
                    label="Captcha"
                    extra="We must make sure that your are a human."
                  >
                    <Row gutter={8}>
                      <Col span={12}>
                        {getFieldDecorator('captcha', {
                          rules: [{ required: true, message: 'Please input the captcha you got!' }],
                        })(
                          <Input />
                        )}
                      </Col>
                      <Col span={12}>
                        <Button>Get captcha</Button>
                      </Col>
                    </Row>
                  </Form.Item>
                  <Form.Item {...tailFormItemLayout}>
                    {getFieldDecorator('agreement', {
                      valuePropName: 'checked',
                    })(
                      <Checkbox>I have read the <a href="">agreement</a></Checkbox>
                    )}
                  </Form.Item>
                  <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                      提交
                    </Button>
                    <Button onClick={() => {this.setState({showStep1: true, showStep2: false})}} style={{ marginLeft: 8 }}>
                      上一步
                    </Button>
                  </Form.Item>
                </div>
              </Form>
            </Modal>
          </Row>
        </Card>
      </PageHeaderLayout>
    );
  }
}
