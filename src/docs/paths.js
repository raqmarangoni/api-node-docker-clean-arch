const cepPath = require('./paths/cepPath')
const calculatorPath = require('./paths/calculatorPath')

module.exports = {
  '/cep/{cep}': cepPath,
  '/calculator': calculatorPath
}
