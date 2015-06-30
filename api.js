'use strict'

var fred = require('./fred.json')

module.exports = function () {
  return {
    getProfile: getProfile
  }
  function getProfile (username, callback) {
    process.nextTick(callback.bind(null, null, fred))
  }
}
