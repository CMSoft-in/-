'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "06268c2a59d200702985189f2dd68bd9",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"manifest.json": "b66bbcde7987a41da63c0b78061b8bba",
"version.json": "70bae5083be39f16f1818d8dda17040f",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"main.dart.js": "18c53413e12b7d6968cd3faff755efff",
"index.html": "46d8c7c6b79bddfd9f5b0926ae01e927",
"/": "46d8c7c6b79bddfd9f5b0926ae01e927",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/FontManifest.json": "b61750959e300f91043c5afdad36d824",
"assets/NOTICES": "cc061f2470c5eeafd969c0f34bfe332b",
"assets/AssetManifest.json": "8d210d06457e7693db06f513e64c6a62",
"assets/AssetManifest.bin": "bf1b213d1681714b8ea40424588033cd",
"assets/AssetManifest.bin.json": "58950a78d17f163519fe23989bb45f19",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/fonts/MaterialIcons-Regular.otf": "50178977e4e6c6823aa53e4450e77765",
"assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/title.png": "93aa8ef3d49dd365802c720071b3a4cd",
"assets/assets/todoicon.svg": "5e4476125adce5547bd6bed0d208c842",
"assets/assets/Labels.svg": "8c7a6d66e265948b8370f047a5645d27",
"assets/assets/basicplan.svg": "b15ae438f90a608946f1e4cbf50a6fce",
"assets/assets/dailyWages.svg": "a0539ecfb4af941653394ea4a0ab7cf6",
"assets/assets/Labour.svg": "87d6599efae4f59a95e86ea579cda609",
"assets/assets/Home/accounts.svg": "7724bbc643d55d41eecf9ee81297649e",
"assets/assets/Home/mvManager.svg": "a49b40bdae6e27471c334c4762e3fb97",
"assets/assets/Home/admin.svg": "2a2a1ee9df6cb7f789475f69fcf92ed4",
"assets/assets/Home/site_supervisor.svg": "49873414da5d9ef0c943d31be184fcbe",
"assets/assets/Home/siteEngineer.svg": "634d703b330505dfbeb6972aacfc9d61",
"assets/assets/Home/site_manager.svg": "b37317971588b63c719ff2767213920b",
"assets/assets/Home/generalManager.svg": "42717c0a3465b3826387bdd9021dbb53",
"assets/assets/Home/companyOnboard.svg": "8070751104ab7ed8f94dfd8e653ba284",
"assets/assets/Home/planning.svg": "558bcf6fd3c18b37d22c2f5a57fc5d88",
"assets/assets/contractWork.svg": "bc4ce1edc48ddd12a2620bb1907f18f1",
"assets/assets/siteprogress.png": "a8e3f67f0d9b98bee58d2f2eb9175f9d",
"assets/assets/SupplierCategory.svg": "752aa3db436e81e62a6db30e98dab047",
"assets/assets/SupplierEmptyDataImage.svg": "b52f36124e872bec3d4f2a7e7d134e5f",
"assets/assets/CompanyWarehouseEmptyDataImage.svg": "9881408fe6b6b40e3696a05916315861",
"assets/assets/deleteicon.svg": "d1124c04dd3e29408cb4d9dd28d7058d",
"assets/assets/buttomLogo.svg": "6e0c715e72ce83a1367865a87cdba782",
"assets/assets/Alerts.svg": "bc19209390d76a82562cc024a83cb0fa",
"assets/assets/buildingplanEmpty.svg": "693e1b750c70ab67bfe12787ea50274a",
"assets/assets/blockEmptyImage.svg": "12420cd93e88b90b9cf29f48d1501c82",
"assets/assets/plan.svg": "6ed79e45a901eb1572570d63ea2ffa29",
"assets/assets/ct_feedback.png": "96d75fdac6e094643e9adb52920d5765",
"assets/assets/editicon.svg": "c9754d8f16af9fb350940299662efd62",
"assets/assets/todo_siteengineer.png": "90535b7666041eba7d5ee6c5565e341d",
"assets/assets/Sites.svg": "40eaa32225db3f21e672e00582df33c1",
"assets/assets/Suppliers.svg": "04ddfba99cd634128724265c919772db",
"assets/assets/contractWorkEmptyDataImage.svg": "b69ec8faa3f9eb89382de2b4c6f4b9c5",
"assets/assets/bgAdminImage.svg": "97b3ebbc9f38cafa69b081debf49c75c",
"assets/assets/Materials.svg": "1c8201f6b9c645a5a6f91d0a05eb4812",
"assets/assets/site_inv.png": "545afede1927f12ffb301274cd4a0ca8",
"assets/assets/WorkCategory.svg": "36754831f3e71bf2ba6d1c3d78087a87",
"assets/assets/m&v.png": "faf84f7c92e6e9ab46d02a874fdd00f7",
"assets/assets/buildingEmptyDataImage.svg": "d99edc78f4ff41e89824b4a5e096f9da",
"assets/assets/CompanyUsers.svg": "6ea0d704949caa171fb9906106c8f4b7",
"assets/assets/MaterialsEmptyDataImage.svg": "7516f9fc9907c8d39189c227d27dde2d",
"assets/assets/pin%2520copy.png": "23a3889862ddaac32c52e769cb53d091",
"assets/assets/M&V.svg": "a13e5e9d896915dd435f18b3c16c2b3a",
"assets/assets/LabourEmptyDataImage.svg": "9e090a346b2642d5d6183d742a02bb95",
"assets/assets/Backarrow.png": "3dc1fd4c1a85774790a39375a52c06cb",
"assets/assets/bg.png": "19cd45735197aaad5d2cbc553bfd9ccf",
"assets/assets/SupplierCategoryEmptyDataImage.svg": "5b474d038510db7ed1baa37c3c8d1a32",
"assets/assets/rateWorkEmptyDataImage.svg": "f8704ca11f2b137f66ff4e45ca410062",
"assets/assets/dailyOutturnCheckImage.svg": "55e46cc00f0147343c018926585d19b0",
"assets/assets/materialrequest.svg": "125037e5ee8992ea3b7d3c55e21bbc4e",
"assets/assets/smslogo.svg": "6e0c715e72ce83a1367865a87cdba782",
"assets/assets/machines.svg": "de5505ec400ff29646fdb1d9eef69f4b",
"assets/assets/sms_logo.svg": "2d008c9c9a5e9ed99cf5571ca4913d1c",
"assets/assets/title1.svg": "3e827144f8cf85c979116c1d20c34565",
"assets/assets/MaterialCategory.svg": "7720edd7e7d387df21e4f8ae601e4e83",
"assets/assets/attendance.png": "75167085c9689c7f18dd2ad26ffb2b48",
"assets/assets/LabourCategory.svg": "20eb34516095ff0c6d50598d0abf7aee",
"assets/assets/logo.svg": "39a8c276d18327c0ea4371ec77c1c6f0",
"assets/assets/labelsemptydata.svg": "41653ae1dab74c5d7f422b3512a99868",
"assets/assets/mr.png": "af06585c5c815f3113ac96b6c90da523",
"assets/assets/CompanyWarehouse.svg": "6ed79e45a901eb1572570d63ea2ffa29",
"assets/assets/backArrow.svg": "b2cc74c8cf7e09506ed30acc4f069533",
"assets/assets/rate_work.png": "547ce153d2f8e037ecd2fa0f1a2270e9",
"assets/assets/M&VCategoryEmptyDataImage.svg": "a9d335485cb76f35f03c4ef79ac2fdf9",
"assets/assets/WorkCategoryEmptyDataImage.svg": "42dd949a7077a8e2c8d25426ac8679e5",
"assets/assets/block.svg": "3cbf347c8e999cc9227f5f807c17286e",
"assets/assets/buildingplanicon.svg": "9bf102b5f005d6824f5f1fc8617e31c6",
"assets/assets/miscEmptyDataImage.svg": "a5b3f52d173706eef5a785c5f20c3712",
"assets/assets/ratework.svg": "000f8ec2ab686b06139df9ca18fcebd6",
"assets/assets/Calendar%2520copy.png": "a258c9d40717e493c59f41adaafaa62f",
"assets/assets/MVCategory.svg": "6fa9f37ab3d3dfd0140d90c02f3a00dc",
"assets/assets/CompanyUserEmptyDataImage.svg": "cc79f83e80ca795318cb4b0a541a7195",
"assets/assets/siteProcess.png": "b445c44a8496685a42572d62982b50a0",
"assets/assets/siteEmptyDataImage.svg": "515ec458628a3342f489993003bd397a",
"assets/assets/todoempty.svg": "2cc0f91bea2ccb0b736abe8237a1bf5f",
"assets/assets/ClientEmptyDataImage.svg": "b3408f307bbc5a26ac3a952e9dbf599e",
"assets/assets/dailyouturncheck.png": "874ecc6f5bdafbb5d09a87c9f7059c73",
"assets/assets/LabourOutturnEmptyDataImage.svg": "a637d18d6323221750389671bdb8f6d9",
"assets/assets/LabourOutturn.svg": "ac72ca3d4964e736cc0cf0e505fcee13",
"assets/assets/MachinesEmptyDataImage.svg": "7e8048eeea0967abb1b658fe1de58028",
"assets/assets/planempty.svg": "b7a878b3ab61e41c5e1478b9abea0f82",
"assets/assets/Alerts_siteengineer.png": "a3593b33d7cb7555acba74a8d25b3d20",
"assets/assets/misc.svg": "1b815ba6ea4819f5e67ce42c160f16e2",
"assets/assets/dailyWagesEmptyDataImage.svg": "5e4868826e4b28856d4261cd4549d497",
"assets/assets/dailyOutturnCheckSM.png": "83f28bf5c75f0d238b41b639a31959a1",
"assets/assets/Calendar.png": "a258c9d40717e493c59f41adaafaa62f",
"assets/assets/material_inout.png": "db1d0cf4dd8dbed9bf09e43c92645ffc",
"assets/assets/vechiles.svg": "6fa9f37ab3d3dfd0140d90c02f3a00dc",
"assets/assets/VechilesEmptyDataImage.svg": "81ed4beefd8c3224a95658e9a4b998be",
"assets/assets/weeklyOutturnCheck.png": "13b7d7dceacae97fa513e3b8acf159c8",
"assets/assets/pin.png": "23a3889862ddaac32c52e769cb53d091",
"assets/assets/dailywages.png": "8deb763b77013574478989170693340a",
"assets/assets/materialInwordOutword.svg": "9eedd9dc1ddaf3103654d95da62987c7",
"assets/assets/LabourCategoryEmptyDataImage.svg": "d1c979259d7d49fff99e85b01f9882c0",
"assets/assets/Clients.svg": "b593efc8c55dbd4a6bbc4e75838c952b",
"assets/assets/todo.svg": "5e4476125adce5547bd6bed0d208c842",
"assets/assets/miscexp.png": "55fe3a28c07d6e4707b694a9d0d54bcf",
"assets/assets/cont_wrk.png": "d00146ec2c2eddadd36a95f72f76d837"};
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
