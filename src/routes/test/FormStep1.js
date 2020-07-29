import React, { Component } from 'react';
// import { ServerItem1, ServerItem2 } from './ServerItem';
import { Form, Input, Select, Button, Icon, Upload, Tooltip, Result } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

@Form.create()
export default class FormStep1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stepFormData1: props.formData
        ? props.formData
        : {
            productType: '',
            productName: '',
            serviceIntroduction: '',
            productImageName: '',
            productImageUrl: '',
            productDocumentName: '',
            productDocumentUrl: '',
            chartName: '',
            mirrorName: '',
          },
    };
  }

  componentDidMount() {
    const { onRef } = this.props;
    onRef(this);
    console.log('ServerChart componentDidMount');
  }

  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;

    const { stepFormData1 } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
    };

    return (
      <Form>
        <Form.Item {...formItemLayout} label="产品类型：">
          {getFieldDecorator('productType', {
            rules: [{ required: true, message: '产品类型不能为空!' }],
            initialValue: stepFormData1.productType,
          })(
            <Select placeholder="请选择" style={{ width: '90%', marginRight: 8 }}>
              <Option value={1} key={1}>
                123
              </Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item {...formItemLayout} label="产品名称：">
          {getFieldDecorator('productName', {
            rules: [{ required: true, message: '产品名称不能为空!' }],
            initialValue: stepFormData1.productName,
          })(
            <Input placeholder="请输入" maxLength={20} style={{ width: '90%', marginRight: 8 }} />
          )}
        </Form.Item>
        <Form.Item {...formItemLayout} label="服务简介：">
          {getFieldDecorator('serviceIntroduction', {
            rules: [{ required: true, message: '服务简介不能为空!' }],
            initialValue: stepFormData1.serviceIntroduction,
          })(
            <TextArea
              placeholder="简单描述服务是什么"
              maxLength={150}
              autoSize={{ minRows: 3, maxRows: 6 }}
              style={{ width: '90%', marginRight: 8 }}
            />
          )}
        </Form.Item>
        <Form.Item {...formItemLayout} label="服务chart包名称：">
          {getFieldDecorator('chartName', {
            rules: [{ required: true, message: '服务chart包名称不能为空!' }],
            initialValue: stepFormData1.chartName,
          })(<Input placeholder="请输入" style={{ width: '90%', marginRight: 8 }} />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="基础镜像名称：">
          {getFieldDecorator('mirrorName', {
            rules: [{ required: true, message: '基础镜像名称不能为空!' }],
            initialValue: stepFormData1.mirrorName,
          })(<Input placeholder="请输入" style={{ width: '90%', marginRight: 8 }} />)}
        </Form.Item>
        <div
          className="steps-action"
          style={{ marginTop: 20, marginBottom: 20, textAlign: 'center' }}
        />
      </Form>
    );
  }
}
