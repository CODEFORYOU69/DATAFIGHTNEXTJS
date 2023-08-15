/** @type {import('next').NextConfig} */

require('dotenv').config();


const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    connectionString: "mongodb://localhost/datafight",
    secret: process.env.SECRET,
  },
  publicRuntimeConfig: {
    apiUrl:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/api" // development api
        : "http://localhost:3000/api", // production api
  },
  images: {
    domains: ['localhost'],
    path: '/',

  },
};

module.exports = nextConfig;
