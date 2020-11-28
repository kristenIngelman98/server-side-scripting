const express = require("express");
const app = express();

app.set('port', process.env.PORT || 8080);

let server = app.listen(app.settings.port, ()=> {
  console.log('server ready on port', app.settings.port);
});

