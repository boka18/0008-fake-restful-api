const { exec } = require('child_process');
const jsonServer = require('json-server');
const bodyParser = require('body-parser');

// Create a new JSON Server instance
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // You can provide an empty object if you don't want to use db.json
const middlewares = jsonServer.defaults();

// Use default middlewares (CORS, static, etc.)
server.use(middlewares);
server.use(bodyParser.json());

// Add custom authentication logic here
server.post('/auth', (req, res) => {
  // Your authentication logic goes here
  // Example: Check username and password from request body
  console.log(req.body)
  // const { username, password } = req.body;

  // Your authentication logic...

  if (true) {
    res.jsonp({
      access_token: 'your_generated_token',
      token_type: 'Bearer',
    });
  } else {
    res.status(401).jsonp({ error: 'Unauthorized' });
  }
});

// Use the JSON Server router
server.use(router);

// Set port (default: 3000). For Heroku, use the port set by the environment variable $PORT
const port = process.env.PORT || 3000;

// Start the JSON Server
server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`);
});
