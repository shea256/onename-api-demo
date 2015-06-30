'use strict'

var test = require('tape')
var createClient = require('./api')

test('get profile', function (t) {
  t.plan(2)
  var api = createClient()
  api.getProfile('fredwilson', function (err, profiles) {
    if (err) return t.end(err)
    t.ok(profiles.fredwilson)
    var fred = profiles.fredwilson
    t.equal(fred.profile.bio, 'I am a VC')
  })
})
