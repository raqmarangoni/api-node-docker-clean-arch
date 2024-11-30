const axios = require('axios')

class CEPGateway {
  async get(cep) {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    return data
  }
}

module.exports = new CEPGateway()
