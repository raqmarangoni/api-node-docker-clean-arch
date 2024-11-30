const express = require('express')
const router = express.Router()
const cepController = require('./CEPController')
const calculatorController = require('./CalculatorController')

router.get('/cep/:cep', cepController.get)
router.post('/calculate', calculatorController.post)

module.exports = router