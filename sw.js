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
    "url": "webpack-runtime-48170ae603f972a40076.js"
  },
  {
    "url": "app-73aa3847bbf9266f59a1.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-75ac8e86c1cf4c1e89e8.js"
  },
  {
    "url": "index.html",
    "revision": "e38d1b6cdb30b1fda28cb5819a52963a"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "fcd2ef9492fa37e6b0088f2677bbc6cf"
  },
  {
    "url": "component---src-pages-index-jsx.69a945a11e23dfafac91.css"
  },
  {
    "url": "2.b1fe2141aa1ff37cb687.css"
  },
  {
    "url": "0-67c09113654780576fac.js"
  },
  {
    "url": "1-deeb871e12479340903a.js"
  },
  {
    "url": "3-449755f3954bae9e5e9a.js"
  },
  {
    "url": "2-cfed1a4be69dcc5a8553.js"
  },
  {
    "url": "component---src-pages-index-jsx-b42389bb6649d222fbac.js"
  },
  {
    "url": "static/d/81/path---index-6a9-pMCfV1mA6YTn8pbLbNXi9cqmU.json",
    "revision": "66197d85ff7f92fb6556880a6978b1be"
  },
  {
    "url": "component---src-pages-404-jsx-68f8d44b6c86c24cae96.js"
  },
  {
    "url": "static/d/938/path---404-html-516-62a-re9pii5SrGqQWAdb7fk3Rn9uUc.json",
    "revision": "1cd07b14966716ede2c4af0bc12ed79d"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
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