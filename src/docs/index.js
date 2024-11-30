const paths = require('./paths')
const schemas = require('./schemas')

module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'Node.js API',
    description: 'Oriented to provide input on API routes',
    version: '1.0.0',
    license: {
      name: 'GPL-3.0-or-later',
      url: 'https://spdx.org/licenses/GPL-3.0-or-later.html'
    }
  },
  servers: [
    {
      url: '/',
      description: 'Servidor Principal'
    }
  ],
  tags: [
    {
      name: 'CEP',
      description: 'Search zip code'
    },
    {
      name: 'Calculator',
      description: 'Search zip code'
    }
  ],
  paths,
  schemas
}
