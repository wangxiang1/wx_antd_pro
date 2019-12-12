/* eslint-disable prefer-const,guard-for-in, react/destructuring-assignment, react/button-has-type, react/no-access-state-in-setstate */

/*
 * @Author: wangxiang
 * @Date: 2019-07-10 11:18:31
 * @Last Modified by:   wangxiang
 * @Last Modified time: 2019-07-10 11:18:31
 */
import React, { Component } from 'react';

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
      </div>
    );
  }
}

export default TestState;
