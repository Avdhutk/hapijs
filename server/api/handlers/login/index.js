const db = require('../../../storage/models');

const getUser = {
  description: 'testing api',
  handler: (req, res) => {
    return db.demo.create({
      actor: 'I am not a actor'
    }).then((value) => {
      console.log('Response', value);
      return 'Hello, world!';
    }).catch((err) => {
      console.log('err',err);
    })
  }
}
const getName = {
  handler: (req, res) => {
    return `Hello.. I am ${req.query.name}`
  }
}
exports.routes = [{
  method: 'GET',
  path: '/',
  config: getUser
},
{
  method: 'GET',
  path: '/name',
  config: getName
}]
