function buildConfig(env = 'local') {
  const config = require(`./webpack/webpack.${ env }.js`)({ env });
  return config;
}

module.exports = buildConfig;