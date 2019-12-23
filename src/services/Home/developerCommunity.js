import img1 from '../../routes/Home/SubPage/DeveloperCommunity/img/5.jpg';
import img2 from '../../routes/Home/SubPage/DeveloperCommunity/img/6.jpg';
import img3 from '../../routes/Home/SubPage/DeveloperCommunity/img/7.jpg';
import img4 from '../../routes/Home/SubPage/DeveloperCommunity/img/8.jpg';
import img5 from '../../routes/Home/SubPage/DeveloperCommunity/img/9.jpg';
import img6 from '../../routes/Home/SubPage/DeveloperCommunity/img/10.jpg';

const data = [];

for (let i = 1; i < 25; i++) {
  data.push({
    key: i,
    title: 'Java多版本环境（Nginx Tomcat JDK Mysql）' + i,
    uploadTime: '2018-07-17',
    type: '镜像',
    capacity: '563.3',
    viewCount: '1923',
    introduce:
      '1.全自动部署多版本环境,一键配置Nginx、tomcat、jdk 主流javaweb程序运行环境 2.通过集成切换脚本命令可自由切换脚本\n' +
      '\n' +
      '3.前端采用高性能Nginx 反向代理到后端tomcat/jdk 来响应jsp/do 解析请求 4.自动生成FTP权限，数据库权限，权限存放...',
    typeKey: '1' + i,
  });
}

const data1 = [
  {
    title: 'MySQL',
    img: img1,
    uploadTime: '2018-09-22',
    type: '镜像',
    capacity: '563.3',
    viewCount: '7851',
    syn: '551',
    introduce:
      'MySQL是一个关系型数据库管理系统，由瑞典MySQL AB 公司开发，目前属于 Oracle 旗下产品。MySQL 是最流行的关系型数据库' +
      '管理系统之一，在 WEB 应用方面，MySQL是最好的 RDBMS (Relational Database Management System，关系数据库管理系统)' +
      ' 应用软件。',
    keyType: '11',
    searchType1: 'MySql',
    searchType2: '镜像',
    searchType3: '一周内',
    status: '1',
  },
  {
    title: 'Tomcat',
    img: img2,
    uploadTime: '2018-09-17',
    type: '镜像',
    capacity: '563.3',
    viewCount: '384',
    syn: '578',
    introduce:
      'Tomcat是Apache 软件基金会（Apache Software Foundation）的Jakarta 项目中的一个核心项目，由Apache、Sun 和其他一些' +
      '公司及个人共同开发而成。由于有了Sun 的参与和支持，最新的Servlet 和JSP 规范总是能在Tomcat 中得到体现，Tomcat 5支' +
      '持最新的Servlet 2.4 和JSP 2.0 规范。因为Tomcat 技术先进、性能稳定，而且免费，因而深受Java 爱好者的喜爱并得到了' +
      '部分软件开发商的认可，成为目前比较流行的Web 应用服务器。',
    keyType: '11',
    searchType1: 'MySql',
    searchType2: '镜像',
    searchType3: '一周内',
    status: '2',
  },

  {
    title: '中心信用卡用户画像模型',
    img: img3,
    uploadTime: '2018-06-21',
    type: '数据模型',
    capacity: '563.3',
    viewCount: '752',
    syn: '8615',
    introduce:
      '数据建模，结合业务场景输出信用模型、偏好标签模型以及分析用户漫游（国外出差旅行等）一些规则，促进中信信用卡业务' +
      '发展，以及信用监控、信用审核等。 ',
    keyType: '12',
    searchType1: '中心信用',
    searchType2: '数据模型',
    searchType3: '一个月内',
    status: '3',
  },
  {
    title: '宁波银行信用贷风控模型',
    img: img4,
    uploadTime: '2018-08-26',
    type: '数据模型',
    capacity: '563.3',
    viewCount: '1923',
    syn: '45',
    introduce:
      '宁波银行使用能力平台和联通脱敏基础数据构建和训练宁波银行信用贷风控模型，模型应用后能使宁波银行信用贷业务的坏账' +
      '率控制在合理水平。',
    keyType: '12',
    searchType1: '中心信用',
    searchType2: '数据模型',
    searchType3: '一个月内',
    status: '2',
  },

  {
    title: '终端厂商查询(terminalmanufacturer)',
    img: img5,
    uploadTime: '2018-05-15',
    type: 'API接口',
    capacity: '678.0',
    viewCount: '1561',
    syn: '5',
    introduce:
      '用户输入tac号（手机终端号即用户MD5 32位大写密文）查询终端厂商，暂只支持数字，字母，中划线，确保唯一性，传输模式' +
      '为Http Post，Http Get，Http Put，Http Delete。',
    keyType: '13',
    searchType1: '终端',
    searchType2: 'API接口',
    searchType3: '半年内',
    status: '3',
  },
  {
    title: '终端外观查询',
    img: img6,
    uploadTime: '2018-04-28',
    type: 'API接口',
    capacity: '726.1',
    viewCount: '890',
    syn: '55',
    introduce:
      '用户输入tac号（手机终端号）对终端外观进行查询，接口英文名称，暂只支持数字，字母，中划线，确保唯一性，传输方式为' +
      'Http Post，Http Get，Http Put，Http Delete。前端采用高性能Nginx 反向代理到后端tomcat/jdk 来响应jsp/do 解析请求' +
      ' 自动生成FTP权限',
    keyType: '13',
    searchType1: '终端',
    searchType2: 'API接口',
    searchType3: '一周内',
    status: '1',
  },

  // {
  //   title: '用户输入tac号（手机终端号）查询终端蓝牙版本(Restful API)',
  //   img: img4,
  //   uploadTime: '2018-05-23',
  //   type: '小程序',
  //   capacity: '403.5',
  //   viewCount: '1513',
  //   introduce:
  //     '1、传输模式：Http Post，Http Get，Http Put，Http Delete;2、用户输入tac号（手机终端号）查询终端操作系统',
  //   keyType: '14',
  //   searchType1: '123',
  //   searchType2: '数据模型',
  //   searchType3: '半个月内',
  // },
];

export async function getContentData() {
  return {
    data,
    data1,
    success: true,
  };
}
