const express = require('express');
const app = express();
const path = require('path')
const history = require('connect-history-api-fallback');
var cors = require('cors')
app.use(cors())
app.use(history({
    // disableDotRule: true,
    // verbose: true
  }));
const serveStatic = require('serve-static')
const staticFileMiddleware = express.static(path.join(__dirname + '/dist'));
app.use(staticFileMiddleware);
app.get('/', function (req, res) {
  res.render(path.join(__dirname + '/dist/index.html'));
});

const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV || "";
app.listen(port, function () {
  console.log('BarberFront app listening on port ' + port + " env: " + env);
});