const http = require("http");
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dishRouter = require("./routes/dishRouter"); 
const promoRouter = require("./routes/promoRouter"); //import express routers from another file
const leaderRouter = require("./routes/lederRouter");
const hostname = "localhost";
const port = 3000;

const app = express();
app.use(morgan("dev"));
app.use(express.static(__dirname+ "/public"));
app.use(bodyParser.json());

app.use('/dishes', dishRouter); //use imported router
app.use('/dishes/:dishId', dishRouter); 
app.use('/promotions', promoRouter); //use imported router
app.use('/promotions/:promoId', promoRouter); 
app.use('/leaders', leaderRouter); //use imported router
app.use('/leaders/:leaderId', leaderRouter); 
app.use((req, res) => {
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