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

dishRouter.route('/:dishId')
.get((req,res) => {
    res.end("Will send details of the dish: " + req.params.dishId);
})
.post((req,res) => {
    res.statusCode = 403 //Операция не поддерживается
    res.end("POST operation is not supported with /dishes/" + req.params.dishId);
})
.put((req,res) => {
    res.write("Updating /dishes/:" + req.params.dishId + '\n');
    res.end('Will update the dish /dishes/' + req.body.name + ' with description: ' + req.body.description);
})
.delete((req,res) => {
    res.end("Delete the dish:" + req.params.dishId);
});

module.exports = dishRouter;