console.log("fooo")


const fs = require('fs')
const process = require('process');

fs.chmodSync("/tmp/fs", 0o777); // Sensitive
  // ...
})
process.umask(0o777); // Sensitive



const express = require('express')
const session = require('express-session')

let app = express()
app.use(
  session({
    cookie: {
      secure: false // Sensitive
    }
  })
)





let tmp_file = '/tmp/temporary_file' // Sensitive files in /tmp
fs.readFile(tmp_file, 'utf8', function (err, data) {
  // ...
})

fs.writeFileSync('/var/run/lock', 'utf8') // sensitive dir `/var`



var httpProxy = require('http-proxy')

// Not safe



httpProxy.createProxyServer({ target: 'http://localhost:9000', xfwd: true }).listen(8000)






const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express()

app.use(
  '/proxy',
  createProxyMiddleware({
    target: 'http://localhost:9000',
    changeOrigin: true,
    xfwd: true // Not safe
  })
)
app.listen(3000)




const nodemailer = require('nodemailer')
let transporter = nodemailer.createTransport({
  secure: false, // Sensitive
  requireTLS: false // Sensitive
})


var Client = require('ftp')
var c = new Client()
c.connect({
  secure: false // Sensitive
})





const serveStatic = require('serve-static')
let serveStaticMiddleware = serveStatic('public', {
  index: false,
  dotfiles: 'allow' // not safe
})



const Formidable = require('formidable')
const form = new Formidable()

// Sensitive: 10MB is more than the recommended limit of 8MB
const formDefault = new Formidable({
  maxFileSize: 10000000
})



const libxmljs = require('libxmljs')

var xml = fs.readFileSync('xxe.xml', 'utf8')

var xmlDoc = libxmljs.parseXmlString(xml, { noblanks: true, noent: true, nocdata: true }) // Noncompliant: noent set to true
