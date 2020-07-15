var http = require('http')
var createHandler = require('github-webhook-handler')
var handler = createHandler({ path: '/webhook', secret: 'root' })

http.createServer(function (req, res) {
  handler(req, res, function (err) {
    res.statusCode = 500
    res.end('请求错误')
  })
}).listen(8088, function(){
    console.log('server已经启动');
}) 

handler.on('error', function (err) {
  console.error('Error:', err.message)
})

handler.on('push', function (event) {
    runCmd('sh', ['./deploy.sh', event.payload.repository.name], function (text) { console.log(text) })
})

handler.on('issues', function (event) {
})

function runCmd (cmd, args, callback) {
    var spawn = require('child_process').spawn
    var child = spawn(cmd, args)
    var resp = ''
    child.stdout.on('data', function (buffer) {
      resp += buffer.toString()
    })
    child.stdout.on('end', function () {
      callback(resp)
    })
  }