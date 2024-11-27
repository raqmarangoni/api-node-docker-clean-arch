const express = require('express')
const app = express()
const port = 8000
const axios = require('axios')

app.get('/cep/:cep', (req, res) => {
    axios.get(`https://viacep.com.br/ws/${req.params.cep}/json/`)
    .then((response) => res.send(response.data))
})

app.listen(port, () => { })
