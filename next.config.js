/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
    MONGODB_URI: "mongodb://127.0.0.1:27017/codingmstr"
  },
  reactStrictMode: true,
}

module.exports = nextConfig
