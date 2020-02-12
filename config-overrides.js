const {
    override,
    fixBabelImports,
    addLessLoader,
    useEslintRc,
    addDecoratorsLegacy,
  } = require('customize-cra')

module.exports = override(
    addDecoratorsLegacy(),
    useEslintRc(),
)