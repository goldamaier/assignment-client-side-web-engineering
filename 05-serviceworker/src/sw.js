var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  // '/',
  '/index.html',
  '/favicon.ico',
  '/assets/css/global.css',
  '/assets/fonts/fontawesome-webfont.eot?v=4.6.3',
  '/assets/fonts/fontawesome-webfont.svg?v=4.6.3',
  '/assets/fonts/fontawesome-webfont.ttf?v=4.6.3',
  '/assets/fonts/fontawesome-webfont.woff?v=4.6.3',
  '/assets/fonts/fontawesome-webfont.woff2?v=4.6.3',
  '/assets/fonts/FontAwesome.otf?v=4.6.3',
  '/assets/img/balloons.svg',
  '/assets/img/ci.png',
  '/assets/img/code.svg',
  '/assets/img/github-logo.png',
  '/assets/img/logo.svg',
  '/assets/img/me_bw.png',
  '/assets/img/og_jpeer.jpg',
  '/assets/img/promo_5.png',
  '/assets/img/responsive-default.png',
  '/assets/img/projects/portalbee.jpg',
  '/assets/img/projects/prazna.jpg',
  '/assets/img/projects/railroad-medium.png',
  '/assets/img/projects/railroad.png',
  '/assets/img/projects/schwarzkoenig-medium.png',
  '/assets/img/projects/schwarzkoenig.png',
  '/assets/img/projects/somnia.jpg',
  '/assets/img/projects/volxpop.jpg',
  '/assets/img/slider/fish.jpg',
  '/assets/img/slider/hoverfly.jpg',
  '/assets/js/app.js',
  '/assets/js/main.js',
  '/assets/js/template.js',
  '/assets/js/vendor.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// self.addEventListener('fetch', function fetcher(event) {
//   const request = event.request;
//
//   if (request.url.indexOf('assets') > -1) {
//     console.log('Handling fetch event for', event.request.url);
//
//     event.respondWith(
//       caches.match(event.request).then((response) => (
//         // response if there is a cache
//         // fetch if there is nothing cached and then cache it
//         response || fetch(request).then(response_two => {
//           caches
//             .open('JPEER_CACHE_SW')
//             .then((cache) => {
//               cache.put(request.url, response_two);
//             });
//         })
//       ))
//     );
//   }
// });
