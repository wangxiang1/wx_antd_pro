import React, { Component } from 'react';
import echarts from 'echarts';

/**
 *author: wangxiang
 *desc: 租户入驻情况
 *date: 2019/7/24
 */
class PieMonitor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: props.data,
    };
    this.charts = null;
  }

  componentDidMount() {
    const myChart = echarts.init(this.mapNode);
    this.charts = myChart;
    window.addEventListener('resize', this.charts.resize);
    this.createMap(this.mapNode);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.charts.resize);
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.data) {
    //   this.setState({ data: nextProps.data }, () => {
    //     this.createMap(this.mapNode);
    //   });
    // }
  }

  createMap = () => {
    const up = 50;
    const down = 5;
    const out = 12;

    const option = {
      title: {
        text: '租户入驻情况',
        x: 'center',
        y: 'top',
        textStyle: {
          // color: 'rgba(51, 51, 51, 0.647058823529412)',
          fontSize: 16,
        },
      },
      tooltip: {
        trigger: 'item',
        // formatter: '{a} <br/>{b}: {c} ({d}%)',
      },
      legend: {
        right: '0px',
        top: '120px',
        data: ['当前租户量', '新入驻租户量', '已退租租户量'],
        icon: 'circle',
        itemWidth: 12,
        itemHeight: 12,
        textStyle: {
          color: 'rgba(0, 0, 0, 0.647058823529412)',
          fontSize: 14,
        },
        selectedMode: false,
        orient: 'vertical',
        formatter: name => {
          if (name === '当前租户量') {
            return name + ' | ' + up + '个';
          } else if (name === '新入驻租户量') {
            return name + ' | ' + down + '个';
          } else {
            return name + ' | ' + out + '个';
          }
        },
      },
      color: ['#7A77DE', '#42D34B', 'red'],
      avoidLabelOverlap: false,
      series: [
        {
          name: '',
          type: 'pie',
          radius: ['50%', '65%'],
          center: ['120px', '50%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: true,
              position: 'center',
              fontSize: 14,
              color: 'rgba(0, 0, 0, 0.427450980392157)',
              formatter: obj => {
                // console.log(obj)
                if (obj.dataIndex === 0) {
                  const total = up + down + out;
                  return '租户总量 ' + total + '个';
                } else {
                  return '';
                }
              },
            },
          },
          // itemStyle:{
          //   normal: {
          //     borderWidth: 5,
          //     borderColor: '#fff',
          //   }
          // },
          data: [
            { value: up, name: '当前租户量' },
            { value: down, name: '新入驻租户量' },
            { value: out, name: '已退租租户量' },
          ],
        },
      ],
    };

    this.charts.setOption(option, true);
  };

  setMapElement = n => {
    this.mapNode = n;
  };

  render() {
    const style = { width: '100%', height: '300px' };

    return <div style={style} ref={this.setMapElement} />;
  }
}

export default PieMonitor;
