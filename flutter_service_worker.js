'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "82d44d7443dd9d02d3b65de91058642d",
"/": "82d44d7443dd9d02d3b65de91058642d",
"main.dart.js": "a6aa2463a9c4828c1aa20cbaff18caa4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "94bb236a546897b59bb6a9fd0cfc5401",
"assets/LICENSE": "402437cbb68729f13b187a809e3775ae",
"assets/AssetManifest.json": "c7cccd818bd1d4664995ea3779f40e56",
"assets/FontManifest.json": "6fa25ba356a3baba63770901356ae9a5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "8e7f807ef943bff1f6d3c2c6e0f3769e",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "ca9ce9ff0676a9b04ef0f8a3ad17dd08",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/images/flags/flag_tz.png": "72b6aa95cbc2ebaaa021ba1e371795d0",
"assets/assets/images/flags/flag_kn.png": "f21a7c97687ae05330a3e414b19de194",
"assets/assets/images/flags/flag_rw.png": "234b96839f3f5187c3e646ae0830e062",
"assets/assets/images/Aligraphy-iOS.png": "fc2f140d5051758b536ab97dc52d10c2",
"assets/assets/images/Aligraphy-glyph-colored.png": "989823ed9152166cf8a5d9921157c47f",
"assets/assets/images/loader.gif": "2aa73fcdde3b241a27de77117e773b9c",
"assets/assets/images/Nukta.-dark.png": "96d13eb7989511975ac7b3900a26d2a0",
"assets/assets/images/Nukta.-light.png": "c4c4b23e14e8aca699c7cba5ae5ca504",
"assets/assets/images/ar/radios-360.jpg": "8ba16f0c87d6d90d5af992c016d77b62",
"assets/assets/images/ar/earth.jpg": "1043ccc8a34f3ac82ec0453545c80e64",
"assets/assets/images/ar/marcio_cabral_360.jpg": "dcc98747b85115cab1fe69fa91a23505",
"assets/assets/images/ar/vlt-360.jpg": "894b1e99d825eb01bc639fef7988c7b7",
"assets/assets/images/loader-dark.gif": "a354996ff160327651d2a6a41c3f51b5",
"assets/assets/fonts/WorkSans-Regular.ttf": "740b8e9adcb998d4f65b3b18251fb5e2",
"assets/assets/fonts/NeueHaasGrotesk-Bold.ttf": "822ebe551ca0a1191ecadaa8fa71ddb5",
"assets/assets/fonts/NeueHaasGrotesk-Roman.ttf": "13568ea57eda4ce469fa0600426963a5",
"assets/assets/fonts/WorkSans-Light.ttf": "121d613863a872004b04d5a1d782b3e4",
"assets/assets/fonts/NeueHaasGrotesk-Thin.ttf": "880401ec0686993ae377a6621e50d58a",
"assets/assets/fonts/GothicA1-Regular.ttf": "e742f688ceac24b94fedc826b19a43df",
"assets/assets/fonts/GothicA1-Thin.ttf": "39b303cfa7ebfe70f9d7544357909480",
"assets/assets/fonts/Lato-Regular.ttf": "2d36b1a925432bae7f3c53a340868c6e",
"assets/assets/fonts/Raleway-Regular.ttf": "9942588a6c84f959132556d99e83ded6",
"assets/assets/fonts/GothicA1-Bold.ttf": "f53ebb7bc7eb4957d6aa13867cb66f42",
"assets/assets/fonts/AktivGroteskCorp-Regular.ttf": "6111999753cf7d3c2c5cb094fe97e624",
"assets/assets/fonts/WorkSans-Medium.ttf": "eddbbc629def6aa237965521b3af404f",
"assets/assets/fonts/Raleway-Light.ttf": "466d154fedd98f85c9deb363ccf859a7",
"assets/assets/fonts/AktivGroteskCorp-Medium.ttf": "6e67f4fbe9dff58c35c91353f70653c1",
"assets/assets/fonts/AktivGroteskCorp-Bold.ttf": "f87e88afb2569be371ef080d5986b4a7",
"assets/assets/fonts/NeueHaasGrotesk-Medium.ttf": "c00931e8b3cca8082101c210353fe27e",
"assets/assets/fonts/Raleway-Bold.ttf": "f49f3d2d9df5013c9bfaab7e3d39ee57",
"assets/assets/fonts/AktivGroteskCorp-Light.ttf": "0f87cb2fc09c4b28810f64c3d5ca3410"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
