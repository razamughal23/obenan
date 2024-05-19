const withNextIntl = require("next-intl/plugin")("./i18n.ts");

module.exports = withNextIntl({
  experimental: { appDir: true },
  trailingSlash: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["cms.obenan.com", "flagcdn.com"],
  },
});
