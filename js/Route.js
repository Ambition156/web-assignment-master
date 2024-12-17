// 追加一个退出按钮
const TopNav = document.querySelector('.TopNav')
TopNav.innerHTML += `<a href="#" class="loginBtn quitBtn">退出</a>`

// 获取左侧列表分类
const leftNavList = document.querySelectorAll('.leftNav-item')
// 获取首页
const Home = document.querySelector('.leftNav-title')

// 获取退出按钮
const quitBtn = document.querySelector('.quitBtn')
// 获取登录按钮
const loginBtn = document.querySelector('.loginBtn')
// 获取用户Node
const userNode = document.querySelector('.userName')

// 会员购买
const VIP = document.querySelector('.TopNav ul li')

// 获取当前用户
const user = JSON.parse(localStorage.getItem('currentUser')) || null

// 渲染用户
function rederUser() {
  if (user) {
    // 显示退出按钮
    loginBtn.style.display = 'none'
    quitBtn.style.display = 'block'
    userNode.innerHTML = `
      <a href="#">
        <svg t="1717161226654" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5473" width="128" height="128"><path d="M502.496 63.136c125.888 0 227.936 100.384 227.936 224.192 0 123.84-102.048 224.224-227.936 224.224-125.888 0-227.936-100.384-227.936-224.224C274.56 163.488 376.64 63.136 502.496 63.136L502.496 63.136zM502.496 63.136c125.888 0 227.936 100.384 227.936 224.192 0 123.84-102.048 224.224-227.936 224.224-125.888 0-227.936-100.384-227.936-224.224C274.56 163.488 376.64 63.136 502.496 63.136L502.496 63.136zM417.024 586.304l189.984 0c162.624 0 294.432 129.632 294.432 289.6l0 18.656c0 63.04-131.84 65.44-294.432 65.44l-189.984 0c-162.624 0-294.432-0.096-294.432-65.44l0-18.656C122.592 715.936 254.4 586.304 417.024 586.304L417.024 586.304zM417.024 586.304" fill="#272636" p-id="5474"></path></svg>
        <span>${user.username}</span>
      </a>
    `
  } else {
    loginBtn.style.block = 'block'
    quitBtn.style.display = 'none'

    userNode.innerHTML = `
      <a href="#">
        <svg t="1717161226654" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5473" width="128" height="128"><path d="M502.496 63.136c125.888 0 227.936 100.384 227.936 224.192 0 123.84-102.048 224.224-227.936 224.224-125.888 0-227.936-100.384-227.936-224.224C274.56 163.488 376.64 63.136 502.496 63.136L502.496 63.136zM502.496 63.136c125.888 0 227.936 100.384 227.936 224.192 0 123.84-102.048 224.224-227.936 224.224-125.888 0-227.936-100.384-227.936-224.224C274.56 163.488 376.64 63.136 502.496 63.136L502.496 63.136zM417.024 586.304l189.984 0c162.624 0 294.432 129.632 294.432 289.6l0 18.656c0 63.04-131.84 65.44-294.432 65.44l-189.984 0c-162.624 0-294.432-0.096-294.432-65.44l0-18.656C122.592 715.936 254.4 586.304 417.024 586.304L417.024 586.304zM417.024 586.304" fill="#272636" p-id="5474"></path></svg>
        <span>未登录</span>
      </a>
    `
  }
}

// 点击跳转到登录页
loginBtn.onclick = () => {
  location.href = '../pages/login.html'
}

// 点击退出
quitBtn.onclick = () => {
  localStorage.removeItem('currentUser')
  // 重新加载页面
  location.reload()
}

// 跳转到主页
Home.onclick = () => {
  location.href = '../index.html'
}

// 切换类名
function toogleNav(Node) {
  Array.prototype.forEach.call(leftNavList, (item) => {
    item.classList.remove('active')
  })
  Node.classList.add('active')
}

// 设置 a url
function getUrl(temp, url) {
  let a = temp?.querySelector('a')
  a?.setAttribute('href', url)
}

// 默认路径
function defaultUrl() {
  for (let i = 0; i < leftNavList.length; i++) {
    getUrl(leftNavList[i], '../pages/undefined.html')
  }
}

defaultUrl()

// 首页
getUrl(leftNavList[0], '../index.html')
// 小说
getUrl(leftNavList[3], '../pages/novel.html')
// 壁纸
getUrl(leftNavList[4], '../pages/imgSort.html')
// VIP
getUrl(VIP, '../pages/Vip.html')


// 渲染用户
rederUser();
