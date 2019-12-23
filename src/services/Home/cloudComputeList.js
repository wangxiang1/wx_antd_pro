import img1 from '../../assets/2.1.png';

const butData = {
  abilityType: [
    { buttonId: 0, buttonName: '全部' },
    { buttonId: '11', buttonName: '计算能力' },
    { buttonId: '12', buttonName: '数据服务能力' },
    { buttonId: '13', buttonName: '数据建模、可视化能力' },
    { buttonId: '14', buttonName: '化应用能力' },
  ],
  serviceType: [
    { buttonId: 0, buttonName: '全部' },
    { buttonId: '21', buttonName: '基础资源' },
    { buttonId: '22', buttonName: '批量计算' },
    { buttonId: '23', buttonName: '流计算' },
    { buttonId: '24', buttonName: '数据库' },
  ],
  product: [
    { buttonId: 0, buttonName: '全部' },
    { buttonId: '31', buttonName: '基础资源' },
    { buttonId: '32', buttonName: '批量计算' },
    { buttonId: '33', buttonName: '流计算' },
    { buttonId: '34', buttonName: '数据库' },
  ],
};
const listData = [];
for (let i = 1; i < 37; i++) {
  listData.push({
    key: i,
    title: 'Web服务器组件' + i,
    img: img1,
    text:
      '产品概述：基于Hadoop的一个数据仓库工具，可以将结构化的数据文件映射为一张数据库表，' +
      '并提供简单的sql查询功能，可以将sql语句转换为MapReduce任务进行运行。',
    version: 'V3.0.3',
    applyTo: 'Windows/Linux/Unix',
    buttons: ['一对一专人服务', '数据模型咨询', '资源监控/预警', '资源运维'],
    price: 399,
    type1: '1' + i, //  匹配能力分类筛选条件
    type2: '2' + i, //  匹配服务类型筛选条件
    type3: '3' + i, //  匹配产品筛选条件
  });
}
export async function getButtonsData() {
  return butData;
}

export async function getListData() {
  return {
    listData,
    success: true,
  };
}
