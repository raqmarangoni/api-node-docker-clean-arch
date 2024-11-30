module.exports = {
  post: {
    type: 'number',
    properties: {
      'x': {type: 'number'},
      'y': {type: 'number'}
    },
    required: ['x', 'y']
  }
}