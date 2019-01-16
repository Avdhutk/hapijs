const login = require('./handlers/login');
const fcreport = require('./handlers/reports/fcreport');
const register = (plugin, options) => {
  plugin.route(Array.prototype.concat(login.routes, fcreport.routes) );
}
exports.plugin = {
  register,
  name: 'api',
  version: '1.0.0'
};
