'use strict'

var createClient = require('./api')
var api = createClient()

var createElement = require('base-element')

document.addEventListener('DOMContentLoaded', function () {
  var element = createElement(document.body)

  var state = null

  api.getProfile('fredwilson', function (err, profiles) {
    if (err) throw err
    state = profiles.fredwilson.profile
  })

  function render () {
    if (!state) return
    element.render(function () {
      return element.html('div', [
        element.html('h1', state.name.formatted)
      ])
    })
  }

  function loop () {
    requestAnimationFrame(function () {
      render()
      loop()
    })
  }
  loop()
})
