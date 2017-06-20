import commonConfig from '../../common/config'

module.exports = Object.assign(
  {},
  commonConfig,
  {
    "extends": [
      "eslint-config-airbnb"
    ].map(require.resolve)
  }
)
