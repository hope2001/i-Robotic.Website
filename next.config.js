// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// // module.exports = nextConfig



// module.exports = {
//   nextConfig,
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.resolve.alias['tsparticles/path-generation'] = 'tsparticles/dist/path-generation';
//     }

//     return config;
//   }
// };



/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  ...nextConfig, // Spread the properties of nextConfig object
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias['tsparticles/path-generation'] = 'tsparticles/dist/path-generation';
    }

    return config;
  }
};
