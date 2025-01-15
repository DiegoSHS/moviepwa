const withPWA = require("next-pwa")({
  dest: "public",
})

const nextConfig = withPWA({
  images: {
    domains: ["image.tmdb.org"],
  },
});

module.exports = nextConfig;