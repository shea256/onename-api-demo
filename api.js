'use strict'

var get = require('got').get

module.exports = function (id, token) {
  var authQuery = {
    'app-id': id,
    'app-secret': token
  }
  return {
    getProfile: getProfile
  }
  function getProfile (username, callback) {
    get('https://api.onename.com/v1/users/fredwilson', {query: authQuery, json: true}, callback)
  }
}
