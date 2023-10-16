// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
// Add a POST method for the `/site` resource
router.post('/site', (req, res) => {
  // Get the site data from the request body
  const site = req.body;

  // Validate the site data

  // Create a new site in the database
  db.site.push(site);

  // Return the new site
  res.json(site);
});

// Add a PUT method for the `/site/:id` resource
router.put('/site/:id', (req, res) => {
  // Get the ID of the site to update
  const id = req.params.id;

  // Get the updated site data from the request body
  const site = req.body;

  // Validate the site data

  // Find the site to update
  const siteToUpdate = db.site.find(site => site.id === id);

  // If the site does not exist, return a 404 error
  if (!siteToUpdate) {
    return res.sendStatus(404);
  }

  // Update the site in the database
  siteToUpdate.name = site.name;
  siteToUpdate.logo = site.logo;
  siteToUpdate.width = site.width;
  siteToUpdate.des = site.des;

  // Return the updated site
  res.json(siteToUpdate);
});

// Add a DELETE method for the `/site/:id` resource
router.delete('/site/:id', (req, res) => {
  // Get the ID of the site to delete
  const id = req.params.id;

  // Find the site to delete
  const siteToDelete = db.site.find(site => site.id === id);

  // If the site does not exist, return a 404 error
  if (!siteToDelete) {
    return res.sendStatus(404);
  }

  // Delete the site from the database
  db.site.splice(db.site.indexOf(siteToDelete), 1);

  // Return a 204 response indicating that the site was deleted successfully
  res.sendStatus(204);
});
server.use(middlewares)
server.use('', router)
server.listen(process.env.PORT || 5000, () => {
  console.log('JSON Server is running')
})
