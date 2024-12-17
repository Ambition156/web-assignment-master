// 全部类别
let All = [
  {
    img: 'https://fyb-2.cdn.bcebos.com/hotboard_image/1438c4125ef576fffc277eeeecdd9a05',
    desc: '积善之家，必有余庆，留余庆，留余庆，忽遇恩人；幸娘亲，幸娘亲，积得阴功。劝人生，济困扶穷……而谁可知，人生于世，上承余庆，终究却是要自己做出道路抉择，正是所谓岔枝发：   东风携云雨，幼藤吐新芽。   急催如颦鼓，洗尽茸与华。   且待朝阳至，绿遍庭中架。   更盼黄叶时，采得数枚瓜。   ……',
    hot: '1520966',
    name: '庆余年',
    type: '历史',
    author: '猫腻',
  },
  {
    img: 'https://fyb-2.cdn.bcebos.com/hotboard_image/448112da61a64bed8e6996bc44d9d798',
    desc: '天地间，有万相。而我李洛，终将成为这万相之王。继《斗破苍穹》《武动乾坤》《大主宰》《元尊》之后，天蚕土豆又一部玄幻力作。',
    hot: '299645',
    name: '万相之王',
    type: '玄幻',
    author: '天蚕土豆',
  },
  {
    img: 'https://fyb-2.cdn.bcebos.com/hotboard_image/b49b035c20efcddc32b96757e42b3a39',
    desc: '论潜力，不算天才，可玄功武技，皆可无师自通。 论实力，任凭你有万千至宝，但定不敌我界灵大军。 我是谁？天下众生视我为修罗，却不知，我以修罗成武神。',
    hot: '115234',
    name: '修罗武神',
    type: '玄幻',
    author: '善良的蜜蜂',
  },
  {
    img: 'https://fyb-2.cdn.bcebos.com/hotboard_image/43bda2ed075527b204ee117ec2d08b37',
    desc: '窝囊废物的上门女婿叶凡，无意中得到太极经和生死石的传承，自此开始了不一样的人生，他医术救美，武道杀敌，不仅横扫他人的轻视和嘲笑，赢得娇妻的芳心，更是站到了这世界的巅峰，睥睨天下。',
    hot: '91189',
    name: '女总裁的上门女婿',
    type: '都市',
    author: '一起成功',
  },
  {
    img: 'https://fyb-2.cdn.bcebos.com/hotboard_image/6b85a457a4ec4286b08e9b02016928c9',
    desc: '是丹帝重生？是融合灵魂？被盗走灵根、灵血、灵骨的三无少年——龙尘，凭借着记忆中的炼丹神术，修行神秘功法九星霸体诀，拨开重重迷雾，解开惊天之局。 手掌天地乾坤，脚踏日月星辰，勾搭各色美女，镇压恶鬼邪神。 江湖传闻：龙尘一到，地吼天啸。龙尘一出，鬼泣神哭。',
    hot: '82703',
    name: '九星霸体诀',
    type: '玄幻',
    author: '平凡魔术师',
  },
  {
    img: 'https://fyb-2.cdn.bcebos.com/hotboard_image/a7dbb3f5ed81857ec2e2f9a2fc66a17d',
    desc: '任你权势滔天，任你富可敌国，在我面前不要嚣张。我是叶秋，能救你的命，也能要你的命！',
    hot: '79998',
    name: '盖世神医',
    type: '都市',
    author: '狐颜乱语',
  }
]

// 获取分类导航列表
const novelList = document.querySelector('.novelList')

// 初始化渲染
function render(val) {
  var html = val.reduce((preve, cur) => {
    return (
      preve +
      `<li class="novelItem">
        <div class="novelImg">
          <img src="${cur.img}" alt="">
        </div>
        <div class="novelInfo">
          <div class="novelTop">
            <span class="noveTitle">${cur.name}</span>
            <span class="author">${cur.author}</span>
          </div>
          <div class="novelDesc">
            ${cur.desc}
          </div>
        </div>
      </li>`
    )
  }, ' ')

  // 渲染小说列表
  novelList.innerHTML = html
}

// 初始化
render(All)
