/*@type {import('next').NextConfig} */
/*const NextConfig = {
    output: "export",
};

module.exports = NextConfig;*/

module.exports = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.cache = false;
      }
      return config;
    },
  };