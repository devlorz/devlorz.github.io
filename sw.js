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

importScripts("workbox-v3.6.2/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.2"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
<<<<<<< HEAD
    "url": "webpack-runtime-bb2568a5886612934004.js"
  },
  {
    "url": "app-53bcc65e462deb710968.js"
=======
    "url": "webpack-runtime-f05b6c22d3e616df2e5f.js"
  },
  {
    "url": "app-3f52b6739043a76e719f.js"
>>>>>>> 0217e2918b6fec9bb8d4e56b986d05504a8d8702
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-af1103fe30df0db1add3.js"
  },
  {
    "url": "index.html",
<<<<<<< HEAD
    "revision": "e7472e11ddaee351d82b74a2e6eec987"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "f153b26f0ddec537f24cef017d8ebd2b"
  },
  {
    "url": "component---src-pages-index-js.1311fcbefd6469916384.css"
  },
  {
    "url": "component---src-pages-index-js-4975d9fa02ad056d11bb.js"
=======
    "revision": "1e918222cd402b00ff1db2c0949fecb4"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "49d63464dcec29c5850bd578dc74f2ce"
  },
  {
    "url": "component---src-pages-index-js.89ed34448c2b9429b031.css"
  },
  {
    "url": "component---src-pages-index-js-0b22b5b03fb49bf93e80.js"
>>>>>>> 0217e2918b6fec9bb8d4e56b986d05504a8d8702
  },
  {
    "url": "1-9256231ec37e09fd46a7.js"
  },
  {
    "url": "0-5c1da72048b452fa552e.js"
  },
  {
    "url": "static/d/173/path---index-6a9-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "61255ab626bc31d956db42eda5777940"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});