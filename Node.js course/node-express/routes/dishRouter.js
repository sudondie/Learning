const express = require("express");
const bodyParser = require("body-parser");
const dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200; //Все ок,все работает
    res.setHeader("Content-Type","text/plain");
    next();
})
.get((req,res) => {
    res.end("Will send all the dishes to you!");
})
.post((req,res) => {
    res.end("Will add the dish " + req.body.name + " with a details: " + req.body.description);
})
.put((req,res) => {
    res.statusCode = 403 //Операция не поддерживается
    res.end("PUT operation is not supported with /dishes");
})
.delete((req,res) => {
    res.end("Delete everything in /dishes");
});

module.exports = dishRouter;