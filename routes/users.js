module.exports = (app) => {
  app.get('/users', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
      users: [{
        name: 'Andryll',
        email: 'teste@andryll.com',
        id: 1
      }]
    })
  })


  app.get('/users/admin', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
      users: []
    })
  })
}