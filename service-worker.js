const CACHE_NAME = 'tuzsa-frontend-static-cache'
const urlsToCache = [
  'https://fonts.googleapis.com/css?family=Questrial',
  '/static/img/appvanza.png',
  '/static/img/appvanza-32x32.png',
  '/static/img/appvanza-64x64.png',
  '/static/img/appvanza-128x128.png',
  '/static/img/appvanza-144x144.png',
  '/static/img/appvanza-192x192.png',
  '/dist/build.js'
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  )
})
