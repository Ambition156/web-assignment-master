const data = [
  {
    imgUrl: '../static/img/视频推荐图片/image (1).jpg',
    title: '曾经的我，低估了这个角色！情场上的千层套路！幼稚园的直男收',
  },
  {
    imgUrl: '../static/img/视频推荐图片/image (2).jpg',
    title:
      '从零开始手把手教你学摄影，20节课带你从小白到大师 | 摄影前期拍摄入门教程',
  },
  {
    imgUrl: '../static/img/视频推荐图片/image (3).jpg',
    title:
      'AI生成视频竟然发展到这种程度了？AI视频短片《迭代南翔》stable-diffusion',
  },
  {
    imgUrl: '../static/img/视频推荐图片/image (4).jpg',
    title: '【Blender+AE】百万粒子！苹果九月粒子logo动画来了，100%学会',
  },
  {
    imgUrl: '../static/img/视频推荐图片/image (5).jpg',
    title: '【AIGC】极其简单却被忽视的AI三维制作技巧，提高收入的入门场地',
  },
  {
    imgUrl: '../static/img/视频推荐图片/image (6).jpg',
    title: '【莱斯利】漫威蜘蛛侠2最高难度丨决战蜥蜴博士-第12期',
  },
  {
    imgUrl: '../static/img/视频推荐图片/image (7).jpg',
    title: '【4K】RTX4090下的极限画质荒野大镖客2，太震撼了！',
  },
  {
    imgUrl: '../static/img/视频推荐图片/image (8).jpg',
    title: '【精灵旅社】当你有了想保护的人全世界哪里都有危险',
  },
  {
    imgUrl: '../static/img/视频推荐图片/image (9).jpg',
    title: '【莱斯利】漫威蜘蛛侠2最高难度丨全新毒液-第17期',
  },
  {
    imgUrl: '../static/img/视频推荐图片/image (10).jpg',
    title: '秋日氛围建筑场景快速搭建丨4分钟室外建筑日景效果渲染全流程',
  },
  {
    imgUrl: '../static/img/视频推荐图片/image (11).jpg',
    title: '曾经的我，低估了这个角色！情场上的千层套路！幼稚园的直男收',
  },
  {
    imgUrl: '../static/img/视频推荐图片/image (12).jpg',
    title: '【中字】Blender 3.6几何节点教程：数学 x Blender = 力量！',
  },
]

// 评论数据 先判断本地是否有评论数据，有则取本地，没有则取默认数据
const usercomment = JSON.parse(localStorage.getItem('usercomment')) || [
  {
    headlogo: '../static/img/logo/headlogo (1).jpg',
    comment:
      '这部宣传片展现了苹果对设计的极致追求，每个细节都体现了苹果产品一贯的高水准。',
  },
  {
    headlogo: '../static/img/logo/headlogo (2).jpg',
    comment:
      '宣传片的视觉效果非常震撼，不仅展示了产品的精美设计，还突出了其功能和用户体验的提升。',
  },
  {
    headlogo: '../static/img/logo/headlogo (3).jpg',
    comment:
      '通过展示多个设计师的创作过程，影片生动地讲述了苹果如何将创新理念融入每一款产品中。',
  },
  {
    headlogo: '../static/img/logo/headlogo (4).jpg',
    comment:
      '音乐和画面完美结合，使得整部宣传片充满动感与活力，充分激发了观众的购买欲望。',
  },
  {
    headlogo: '../static/img/logo/headlogo (5).jpg',
    comment:
      '宣传片不仅向我们展示了苹果产品的外观设计，更深入剖析了背后的科技创新与用户思维。',
  },
  {
    headlogo: '../static/img/logo/headlogo (6).jpg',
    comment:
      '这部影片让人感受到苹果对细节的极致追求和对完美的不懈追求，充分展现了苹果品牌的核心价值。',
  },
]

// 获取video容器
const videoContainer = document.querySelector('.videoList')

// 获取点赞按钮
const btnList = document.querySelectorAll('.videoShare span')

// 评论数据区域
const commentList = document.querySelector('.commentList')

// 获取评论
const commentInfo = document.querySelector('.commentInput textarea')
// 获取评论按钮
const sendBtn = document.querySelector('.sendBtn')

// 发表评论
function sendComment() {
  sendBtn.onclick = (e) => {
    e.preventDefault()
    let comment = commentInfo.value.trim()
    if (comment !== '') {
      const randomNum = Math.floor(Math.random() * 6) + 1
      usercomment.unshift({
        headlogo: `../static/img/logo/headlogo (${randomNum}).jpg`,
        comment: comment,
      })

      // 更新评论列表
      renderComment(usercomment)

      // 持久化存储评论数据
      localStorage.setItem('usercomment', JSON.stringify(usercomment))

      // 普通提示信息
      new Message({
        effect: 'light',
        type: 'success',
        message: '评论成功',
        duration: 2,
      })

      // 清空输入框
      commentInfo.value = ''
    } else {
      // 普通提示信息
      new Message({
        round: true,
        message: '评论不能为空',
        duration: 2,
      })
    }
  }
}

// 渲染视频列表
function renderVideo(videoData) {
  let html = Array.prototype.reduce.call(
    videoData,
    (temp, item) => {
      return (temp += `
      <li class="videoItem">
        <div class="videoImg">
          <img src="${item.imgUrl}" alt="">
          <span class="duration">12:11</span>
        </div>
        <div class="videoInfo">
          <p class="videoTitle">${item.title}</p>
          <div class="PlayInfo">
            <span class="videoPlayTime">70.4万次播放</span>
            <span class="afterTime">4天前</span>
          </div>
        </div>
      </li>
    `)
    },
    ''
  )

  videoContainer.innerHTML = html
}

// 渲染评论列表
function renderComment(data) {
  let html = Array.prototype.reduce.call(
    data,
    (temp, item) => {
      return (temp += `
      <li class="commentItem">
        <div class="headlogo">
          <img src="${item.headlogo}" alt="">
        </div>
        <div class="otherComment">
          <div class="otherName">
            <p class="otherUserName">只是陌生的路人甲</p>
            <p class="otherUserInfo"> <span>2天前</span> <span>江苏</span> </p>
          </div>
          <div class="otherCommentText">
            ${item.comment}
          </div>
        </div>
      </li>
    `)
    },
    ''
  )

  commentList.innerHTML = html
}

// 点赞功能
function clickBtn() {
  Array.prototype.forEach.call(btnList, (item, index) => {
    item.addEventListener('click', (e) => {
      item.classList.toggle('active')
    })
  })
}

// 初始化
function init() {
  // 视频列表渲染
  renderVideo(data)
  // 点赞按钮
  clickBtn()
  // 评论列表渲染
  renderComment(usercomment)
  // 发表评论
  sendComment()
}

init()
