/* eslint-disable*/
/*
 * @Author: wangxiang
 * @Date: 2019-07-10 11:18:31
 * @Last Modified by: wangxiang
 * @Last Modified time: 2020-03-23 11:03:45
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TestState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
    };
  }

  componentDidMount() {
    this.clickFunc();
  }

  // num增加
  // 合成事件、钩子函数内进行了批量更新优化
  addNum = e => {
    console.log('react合成事件函数');
    this.setState({ num: this.state.num + 1 });
    this.setState({ num: this.state.num + 1 });
    this.setState({ num: this.state.num + 1 });
    this.setState({ num: this.state.num + 1 });
    console.log(this.state.num);
  };

  // 原生点击事件的处理函数
  // 原生事件与setTimeout中不会进行批量更新
  clickFunc() {
    document.querySelector('#btn').addEventListener('click', () => {
      console.log('原生事件处理函数开始');
      this.setState({ num: this.state.num + 1 });
      console.log(this.state.num);
      this.setState({ num: this.state.num + 1 });
      console.log(this.state.num);
      this.setState({ num: this.state.num + 1 });
      console.log(this.state.num);
      this.setState({ num: this.state.num + 1 });
      console.log(this.state.num);
      console.log('原生事件处理完成');
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.num}</h1>
        {/* react的合成事件 */}
        <button
          onClick={e => {
            this.addNum(e);
          }}
        >
          React合成事件的按钮
        </button>
        {/* 原生DOM事件 */}
        <button id="btn">绑定原生DOM事件的按钮</button>
        <Link
          to={{
            pathname: '/testReact',
            query: {
              name: 'wangxiang',
              age: 18,
              desc: 'testlink',
            },
          }}
        >
          query link
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link
          to={{
            pathname: '/testReact',
            state: {
              name: 'wangxiang',
              age: 18,
              desc: 'testlink',
            },
          }}
        >
          state link
        </Link>
        <div>
          返回的location:
          {this.props.location.state ? JSON.stringify(this.props.location.state) : ''}
        </div>
      </div>
    );
  }
}

export default TestState;
