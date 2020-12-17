const express = require("express");
const bodyParser = require("body-parser");
const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200; //Все ок,все работает
    res.setHeader("Content-Type","text/plain");
    next();
})
.get((req,res) => {
    res.end("Will send all the promotions to you!");
})
.post((req,res) => {
    res.end("Will add the promotion " + req.body.name + " with a details: " + req.body.description);
})
.put((req,res) => {
    res.statusCode = 403 //Операция не поддерживается
    res.end("PUT operation is not supported with /promotions");
})
.delete((req,res) => {
    res.end("Delete everything in /promotions");
});

promoRouter.route('/:promoId')
.get((req,res) => {
    res.end("Will send details of the promotion: " + req.params.promoId);
})
.post((req,res) => {
    res.statusCode = 403 //Операция не поддерживается
    res.end("POST operation is not supported with /promotions/" + req.params.promoId);
})
.put((req,res) => {
    res.write("Updating /promotions/:" + req.params.promoId + '\n');
    res.end('Will update the promotion /promotions/' + req.body.name + ' with description: ' + req.body.description);
})
.delete((req,res) => {
    res.end("Delete the promotion:" + req.params.promoId);
});

module.exports = promoRouter;