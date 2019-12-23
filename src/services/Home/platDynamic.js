import img1 from '../../routes/Home/SubPage/PlatDynamic/img/1.png';
import img2 from '../../routes/Home/SubPage/PlatDynamic/img/2.jpg';
import img3 from '../../routes/Home/SubPage/PlatDynamic/img/3.png';
import img4 from '../../routes/Home/SubPage/PlatDynamic/img/4.png';

// const data = [];
// for (let i = 1; i < 21; i++) {
//   data.push({
//     title: '中国联通与中国电子签署战略合作协议' + i,
//     text:
//       '6月7日下午，中国联合网络通讯有限公司与中国电子信息产业集团有限公司，在北京签署战略合作协议。\n' +
//       '                中国联通董事长王晓初、中国电子董事长芮晓武出席签约仪式并会谈，中国联通副总经理梁宝俊...',
//     time: '2019-6-18',
//   });
// }

const data = [
  {
    title: '中国联通与中国电子签署战略合作协议',
    img: img1,
    text:
      '6月7日下午，中国联合网络通讯有限公司与中国电子信息产业集团有限公司，在北京签署战略合作协议。\n' +
      '                中国联通董事长王晓初、中国电子董事长芮晓武出席签约仪式并会谈，中国联通副总经理梁宝俊...',
    time: '2019-6-18',
  },
  {
    title: '中国联通与中国电子签署战略合作协议',
    img: img2,
    text:
      '6月7日下午，中国联合网络通讯有限公司与中国电子信息产业集团有限公司，在北京签署战略合作协议。\n' +
      '                中国联通董事长王晓初、中国电子董事长芮晓武出席签约仪式并会谈，中国联通副总经理梁宝俊...',
    time: '2019-6-18',
  },
  {
    title: '中国联通与中国电子签署战略合作协议',
    img: img3,
    text:
      '6月7日下午，中国联合网络通讯有限公司与中国电子信息产业集团有限公司，在北京签署战略合作协议。\n' +
      '                中国联通董事长王晓初、中国电子董事长芮晓武出席签约仪式并会谈，中国联通副总经理梁宝俊...',
    time: '2019-6-18',
  },
  {
    title: '中国联通与中国电子签署战略合作协议',
    img: img4,
    text:
      '6月7日下午，中国联合网络通讯有限公司与中国电子信息产业集团有限公司，在北京签署战略合作协议。\n' +
      '                中国联通董事长王晓初、中国电子董事长芮晓武出席签约仪式并会谈，中国联通副总经理梁宝俊...',
    time: '2019-6-18',
  },
];

export async function getDynamicData() {
  return {
    data,
    success: true,
  };
}
