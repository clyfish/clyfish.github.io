importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js')
workbox.precaching.precacheAndRoute([{
  url: 'echarts-5.4.3.min.js',
  revision: null,
}])
workbox.core.clientsClaim()
workbox.core.skipWaiting()
