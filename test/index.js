/**
 * Imports
 */

var objFunctor = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should create mapable obj', function (t) {
  var o = {a: 1, b: 2}
  var o2 = objFunctor(o).map(add).map(add)
  t.deepEqual(o2, {a: 3, b: 4})
  t.end()

  function add (v) {
    return v + 1
  }
})
