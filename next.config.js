const withPreact = require('next-plugin-preact');

module.exports = withPreact({
  experimental: {
    esmExternals: false
  }
});