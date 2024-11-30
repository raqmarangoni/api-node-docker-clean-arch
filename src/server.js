const express = require('express')
const app = express()
const port = 3000
const router = require('./routes')
const { serve, setup } = require('swagger-ui-express')
const docs = require('./docs/index')

app.use('/documentation', serve, setup(docs))
app.use(express.json())
app.use(router)
app.listen(port, () => {
  console.log('Servidor executando')
})