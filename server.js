const express      = require('express');
const path         = require('path');
const serveStatic  = require('serve-static');
const logger       = require('morgan');
const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
// const sass         = require('node-sass'); // We're adding the node-sass module


// Database
const mongo       = require('mongodb');
const monk        = require('monk');
const mongoUri    = 'mongodb://sandboxMaster:masterpass@ds125489.mlab.com:25489/sandbox'
const db          = monk(mongoUri)

// // routes
// const routes = require('./routes/index');
// const users  = require('./routes/users');

let app = express();

// adding the sass middleware
// app.use(
//   sass.middleware({
//     src: __dirname + '/sass', 
//     dest: __dirname + '/public',
//     debug: true,       
//   })
// );   

app.use(serveStatic(__dirname + "/dist"));

// app.get('/', (req, res) => {
//   res.send(
//     [{
//       title: "Hello World!",
//       description: "Hi there! How are you? toay"
//     }]
//   )
// })

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('Listening on port ' + port)
});