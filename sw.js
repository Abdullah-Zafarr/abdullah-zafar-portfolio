const CACHE_NAME = 'az-portfolio-v28';
const PRECACHE_URLS = [
  './',
  'index.html',
  'manifest.json',
  'assets/css/styles.css',
  'assets/js/app.js',
  'assets/vendor/lucide.min.js',
  'assets/icons/logo.PNG',
  'assets/brand/az-mark.svg',
  'assets/audio/netflix-sound.mp3',
  'assets/images/certificates/spiral-lab-cert.png',
  'assets/images/certificates/bricklix-cert.jpg',
  'assets/images/certificates/niit-letter.png',
  'assets/images/projects/collabboard.png',
  'assets/images/projects/VIDEO%20FOR%20EXPERIENCE%20BACKGROUND.webm',
  'assets/images/projects/BACKGROUND%20VIDEO%20FOR%20BLOGS.webm'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(PRECACHE_URLS);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Only handle same-origin or known asset requests
  if (url.origin !== self.location.origin) return;

  // HTML navigation: Network first, falling back to cache
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match(request).then(cached => cached || caches.match('./')))
    );
    return;
  }

  // Video / Audio Range requests: serve from cache if available
  if (request.headers.has('range')) {
    event.respondWith(
      caches.open(CACHE_NAME).then(async cache => {
        const cachedResponse = await cache.match(request.url, { ignoreSearch: true });
        if (cachedResponse) {
          const arrayBuffer = await cachedResponse.arrayBuffer();
          const rangeHeader = request.headers.get('range');
          const bytesMatch = rangeHeader.match(/bytes=(\d+)-(\d*)/);
          if (bytesMatch) {
            const start = parseInt(bytesMatch[1], 10);
            const total = arrayBuffer.byteLength;
            const end = bytesMatch[2] ? parseInt(bytesMatch[2], 10) : total - 1;
            const chunk = arrayBuffer.slice(start, end + 1);
            return new Response(chunk, {
              status: 206,
              statusText: 'Partial Content',
              headers: {
                'Content-Range': `bytes ${start}-${end}/${total}`,
                'Accept-Ranges': 'bytes',
                'Content-Length': chunk.byteLength,
                'Content-Type': cachedResponse.headers.get('Content-Type') || (url.pathname.endsWith('.webm') ? 'video/webm' : 'video/mp4')
              }
            });
          }
        }
        return fetch(request);
      })
    );
    return;
  }

  // Static assets: Cache first, falling back to network
  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(response => {
        if (response && response.status === 200) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        }
        return response;
      });
    })
  );
});
