const express = require('express')
const router = express.Router()
const cepController = require('./controllers/CEPController')
const calculatorController = require('./controllers/CalculatorController')

router.get('/cep/:cep', cepController.get)
router.post('/calculator', calculatorController.post)

module.exports = router