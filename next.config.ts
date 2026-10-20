import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: false,
  turbopack: {
    root: process.cwd(),
  },
}

export default nextConfig
