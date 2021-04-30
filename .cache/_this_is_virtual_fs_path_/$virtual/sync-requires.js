
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/mbusonkabinde/belle/MusicApp/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/mbusonkabinde/belle/MusicApp/src/pages/404.js")),
  "component---src-pages-album-js": preferDefault(require("/Users/mbusonkabinde/belle/MusicApp/src/pages/album.js")),
  "component---src-pages-artist-js": preferDefault(require("/Users/mbusonkabinde/belle/MusicApp/src/pages/artist.js")),
  "component---src-pages-home-js": preferDefault(require("/Users/mbusonkabinde/belle/MusicApp/src/pages/home.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/mbusonkabinde/belle/MusicApp/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/mbusonkabinde/belle/MusicApp/src/pages/page-2.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/Users/mbusonkabinde/belle/MusicApp/src/pages/using-typescript.tsx"))
}

