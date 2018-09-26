self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('sw').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/restaurant.html',
	   '/restaurant.html?id=1',
	   '/restaurant.html?id=2',
	   '/restaurant.html?id=3',
	   '/restaurant.html?id=4',
	   '/restaurant.html?id=5',
	   '/restaurant.html?id=6',
	   '/restaurant.html?id=7',
	   '/restaurant.html?id=8',
	   '/restaurant.html?id=9',
	   '/restaurant.html?id=10',
       '/css/',
       '/data/',
       '/img/',
       '/js/'
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {
 console.log(event.request.url);

 event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});