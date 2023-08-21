
export const GLOBAL_KEYS = {
  EXIST_KEY: 'HAS_GIFT',
  NAME_KEY: 'GIFT_NAME',
  IMAGE_KEY: 'GIFT_IMAGE_URL',
};

// 是否允许对方在抽奖结束后重新抽奖
export const IS_SHOW_RESTART = true;

// 首页配置
export const homeConfig = {
  // 标题
  title: '18th Birthday Present ',
  // 留言，数组的每一项代表一行
  messages: [
    { key: 'a', wording: 'Darling 雯雯', },
    { key: 's', wording: '这次的礼物,用抽奖的形式', },
    { key: 'd', wording: '把"选择权"交给你', },
  ],
  // 最终解释权归属人
  owner: 'Benny',
  // 抽奖转盘的动画时间，单位毫秒
  timeout: 5000,
  // 指定赠送的礼物的索引（第几个礼物中奖），取值范围 0-8
  targetGiftIndex: 8,
};

// 礼物清单
// 字段 key 不用改，只要保证每个礼物的 key 字段是不同的即可
// 图片放在 public/images 中，建议是正方形，否则影响视觉体验
// name 是礼物的全称；alias 是礼物的简称（用来显示在抽奖方格里）
export const gifts = [
  { key: 'q', name: 'Swisse鱼油', alias: '鱼油', image: '/images/1.png',  description: '「吃不完的鱼油」' },
  { key: 'w', name: '核桃坚果', alias: '核桃坚果', image: '/images/2.png',  description: '「吃不完的核桃坚果」' },
  { key: 'e', name: '蕉下防晒衣', alias: '防晒衣', image: '/images/3.png',  description: '「凉感披肩防晒服,透气不闷汗」' },
  { key: 'r', name: '520红包', alias: '520', image: '/images/6.png',  description: '“想给你唱一百首情歌”' },
  { key: 't', name: '小刘鸭生活解压包', alias: '小刘鸭生活解压包', image: '/images/5.png',  description: '「缓解焦虑,释放压力」' },
  { key: 'y', name: '1314红包', alias: '1314', image: '/images/6.png',  description: '“从今往后，我都会在你旁边”' },
  { key: 'u', name: 'Airpods pro 2', alias: '耳机', image: '/images/7.png',  description: '惊人的科技"静悄悄"' },
  { key: 'i', name: 'Apple Watch', alias: '手表', image: '/images/8.png',  description: '「健康的一大步」' },
];
