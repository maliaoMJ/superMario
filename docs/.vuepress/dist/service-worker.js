/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e2b3febc26f2fba646e3507286886edb"
  },
  {
    "url": "assets/css/0.styles.0b4dabc8.css",
    "revision": "3d7381e86d4d7e6cd2ba2a27e82efaaa"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.67cf5634.js",
    "revision": "49a5c34ff95438e5360e24658d039ddb"
  },
  {
    "url": "assets/js/3.c0388c08.js",
    "revision": "22d7cbe97b31a486327a390859ab3d04"
  },
  {
    "url": "assets/js/4.b6b97275.js",
    "revision": "26b3b24f1f608a8870727c651ed06331"
  },
  {
    "url": "assets/js/5.0ceffd0e.js",
    "revision": "5acc73c3f4bd1b86c690b1c1a6e3b1a0"
  },
  {
    "url": "assets/js/6.54c9612d.js",
    "revision": "a1cd552e64f0a9cea93124c67db3e54c"
  },
  {
    "url": "assets/js/7.c6756249.js",
    "revision": "4fdf9d84869fa7e4c191a803b8da9b16"
  },
  {
    "url": "assets/js/8.74a5d9b0.js",
    "revision": "55d7d2e82a5f9dca8ebfced5317bae02"
  },
  {
    "url": "assets/js/app.7ee9888f.js",
    "revision": "abb4846e7de510e6637b7942146357a1"
  },
  {
    "url": "guide/index.html",
    "revision": "13274d7d5824f7b04949ec011381a7ff"
  },
  {
    "url": "img/main.jpeg",
    "revision": "e37a71f27b062bf7aa741561b8105d5d"
  },
  {
    "url": "img/water.jpeg",
    "revision": "5cd07006e7d7de15de23a8306bc310a7"
  },
  {
    "url": "index.html",
    "revision": "55b8b332d05312dbd3ea1ac5c3ac539d"
  },
  {
    "url": "javascript/base.html",
    "revision": "a285d51217f3ff08d09c3e519ef68dd7"
  },
  {
    "url": "javascript/index.html",
    "revision": "ec4966776e0cfe58b2c4c257195dad9f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
