module.exports = {
  get: {
    tags: ['CEP'],
    summary: 'Search zip code by number to find address',
    parameters: [
      {
        in: 'path',
        name: 'cep',
        description: 'number of the zip code',
        required: true,
        schema: {
          type: 'number'
        }
      }
    ],
    responses: {
      200: {
        description: 'Successful to find address by zip code',
        content: {
          'application/octet-stream': {
            schema: {
              $ref: '#/schemas/cep/get'
            }
          }
        }
      },
      400: {
        description: 'Invalid zip code supplied'
      },
      404: {
        description: 'Zip code not found'
      }
    }
  }
}
