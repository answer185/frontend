module.exports = {
  title: "前端总结",
  description: "分享知识，共同学习。",
  base: "/frontend/",
  dest: "../answer185.github.io/frontend",
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
      '/html/': [
        {
            title: "结构化和语义化",
            path: "/html/structure"
          }
      ],
      '/js/': [
        {title: "基础", path: "/js/leak"}
      ]   
    }
  }
};
