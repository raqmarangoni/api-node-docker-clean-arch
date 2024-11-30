const cepGateway = require('./CEPGateway')

class CEPController {
    async get(req, res) {
        try {
            const response = await cepGateway.get(req.params.cep)
            res.status(200).json(response)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Internal server error' })
        }
    }
}

module.exports = new CEPController()
