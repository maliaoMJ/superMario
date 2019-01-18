module.exports = {
  title: " SuperMario",
  description: "Super-Mario的个人主页",
  head: [
    ["link", { rel: "icon", href: "/img/favicon.ico" }],
    ["link", { rel: "manifest", href: "/manifest.json" }]
  ],
  host: "0.0.0.0",
  themeConfig: {
    logo: "/img/Super-Mario.png",
    nav: [
      { text: "主页", link: "/" },
      {
        text: "前端笔记",
        items: [
          { text: "JavaScript", link: "/javascript/" },
          { text: "CSS3", link: "/css3/" },
          { text: "HTML5", link: "/html5/" },
          { text: "jQuery", link: "/jquery/" },
          { text: "Bootstrap", link: "/Bootstrap/" },
          { text: "Vue", link: "/vue/" },
          { text: "React", link: "/react/" },
          { text: "Angular", link: "/angular/" }
        ]
      },
      {
        text: "面试",
        items: [
          { text: "jQuery", link: "/jquery/" },
          { text: "Bootstrap", link: "/Bootstrap/" },
          { text: "Vue", link: "/vue/" },
          { text: "React", link: "/react/" },
          { text: "Angular", link: "/angular/" }
        ]
      },
      { text: "关于", link: "/about/" },
      { text: "Github", link: "https://www.github.com/maliaoMJ" }
    ],
    sidebar: {
      "/javascript/": ["", "1"],
      "/css3/": [""],
      "/html5/": [""]
    },
    sidebarDepth: 2,
    lastUpdated: true,
    displayAllHeaders: true, // 默认值：false
    // 刷新弹窗按钮
    serviceWorker: {
      updatePopup: {
        message: "new content is available",
        buttonText: "Refresh"
      }
    }
  },

  serviceWorker: true
};
