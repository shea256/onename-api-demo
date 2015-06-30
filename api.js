'use strict'

var get = require('got').get

module.exports = function () {
  return {
    getProfile: getProfile
  }
  function getProfile (username, callback) {
    var options = {json: true}
    get('https://onename.com/api/users?usernames=' + username, options, callback)
  }
}
