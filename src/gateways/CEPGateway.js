const axios = require('axios')

class CEPGateway {
  async get(cep) {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`, {
      validateStatus: status => status > 0
    })
    return data
  }
}

module.exports = new CEPGateway()
