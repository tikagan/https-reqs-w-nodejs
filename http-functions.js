
var https = require('https')

function getHTML (options, callback) {
  https.get(options, function (response) {
    let toPrint
    response.setEncoding('utf8')
    response.on('data', function(data) {
    toPrint += data + '\n'
    printHTML(toPrint)
    })
    response.on('end', function() {
      console.log('Response stream complete.')
    })
  })

}

module.exports = function getHTML(options, callback) {
  https.get(options, function (response) {
    let toPrint
    response.setEncoding('utf8')
    response.on('data', function(data) {
    toPrint += data + '\n'
    callback(toPrint)
    })
    response.on('end', function() {
      console.log('Response stream complete.')
    })
  })

}