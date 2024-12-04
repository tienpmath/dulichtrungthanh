/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['.'],
  },
  reactStrictMode: true,
  compiler: {
    removeConsole: false,
  },
  experimental: {
    reactCompiler: true,
  },
};

module.exports = nextConfig;
module.exports = {
  images: {
    domains: ['localhost', 'dalattodaytravel.com', 'admin.ictdalat.vn'],
  },
};

