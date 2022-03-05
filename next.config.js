module.exports = {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === "production" ? "/next-profile" : "",

  publicRuntimeConfig: {
    basePath: process.env.NODE_ENV === "production" ? "/next-profile" : "",
  }
};
