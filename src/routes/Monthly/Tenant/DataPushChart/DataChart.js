import React, { Component } from 'react';
import echarts from 'echarts';

/**
 *author: wangxiang
 *desc: 数据推送情况
 *date: 2019/7/24
 */
export default class DataChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { num1: 10, num2: 100 },
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
    if (nextProps.data) {
      this.setState({ data: nextProps.data }, () => {
        this.createMap(this.mapNode);
      });
    }
  }

  createMap = () => {
    const { title, color, legend, unit } = this.props;
    const {
      data: { num1, num2 },
    } = this.state;

    const option = {
      title: {
        x: 'center',
        y: 'bottom',
        textStyle: {
          color: 'rgba(51, 51, 51, 0.647058823529412)',
          fontSize: 16,
        },
      },
      tooltip: {
        trigger: 'item',
        // formatter: '{a} <br/>{b}: {c} ({d}%)',
      },
      legend: {
        bottom: 0,
        data: title,
        icon: 'circle',
        itemWidth: 12,
        itemHeight: 12,
        textStyle: {
          color: 'rgba(0, 0, 0, 0.647058823529412)',
          fontSize: 14,
        },
        selectedMode: false,
        orient: 'vertical',
        // formatter: name => {
        //   if (name === '正常主机') {
        //     return name + ' | ' + up + '台';
        //   } else {
        //     return name + ' | ' + down + '台';
        //   }
        // },
      },
      color,
      avoidLabelOverlap: false,
      series: [
        {
          name: '',
          type: 'pie',
          radius: ['50%', '65%'],
          center: ['120px', '40%'],
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
                  const total = num1 + num1;
                  return legend + ' \n\n' + total + unit;
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
          data: [{ value: num2, name: title[0] }, { value: num1, name: title[1] }],
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
