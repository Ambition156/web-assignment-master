// 获取注册面板
const registerForm = document.querySelectorAll('.registerForm')[0]
// 获取登录面板
const loginForm = document.querySelectorAll('.registerForm')[1]

// 账号注册切换按钮
const registerBtn = loginForm.querySelectorAll('.loginFun span')[0]
// 账号登录切换按钮
const loginBtn = registerForm.querySelectorAll('.loginFun span')[0]

// 点击注册按钮
const registerUserBtn = registerForm.querySelector('.btn')
// 点击登录按钮
const loginUserBtn = loginForm.querySelector('.btn')

// 勾选自动登录按钮
const autoLogins = document.querySelectorAll('.radio')

// 注册用户列表
const userList = JSON.parse(localStorage.getItem('userList')) || []

// 校验用户名的合法性
function checkUsername(username) {
  const reg = /^[a-zA-Z0-9_-]{5,16}$/
  return reg.test(username)
}

// 校验密码的合法性
function checkPassword(password) {
  const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,12}$/
  return reg.test(password)
}

// 清空注册输入框内容
function clearInput() {
  // 清空注册用户名
  registerForm.querySelector('.registerUser').value = ''  
  // 清空注册密码
  registerForm.querySelector('.registerPwd').value = ''  
  // 清空确认密码
  registerForm.querySelector('.registerPwdCfm').value = ''
}

// 判断是勾选的自动登录
function isAutoLogin() {
  const autoLogin = autoLogins[0].querySelector('.iconfont').classList.contains('icon-gouxuan')
  return autoLogin 
}

// 判断用户是否存在
function isUserExist(username) {
  return userList.some((user) => user.username === username)
}
// 返回用户密码
function getUserPassword(username) {
  const user = userList.find((user) => user.username === username)
  return user.password
}

// 点击注册按钮
function registerClick() {
  registerUserBtn.onclick = () => {
    // 获取注册用户名
    const registerUsername = registerForm
      .querySelector('.registerUser')
      .value.trim()
    // 获取注册密码
    const registerPassword = registerForm
      .querySelector('.registerPwd')
      .value.trim()
    // 获取确认密码
    const confirmPassword = registerForm
      .querySelector('.registerPwdCfm')
      .value.trim()

    // 判断用户名是否合法
    if (checkUsername(registerUsername) && registerUsername !== '') {
      // 判断密码是否合法
      if (
        checkPassword(registerPassword) &&
        registerPassword !== '' &&
        checkPassword(confirmPassword) &&
        confirmPassword !== ''
      ) {
        // 判断确认密码是否合法
        if (registerPassword === confirmPassword) {
          // 注册成功
          new Message({
            effect: 'light',
            round: true,
            type: 'success',
            message: '注册成功 用户: ' + registerUsername,
          })
          // 清空注册输入框内容
          clearInput()

          // 存储用户信息
          userList.push({
            username: registerUsername,
            password: registerPassword,
          })
          // 存储用户列表到本地存储
          localStorage.setItem('userList', JSON.stringify(userList))

          // 判断是否勾选了自动登录
          if (isAutoLogin()) {
            // 存储当前登录用户
            localStorage.setItem('currentUser', JSON.stringify({
              username: registerUsername,
              password: registerPassword,
            }))
            
            // 跳转到主页
            location.href = '../web-assignment-master/index.html'

          } else {
            // 切换至登录页面
            registerForm.style.display = 'none'
            loginForm.style.display = 'block'
            loginForm.style.opacity = '1'
          }
        } else {
          new Message({
            effect: 'light',
            round: true,
            type: 'error',
            message: '两次密码输入不一致',
          })
        }
      } else {
        new Message({
          effect: 'light',
          round: true,
          type: 'error',
          message: '密码在6到12个字符之间，且包含大小写字母和数字',
        })
      }
    } else {
      new Message({
        effect: 'light',
        round: true,
        type: 'error',
        message: '用户名必须是5到16个字符组成的字符串',
      })
    }
  }
}

// 点击登录按钮
function loginClick() {
  loginUserBtn.onclick = () => {
    // 获取登录用户名
    const loginUsername = loginForm.querySelector('.registerUser').value.trim()
    // 获取登录密码
    const loginPassword = loginForm.querySelector('.registerPwd').value.trim()
   
    // 判断用户名是否存在
    if(isUserExist(loginUsername)) {
      // 判断密码是否正确
      if(loginPassword === getUserPassword(loginUsername)) {
        // 登录成功
         new Message({
           effect: 'light',
           round: true,
           type: 'success',
           message: '登录成功 用户:' + loginUsername,
         })

         // 存储当前登录用户
         localStorage.setItem('currentUser', JSON.stringify({
          username: loginUsername,
          password: loginPassword
         }))

        //  跳转到主页
        location.href = '../index.html'
      } else {
         new Message({
           effect: 'light',
           round: true,
           type: 'error',
           message: '密码错误',
         })
      }
    } else {
      new Message({
        effect: 'light',
        round: true,
        type: 'error',
        message: '用户尚未注册',
      })
    }

  }
}

// 切换登录注册面板
function switchForm() {
  registerBtn.onclick = (e) => {
    loginForm.style.display = 'none'
    registerForm.style.display = 'block'
    registerForm.style.opacity = '1'
  }

  loginBtn.onclick = (e) => {
    registerForm.style.display = 'none'
    loginForm.style.display = 'block'
    loginForm.style.opacity = '1'
  }
}

// 切换自动登录
function switchAutoradio() {
  Array.prototype.forEach.call(autoLogins, (radio) => {
    radio.onclick = () => {
      const i = radio.querySelector('.iconfont')
      i.classList.toggle('icon-gouxuan')
    }
  })
}

// 初始化
function init() {
  // 切换登录注册面板
  switchForm()
  // 切换自动登录
  switchAutoradio()
  // 注册按钮点击事件
  registerClick()
  // 登录按钮点击事件
  loginClick()
}

init()
