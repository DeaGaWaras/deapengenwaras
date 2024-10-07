/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
        pathname: '/thumbnail/**', // Ensure wildcard to match URLs
      },
      {
        protocol: 'https',
        hostname: 'api.microlink.io', // Remove extra quotes
        port: '',
        pathname: '/',
      },
    ],
  },
}

module.exports = nextConfig
