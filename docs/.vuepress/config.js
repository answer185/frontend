module.exports = {
  title: "前端总结",
  description: "分享知识，共同学习。",
  base: "/frontend/",
  markdown: {
    lineNumbers: true
  },
  displayAllHeaders: false,
  themeConfig: {
    nav: [
      { text: "HTML", link: "/html/" },
      { text: "JS", link: "/js/" },
    ],
    sidebar: {
      '/html/': getHtmlSidebar(),
      '/js/': getJSSidebar()  
    }
  }
};

function getHtmlSidebar() {
  return [
    'structure',
    'element'
  ]
}

function getJSSidebar() {
  return [
    {title: '基础', collapsable: true, children: getJSBasicSidebar()},
    {title: '开发', collapsable: true, children: getJSDevSidebar()},
  ]
}

function getJSBasicSidebar() {
  return ['leak', 'BOM', 'DOM', 'function'];
}

function getJSDevSidebar() {
  return ['async', 'message', 'draw', 'animation', 'scroll'];
}