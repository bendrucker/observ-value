'use strict'

module.exports = function observValue (value) {
  return typeof value === 'function' ? value() : value
}
