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
    "revision": "e461e58b9ca5b769c06e8fd94ab06750"
  },
  {
    "url": "assets/css/0.styles.4884f16e.css",
    "revision": "4fb60d0cd331e49edfa55e1def5a82db"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f8f97ce2.js",
    "revision": "146e6a05d0344088c1fcb2ed252787c7"
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
    "url": "assets/js/4.497276bf.js",
    "revision": "7e9d713822cdb2c6c97864a0c4df33b9"
  },
  {
    "url": "assets/js/5.7b5d24aa.js",
    "revision": "121cb599aed715d11efa2efce08c9d13"
  },
  {
    "url": "assets/js/6.24d0d930.js",
    "revision": "7968471dba8e9fe26a519b1926fb35a9"
  },
  {
    "url": "assets/js/7.6b645856.js",
    "revision": "57bf9ecd296572eac7c25450a09efdf8"
  },
  {
    "url": "assets/js/8.3463e724.js",
    "revision": "e872fd9d998e1edbd8e1c8514fc92070"
  },
  {
    "url": "assets/js/9.17a4cf60.js",
    "revision": "ce55b481d4982e6fbf60197980b7bc91"
  },
  {
    "url": "assets/js/app.e50a1f91.js",
    "revision": "6d08b3b3e30f56d8d41e2341e5316525"
  },
  {
    "url": "EN/index.html",
    "revision": "f59ba174ccac1381b492fad99bce9a15"
  },
  {
    "url": "guide/index.html",
    "revision": "b1f87cc73f1cf3c23d4d3e7949da768b"
  },
  {
    "url": "img/404.png",
    "revision": "aa2cf675ae919d55d78560a7b65c5ea8"
  },
  {
    "url": "img/main.jpeg",
    "revision": "e37a71f27b062bf7aa741561b8105d5d"
  },
  {
    "url": "img/Super-Mario.png",
    "revision": "e6f136d791b4e7f145c23d6de543ccf6"
  },
  {
    "url": "index.html",
    "revision": "0b93598ff51ab1f16c92db7d5d279a65"
  },
  {
    "url": "javascript/base.html",
    "revision": "f31b076545c9e837c002f40b687d8878"
  },
  {
    "url": "javascript/index.html",
    "revision": "e38272c611176aad65a87ea35e78689f"
  },
  {
    "url": "ZH/index.html",
    "revision": "8b453a42aad3ee07620c0d94b279316f"
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
