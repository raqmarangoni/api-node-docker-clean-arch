class CalculatorController {
  post(req, res) {
    const { x, y } = req.body
    if (isNaN(x) | isNaN(y)) return res.status(400).json({ message: 'x e y são obrigatórios e devem ser números' })
    const result = Math.round(x / y)
    res.json(result)
  }
}

module.exports = new CalculatorController()