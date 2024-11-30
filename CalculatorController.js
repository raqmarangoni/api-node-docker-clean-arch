class CalculatorController {
    post(req, res) {
        const { x, y } = req.body
        const result = Math.round(x / y)
        res.json(result)
    }
}

module.exports = new CalculatorController()