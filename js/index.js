const data = [
  {
    imgUrl: './static//img/视频推荐图片/image (1).jpg',
    title: '曾经的我，低估了这个角色！情场上的千层套路！幼稚园的直男收',
  },
  {
    imgUrl: './static//img/视频推荐图片/image (2).jpg',
    title:
      '从零开始手把手教你学摄影，20节课带你从小白到大师 | 摄影前期拍摄入门教程',
  },
  {
    imgUrl: './static//img/视频推荐图片/image (3).jpg',
    title:
      'AI生成视频竟然发展到这种程度了？AI视频短片《迭代南翔》stable-diffusion',
  },
  {
    imgUrl: './static//img/视频推荐图片/image (4).jpg',
    title: '【Blender+AE】百万粒子！苹果九月粒子logo动画来了，100%学会',
  },
  {
    imgUrl: './static//img/视频推荐图片/image (5).jpg',
    title: '【AIGC】极其简单却被忽视的AI三维制作技巧，提高收入的入门场地',
  },
  {
    imgUrl: './static//img/视频推荐图片/image (6).jpg',
    title: '【莱斯利】漫威蜘蛛侠2最高难度丨决战蜥蜴博士-第12期',
  },
  {
    imgUrl: './static//img/视频推荐图片/image (7).jpg',
    title: '【4K】RTX4090下的极限画质荒野大镖客2，太震撼了！',
  },
  {
    imgUrl: './static//img/视频推荐图片/image (8).jpg',
    title: '【精灵旅社】当你有了想保护的人全世界哪里都有危险',
  },
  {
    imgUrl: './static//img/视频推荐图片/image (9).jpg',
    title: '【莱斯利】漫威蜘蛛侠2最高难度丨全新毒液-第17期',
  },
  {
    imgUrl: './static//img/视频推荐图片/image (10).jpg',
    title: '秋日氛围建筑场景快速搭建丨4分钟室外建筑日景效果渲染全流程',
  },
  {
    imgUrl: './static//img/视频推荐图片/image (11).jpg',
    title: '曾经的我，低估了这个角色！情场上的千层套路！幼稚园的直男收',
  },
  {
    imgUrl: './static//img/视频推荐图片/image (12).jpg',
    title: '【中字】Blender 3.6几何节点教程：数学 x Blender = 力量！',
  },
]

// 获取视频推荐列表
const RecommendedList = document.querySelectorAll('.RecommendedList')[1]


// 初始化函数
const init = () => {
  let template = ''
  template += data.map((item, index) => {
    return `
      <li class="RecommendedItem">
        <div class="itemTop">
          <img src="${item.imgUrl}" alt="" />
          <span>12:11</span>
        </div>
        <div class="itemEnd">
          <p class="videoTitle">
            ${item.title}
          </p>
          <span class="videoPlay">70.4万次播放</span>
          <span class="videoDay">4天前</span>
        </div>
      </li>
    `
  })
  template = template.split(',').join('')
  RecommendedList.innerHTML = template
}

// 初始化图片
init()


// 等待DOM加载完成后执行
window.onload = () => {
  const viodeItems = document.querySelectorAll('.RecommendedItem')
  Array.prototype.forEach.call(viodeItems, (item) => {
    item.onclick = (e) => {
      location.href = '../web-assignment-master/pages/videoDetil.html'
    }
  })
}


