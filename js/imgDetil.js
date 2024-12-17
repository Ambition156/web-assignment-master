// 美女
const meinv = [
  {
    description:
      '鞠婧祎身穿黑色羽翼露肩礼裙，露出雪白的肌肤和优越的肩颈线条。图源：微博@鞠婧祎',
    classid: '65237031189f860b7613acf4',
    smallPicurl:
      'https://cdn.qingnian8.com/public/xxmBizhi/20240409/1712648282492_8.jpg',
    tabs: ['鞠婧祎', '明星美女', '性感女神'],
    _id: '6614f117e0ec199b18e2ea75',
    score: '4.3',
    nickname: '牵着蜗牛闯红灯',
  },
  {
    description:
      '鞠婧祎身穿黑色羽翼露肩礼裙，露出雪白的肌肤和优越的肩颈线条。图源：微博@鞠婧祎',
    classid: '65237031189f860b7613acf4',
    smallPicurl:
      'https://cdn.qingnian8.com/public/xxmBizhi/20240409/1712648282450_7.jpg',
    tabs: ['鞠婧祎', '明星美女'],
    _id: '6614f117e0ec199b18e2ea74',
    score: '4.3',
    nickname: '牵着蜗牛闯红灯',
  },
  {
    description:
      '鞠婧祎身穿黑色羽翼露肩礼裙，露出雪白的肌肤和优越的肩颈线条。图源：微博@鞠婧祎',
    classid: '65237031189f860b7613acf4',
    smallPicurl:
      'https://cdn.qingnian8.com/public/xxmBizhi/20240409/1712648282405_6.jpg',
    tabs: ['鞠婧祎', '明星美女', '性感女神'],
    _id: '6614f117e0ec199b18e2ea73',
    score: '4.2',
    nickname: '牵着蜗牛闯红灯',
  },
  {
    description:
      '鞠婧祎身穿黑色羽翼露肩礼裙，露出雪白的肌肤和优越的肩颈线条。图源：微博@鞠婧祎',
    classid: '65237031189f860b7613acf4',
    smallPicurl:
      'https://cdn.qingnian8.com/public/xxmBizhi/20240409/1712648282367_5.jpg',
    tabs: ['鞠婧祎', '明星美女', '性感女神'],
    _id: '6614f117e0ec199b18e2ea72',
    score: '3.7',
    nickname: '牵着蜗牛闯红灯',
  },
  {
    description:
      '鞠婧祎身穿黑色羽翼露肩礼裙，露出雪白的肌肤和优越的肩颈线条。图源：微博@鞠婧祎',
    classid: '65237031189f860b7613acf4',
    smallPicurl:
      'https://cdn.qingnian8.com/public/xxmBizhi/20240409/1712648282328_4.jpg',
    tabs: ['鞠婧祎', '明星美女'],
    _id: '6614f117e0ec199b18e2ea71',
    score: '4.4',
    nickname: '牵着蜗牛闯红灯',
  },
  {
    description:
      '鞠婧祎身穿黑色羽翼露肩礼裙，露出雪白的肌肤和优越的肩颈线条。图源：微博@鞠婧祎',
    classid: '65237031189f860b7613acf4',
    smallPicurl:
      'https://cdn.qingnian8.com/public/xxmBizhi/20240409/1712648282291_3.jpg',
    tabs: ['鞠婧祎', '明星美女', '性感女神'],
    _id: '6614f117e0ec199b18e2ea70',
    score: '4.2',
    nickname: '牵着蜗牛闯红灯',
  },
  {
    description:
      '鞠婧祎身穿黑色羽翼露肩礼裙，露出雪白的肌肤和优越的肩颈线条。图源：微博@鞠婧祎',
    classid: '65237031189f860b7613acf4',
    smallPicurl:
      'https://cdn.qingnian8.com/public/xxmBizhi/20240409/1712648282252_2.jpg',
    tabs: ['鞠婧祎', '明星美女'],
    _id: '6614f117e0ec199b18e2ea6f',
    score: '4.2',
    nickname: '牵着蜗牛闯红灯',
  },
  {
    description:
      '鞠婧祎身穿黑色羽翼露肩礼裙，露出雪白的肌肤和优越的肩颈线条。图源：微博@鞠婧祎',
    classid: '65237031189f860b7613acf4',
    smallPicurl:
      'https://cdn.qingnian8.com/public/xxmBizhi/20240409/1712648282213_1.jpg',
    tabs: ['鞠婧祎', '明星美女', '性感女神'],
    _id: '6614f117e0ec199b18e2ea6e',
    score: '4.6',
    nickname: '牵着蜗牛闯红灯',
  },
  {
    description:
      '鞠婧祎身穿黑色羽翼露肩礼裙，露出雪白的肌肤和优越的肩颈线条。图源：微博@鞠婧祎',
    classid: '65237031189f860b7613acf4',
    smallPicurl:
      'https://cdn.qingnian8.com/public/xxmBizhi/20240409/1712648282174_0.jpg',
    tabs: ['鞠婧祎', '明星美女', '性感女神'],
    _id: '6614f117e0ec199b18e2ea6d',
    score: '4.4',
    nickname: '牵着蜗牛闯红灯',
  }
]

// 获取图片列表容器
const imgList = document.querySelector('.imgList')


// 初始化渲染
function render(template, val) {
  var html = val.reduce((preve, cur) => {
    return (
      preve +
      ` <li class="imgItem">
          <img src="${cur.smallPicurl}" alt="">
        </li>`
    )
  }, ' ')

  // 渲染小说列表
  template.innerHTML = html
}

// 渲染壁纸
render(imgList, meinv)
