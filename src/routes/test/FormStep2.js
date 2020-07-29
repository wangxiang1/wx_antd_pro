/* eslint-disable*/
/*
 * @Author: wangxiang
 * @Date: 2019-07-10 11:18:31
 * @Last Modified by: wangxiang
 * @Last Modified time: 2020-05-28 16:26:23
 */
import React, { Component } from 'react';
import { Form, Input, Select, Button, Icon, message } from 'antd';

const { TextArea } = Input;

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

const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 12, offset: 7 },
  },
};
@Form.create()
class FormStep2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stepFormData2:
        props.formData.features && props.formData.features.length > 0
          ? props.formData.features
          : [{ id: 0, name: '', value: '' }, { id: 1, name: '', value: '' }],
    };
  }

  componentDidMount() {
    const { onRef } = this.props;
    onRef(this);
    console.log('componentDidMount');
  }

  add = () => {
    const { stepFormData2 } = this.state;

    if (stepFormData2.length < 8) {
      this.setState({
        stepFormData2: [...stepFormData2, { id: stepFormData2.length, name: '', value: '' }],
      });
    } else {
      message.warning('优势最多8条！');
    }
  };

  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    const { stepFormData2 } = this.state;
    console.log('stepFormData2:', stepFormData2);

    return (
      <Form>
        {stepFormData2.map((k, index) => {
          return (
            <div key={k.id}>
              <Form.Item {...formItemLayout} label="优势标题：">
                {getFieldDecorator(`features[${index}].name`, {
                  rules: [{ required: true, message: '优势不能为空!' }],
                  initialValue: stepFormData2.length > 0 ? stepFormData2[index].name : '',
                })(
                  <Input
                    placeholder="请输入"
                    maxLength={20}
                    style={{ width: '90%', marginRight: '3%' }}
                  />
                )}
                {stepFormData2.length > 4 ? (
                  <Icon
                    className="dynamic-delete-button"
                    type="minus-circle-o"
                    onClick={() => this.remove(k)}
                  />
                ) : null}
              </Form.Item>
              <Form.Item {...formItemLayoutWithOutLabel} required>
                {getFieldDecorator(`features[${index}].introduction`, {
                  rules: [{ required: true, message: '优势描述不能为空！' }],
                  initialValue: stepFormData2[index] ? stepFormData2[index].introduction : '',
                })(
                  <TextArea
                    placeholder="优势描述"
                    maxLength={50}
                    autoSize={{ minRows: 3, maxRows: 6 }}
                    style={{ width: '90%', marginRight: 8 }}
                  />
                )}
              </Form.Item>
            </div>
          );
        })}
        <Form.Item {...formItemLayoutWithOutLabel}>
          <Button type="dashed" onClick={this.add} style={{ width: '90%' }}>
            <Icon type="plus" /> 添加
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default FormStep2;
