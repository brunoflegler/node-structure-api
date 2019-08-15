const server = require('./server')

server.listen(process.env.APP_PORT, () => {
  console.log('server is running...')
})
