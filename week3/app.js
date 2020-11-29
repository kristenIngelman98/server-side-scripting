const express = require("express");
const app = express();

// Static middleware allows us to easily serve static files
// Order of middleware matters
app.use(express.static("public"));


app.get('/', (req,res) => {
  res.send("<h1>Not Using Middleware</h1>");
})

const ourFirstMiddleware = (req,res,next) => {

  res.locals.message = "this message is stored in a  variable that is scoped to the current request-response cycle.";

  next(); // remember to do this or the application will hang
}

app.use('/a', ourFirstMiddleware);

app.get('/a', (req,res) => {
  res.send("a: " + res.locals.message);
});

app.get('/b', (req,res) => {
  res.send("b: " + res.locals.message);
});


const server = app.listen(process.env.PORT || 8080,
  () => console.log("listening"));