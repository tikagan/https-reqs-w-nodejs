var https = require('https')

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  }

  https.get(requestOptions, function (response) {
    let toPrint
    response.setEncoding('utf8')
    response.on('data', function(data) {
    toPrint += data + '\n'
    console.log('Data: ', toPrint)
      // console.log('Chunk Recieved. Length:', data.length)
    })
    response.on('end', function() {
      console.log('Response stream complete.')
    })
  })

}

getAndPrintHTML()