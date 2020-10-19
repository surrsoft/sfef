import consts from '../consts';

const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')
const middlewares = jsonServer.defaults()
const router = jsonServer.router(path.join(__dirname, 'db.json'))

server.use(middlewares)
server.use(jsonServer.bodyParser)

server.use('/cards', (req, res, next) => {
  console.log('!!-!!-!! !!req {200713173414}\n', !!req); // del+
  console.log('!!-!!-!! req.path {200714095812}\n', req.path); // del+
  if (req.method === 'POST') {
    console.log('br- info req.method === "POST"') // del+
    console.log('br- req.body', req.body) // del+
    const body = req.body || {};
    if (!body.title) {
      res.status(500).send('ERR*: title is empty');
    }
  }
  next()
})

server.use(router)
server.listen(consts.api.port, () => {
  console.log(`JSON Server is running; port [${consts.api.port}]`)
})
