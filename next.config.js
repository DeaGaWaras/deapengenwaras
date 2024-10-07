/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com', // Allow images from Google Drive
        port: '',
        pathname: '/uc', // Update the pathname to match the 'uc' URL structure
      },
      {
        protocol: 'https',
        hostname: 'api.microlink.io', // Allow images from Microlink API
        port: '',
        pathname: '/',
      },
    ],
  },
}

module.exports = nextConfig
