/* eslint-disable comma-dangle,react/no-array-index-key */
import React, {PureComponent} from 'react';
// import { connect } from 'dva';

import styles from './TestModel.less';

 // const FormItem = Form.Item;

// @connect(({ loading }) => ({
//   submitting: loading.effects['form/submitRegularForm'],
// }))
// @Form.create()
/**
 *author: wangxiang
 *desc: flex 布局
 *date: 2019/3/29
 */
export default class TestModel extends PureComponent {

  state = {

  };

  componentDidMount () {

  }


  render(){

    return (
      <div className={styles.content}>
        <div className={styles.row}>
          <div className={styles.title}><span>容器化大数据平台</span></div>
          <div>38</div>
          <div>|</div>
          <div>1,000</div>
          <div className={styles.title}>容器化中间件平台</div>
          <div>38</div>
          <div>|</div>
          <div>1,000</div>
        </div>
        <div className={styles.row}>
          <div className={styles.title}>逻辑多租大数据平台</div>
          <div>38</div>
          <div>|</div>
          <div>1,000</div>
          <div className={styles.title}>数据服务</div>
          <div>38</div>
          <div>|</div>
          <div>1,000</div>
        </div>
        <div className={styles.row}>
          <div className={styles.title}>数据集成工具</div>
          <div>38</div>
          <div>|</div>
          <div>1,000</div>
          <div className={styles.title}>应用服务</div>
          <div>38</div>
          <div>|</div>
          <div>1,000</div>
        </div>
        <div className={styles.row}>
          <div className={styles.title}>容器化大数据平台</div>
          <div>38</div>
          <div>|</div>
          <div>1,000</div>
          <div className={styles.title}>容器化大数据平台</div>
          <div>38</div>
          <div>|</div>
          <div>1,000</div>
        </div>
      </div>
    );
  }
}
