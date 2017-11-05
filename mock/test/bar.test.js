var proxyquire = require('proxyquire')
// var bar = require('./bar')
var foo = proxyquire('./../bar', {
  "./folder/foo": function() {
    console.log('the mock')
  }
})
