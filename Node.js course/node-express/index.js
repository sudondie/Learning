const http = require("http");
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const hostname = "localhost";
const port = 3000;

const app = express();
app.use(morgan("dev"));
app.use(express.static(__dirname+ "/public"));
app.use(bodyParser.json());

app.all('/dishes',(req,res,next) => {
    res.statusCode = 200; //Все ок,все работает
    res.setHeader("Content-Type","text/plain");
    next();
});
//Для dishes
app.get('/dishes',(req,res,next) => {
    res.end("Will send all the dishes to you!");
});
app.post('/dishes',(req,res,next) => {
    res.end("Will add the dish " + req.body.name + " with a details: " + req.body.description);
});
app.put('/dishes',(req,res,next) => {
    res.statusCode = 403 //Операция не поддерживается
    res.end("PUT operation is not supported with /dishes");
});
app.delete('/dishes',(req,res,next) => {
    res.end("Delete everything in /dishes");
});
//Для dishes:dishId
app.get('/dishes/:dishId',(req,res,next) => {
    res.end("Will send details of the dish: " + req.params.dishId);
});
app.post('/dishes/:dishId',(req,res,next) => {
    res.statusCode = 403 //Операция не поддерживается
    res.end("POST operation is not supported with /dishes/" + req.params.dishId);
});
app.put('/dishes/:dishId',(req,res,next) => {
    res.write("Updating /dishes/:" + req.params.dishId + '\n');
    res.end('Will update the dish /dishes/' + req.body.name + ' with description: ' + req.body.description);
});
app.delete('/dishes/:dishId',(req,res,next) => {
    res.end("Delete the dish:" + req.params.dishId);
});
app.use((req, res, next) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(`
        <html>
            <body>
                 <h1>This is Express server</h1>
            </body>
        </html>
        `);
});

const server = http.createServer(app);
server.listen(port,hostname, ()=> {
    console.log(`Сервер запущен на http://${hostname}:${port}`);
});