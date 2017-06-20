var commonConfig = require('../../common/config')

module.exports = Object.assign(
  {},
  commonConfig,
  {
    "extends": [
      "eslint-config-airbnb"
    ].map(require.resolve)
  }
)
