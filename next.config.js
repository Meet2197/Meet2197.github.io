/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  basePath: isProd ? '/Meet2197.github.io' : '',
  trailingSlash: true,
};
