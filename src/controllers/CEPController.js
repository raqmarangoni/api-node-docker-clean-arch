const cepGateway = require('../gateways/CEPGateway')

class CEPController {
  async get(req, res) {
    try {
      const cep = req.params.cep
      if (isNaN(cep) | cep.length !== 8) return res.status(400).json({ message: 'CEP deve ser um número de 8 dígitos' })
      const response = await cepGateway.get(cep)
      return res.status(200).json(response)
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Internal server error' })
    }
  }
}

module.exports = new CEPController()
