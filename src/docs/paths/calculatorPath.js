module.exports = {
  post: {
    tags: ['Calculator'],
    summary: 'Performs division of two numbers returning the closest integer',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/calculator/post'
          }
        }
      }
    },
    responses: {
      201: {
        description: 'Successful in calculating division',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/calculator/post'
            }
          }
        }
      },
      400: {
        description: 'Invalid numbers provided'
      }
    }
  }
}
