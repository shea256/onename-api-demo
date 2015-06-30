'use strict'

var test = require('tape')
var createClient = require('./api')

test('get profile', function (t) {
  t.plan(3)
  var id = '8170411b52118ef07e69228c431516f2'
  var secret = 'b99e4eec28b8fd80c5b971cdfde7779de42b129f8e5372456e14a1c9962f928e'
  var api = createClient(id, secret)
  api.getProfile('fredwilson', function (err, profiles) {
    if (err) return t.end(err)
    t.ok(profiles.fredwilson)
    var fred = profiles.fredwilson
    t.equal(fred.verifications.length, 2)
    t.equal(fred.profile.bio, 'I am a VC')
  })
})
