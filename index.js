const { exec } = require('child_process');
const jsonServer = require('json-server');
const bodyParser = require('body-parser');

// Create a new JSON Server instance
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

// Use default middlewares (CORS, static, etc.)
server.use(middlewares);
server.use(bodyParser.json());

// Add custom authentication logic here
server.get('/auth', (req, res) => {
  // Your authentication logic goes here
  // Example: Check username and password from request body

  console.log("HELLO")
  console.log(req.query);

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

// Set port (default: 3000). For Heroku, use the port set by the environment variable $PORT
const port = process.env.PORT || 3000;

// Start the JSON Server
server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`);
});
