module.exports = {
  title: "LazyKids",
  description: "LazyKids的个人主页",
  head: [
    ["link", { rel: "icon", href: "/img/favicon.ico" }],
    ["link", { rel: "manifest", href: "/manifest.json" }]
  ],
  host: "0.0.0.0",
  themeConfig: {
    logo: "/img/tiger.png",
    nav: [
      { text: "主页", link: "/" },
      {
        text: "前端基础",
        items: [
          { text: "JavaScript", link: "/javascript/" },
          { text: "CSS3", link: "/css3/" },
          { text: "HTML5", link: "/html5/" }
        ]
      },
      {
        text: "前端框架",
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
      "/javascript/": ["", "base"],
      "/css3/": ["", "base"],
      "/html5/": ["", "base"]
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
