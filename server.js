// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
 router.delete('/api/:id', (req, res) => {
  // Get the ID of the user to delete
  const id = req.params.id

  // Find the user to delete
  const user = db.users.find(user => user.id === id)

  // If the user does not exist, return a 404 error
  if (!user) {
    return res.sendStatus(404)
  }

  // Delete the user from the database
  db.users.splice(db.users.indexOf(user), 1)

  // Return a 204 response indicating that the user was deleted successfully
  res.sendStatus(204)
})
server.use(middlewares)
server.use('', router)
server.listen(process.env.PORT || 5000, () => {
  console.log('JSON Server is running')
})
