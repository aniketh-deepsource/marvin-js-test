console.log("foo")



const express = require('express')
const helmet = require('helmet')
const child_process = require('child_process')

let app = express()

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      // other directives
      frameAncestors: ["'none'"] // frameAncestors  is set to none
    }
  })
)


var path = 'user input'
child_process.exec('ls -l ' + path, function (err, data) {
  console.log(data)
})


Buffer([1, 2, 3])
new Buffer([1, 2, 3])
Buffer.allocUnsafe(5)
