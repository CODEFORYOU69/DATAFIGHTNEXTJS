/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    connectionString: "mongodb://localhost/datafight",
    secret: "bhjzè!778B$H2bnb9+jk%LJLJljaZRvj8!J",
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
