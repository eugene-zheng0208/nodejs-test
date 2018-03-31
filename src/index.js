require('babel-polyfill')

const PORT = 8080

const restify = require('restify')
const db = require('sqlite/legacy')

function respond (req, res, next) {
  res.send('hello Leadweb')
  next()
}

const server = restify.createServer()
server.get('/', respond)

server.get('/test-data', async (req, res, next) => {
  res.send(await db.all('SELECT * FROM Example'))
  next()
})

async function initServer () {
  try {
    await startDatabase()
    launchServer()
  } catch (err) {
    printErrorStack(err)
  }
}

function startDatabase () {
  return db.open('./database.sqlite', {Promise: Promise})
}

function printErrorStack (err) {
  console.error(err.stack)
}

function launchServer () {
  server.listen(PORT, function () {
    console.log('Server listening on port %d', PORT)
  })
}

initServer()
