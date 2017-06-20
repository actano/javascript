var commonConfig = require('../../common/config')

module.exports = Object.assign(
  {},
  commonConfig,
  {
    "extends": [
      "eslint-config-airbnb-base"
    ].map(require.resolve)
  }
)
