var https = require('https')

var requestOptions = {
  host:'',
  path: '/'
}

https.get(requestOptions, function (response) {
  response.setEncoding('utf8')
  response.on('data', function(data) {
    console.log('Chunk Recieved. Length:', data.length)
  })
  response.on('end', function() {
    console.log('Response stream complete.')
  })
})

