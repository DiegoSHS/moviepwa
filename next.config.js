const nextConfig = require("next-pwa")({
  pwa: {
    dest: "public",
  },
})

module.exports = nextConfig({
  images: {
    domains: ["image.tmdb.org"],
  },
});
