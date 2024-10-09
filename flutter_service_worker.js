'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8ca693f56d0c2484f5feb2ca5434788b",
"assets/AssetManifest.bin.json": "6bf1cd86bf11b30af7d0bef60d8dd1bc",
"assets/AssetManifest.json": "cddbcdab66f23db91ec7f292920d56d8",
"assets/assets/adab.png": "4b6a4d12794d1b857984a369727b65d3",
"assets/assets/ahlalhadith.png": "b6d5aa8bc072c2fc3f871e2e2f9a2b9f",
"assets/assets/aljid.png": "32e10b6ffec18aff7e9b7a2f20d63bb4",
"assets/assets/aqeedah.png": "7710dc332eb03a23b78b72c55a88dccb",
"assets/assets/arabic.png": "6a7d7c1dbcfcb6d6e3e813b71d656bf3",
"assets/assets/data/ibnUthaymeen.json": "09567fe59e03826d4fc17496e3dc5e66",
"assets/assets/data/othmanKhamees.json": "1cb348216b5b1bf28d2f59b99521e5aa",
"assets/assets/data/salihFawzan.json": "7669861db599203a0c79536fb25bdf8b",
"assets/assets/data/shamela_data.json": "1400cee64059e2ba3f5a30e9e784a74d",
"assets/assets/fiqh.png": "a9520fe3f5c20da23d94db1b163cc8a1",
"assets/assets/firaq.png": "eebdc80fe901fa4e5a1de6d79f444ffc",
"assets/assets/hadith.png": "e11e0bdc57fdb6ccf731f563d0e5b708",
"assets/assets/header.png": "8b58365e4fb687192d3e7e8b552b1a92",
"assets/assets/logo.png": "9ef3ef8c6fbccb76b2b6662dabbe2d84",
"assets/assets/mustalah.png": "8e4edadea5c107c6d17a7c3161c870ac",
"assets/assets/paypal.png": "8d26100e7427c1e0850c090a9a12bbe3",
"assets/assets/quran.txt": "68f09c0b6193c3ea8aacb5f6307b144f",
"assets/assets/seerah.png": "ad08a512c9c20c6dd8540b91a200809f",
"assets/assets/tafsir.png": "77cf0d2a2efd4322776fad5df4b24a91",
"assets/assets/ukhra.png": "cf5eb06c83a8d7bc0120fd6dd7eb0e81",
"assets/assets/ulum_quran.png": "6345bb10034c254d0a19141f65fd99ac",
"assets/assets/usul_fiqh.png": "0a7e2cef5e99190a9576b6bbf16b200b",
"assets/FontManifest.json": "aba4a07949568237fe685ca717ff019b",
"assets/fonts/MaterialIcons-Regular.otf": "21521222d118151f75b35d20c2b19bc4",
"assets/NOTICES": "076225c4996d8da3ddb03a848b4b7fca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "23621397bc1906a79180a918e98f35b2",
"assets/packages/simple_circular_progress_bar/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "bc29a1310a3263321e45dc37aafa5bcc",
"icons/ahlalhadith.png": "b6d5aa8bc072c2fc3f871e2e2f9a2b9f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "26083a4ee604d39eef5464b7fd977de1",
"/": "26083a4ee604d39eef5464b7fd977de1",
"main.dart.js": "6326d67f533f96be5f15ea12f841ca3f",
"manifest.json": "560553b90546d924046bc8a64241edb2",
"splash/img/dark-1x.png": "a75b155c589d1796080ffe85dfa7830f",
"splash/img/dark-2x.png": "fc6b6fc59b35bd56406d1fea3a4e7e34",
"splash/img/dark-3x.png": "4a86f88c9ac5da1dcd6d20d56268dc1c",
"splash/img/dark-4x.png": "41ad8090dccc8b6dbe9cb3f34dde7d85",
"splash/img/light-1x.png": "a75b155c589d1796080ffe85dfa7830f",
"splash/img/light-2x.png": "fc6b6fc59b35bd56406d1fea3a4e7e34",
"splash/img/light-3x.png": "4a86f88c9ac5da1dcd6d20d56268dc1c",
"splash/img/light-4x.png": "41ad8090dccc8b6dbe9cb3f34dde7d85",
"version.json": "727e644babda56b47f57a835c533db24"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
