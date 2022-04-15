/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['source.unsplash.com'],
  },
  i18n: {
    locales: ['default', 'en', 'pl'],
    defaultLocale: 'default',
    localeDetection: false,
  },
  trailingSlash: true,
}

module.exports = nextConfig
