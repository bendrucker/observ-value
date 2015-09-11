'use strict'

var test = require('tape')
var Observ = require('observ')
var value = require('./')

test(function (t) {
  var o = Observ('foo')
  t.equal(value(o), 'foo')
  t.equal(value(o()), 'foo')
  t.end()
})
