/**
 * Module dependencies.
 */
var fs = require('mz/fs')
var path = require('path')
var colors = require('colors')

module.exports = read

var pathSymbol = '├── '
  , lastPathSymbol = '└── '
  , s = ['.'.blue]

function read(dirname, c) {
    return function* () {
      var files = yield fs.readdir(dirname)
      for(var index = 0; index < files.length; index++) {
        var file = files[index]
          , pathname = path.join(dirname, file)
          , stat = yield fs.stat(pathname)
          , current = ''
          , children = ''

        if(index !== files.length - 1) {
          current = c ? c + pathSymbol :  pathSymbol
          children  = current.slice(0, -4) + '|   '
        } else {
          current = c ? c + lastPathSymbol:  lastPathSymbol
          children = current.slice(0, -4) + '    '
        }

        if(stat.isDirectory()) {
          s.push(current + file.blue)
          yield read(pathname, children)
        } else {
          s.push(current + file.red)
        }
      }
      return s
    }
}
