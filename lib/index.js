/**
 * Modules
 */

var mapObj = require('@f/map-obj')
var assign = require('@f/assign')

/**
 * Expose objFunctor
 */

module.exports = objFunctor

/**
 * objFunctor
 */

function objFunctor (obj) {
  return assign(Object.create({map: map}), obj)

  function map (fn) {
    return objFunctor(mapObj(fn, this))
  }
}
