const get = require('lodash').get;
const en = {
  key: 'en',
  name: 'English',
  messages: {
    'nav.events': 'Events',
    'nav.jobs': 'Jobs',
    'nav.articles': 'Articles',
    'nav.about': 'About',
    'section.services': 'Our Services',
    'section.clients': 'Our Clients',
    'section.successStories': 'Success Stories',
    'section.about.company': 'The Company',
    'section.about.achievements': 'Our Achievements',
    'section.about.team': 'Our Team',
    'section.about.contact': 'Contact Us',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.address': 'Address',
    'contact.wechat': 'WeChat Official Account',
  },
};

const zh = {
  key: 'zh',
  name: '中文',
  messages: {
    'nav.events': '活动',
    'nav.jobs': '职位',
    'nav.articles': '文章',
    'nav.about': '关于',
    'section.services': '服务项目',
    'section.clients': '精选客户',
    'section.successStories': '成功案例',
    'section.about.company': '公司简介',
    'section.about.achievements': '主要成绩',
    'section.about.team': '团队成员',
    'section.about.contact': '联系我们',
    'contact.email': '电子邮件',
    'contact.phone': '电话',
    'contact.address': '地址',
    'contact.wechat': '微信公众号',
  },
};

const languages = {
  en,
  zh,
};

module.exports = {
  langs: ['en', 'zh'],
  defaultLangKey: 'en',
  getMessages: (langKey) => get(languages, [langKey, 'messages']),
  getName: (langKey) => get(languages, [langKey, 'name']),
};
