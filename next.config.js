/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        port: '',
        pathname: '/profile_images/**/**.jpg',
      },
      {
        protocol: 'https',
        hostname: 'static-cdn.jtvnw.net',
        port: '',
        pathname: '/ttv-boxart/**.jpg',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.rawg.io',
        port: '',
        pathname: '/media/games/**/**.jpg',
      },
      {
        protocol: 'https',
        hostname: 'media.rawg.io',
        port: '',
        pathname: '/media/screenshots/**/**.jpg',
      },
    ],
  },
};

module.exports = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};

module.exports = nextConfig;
