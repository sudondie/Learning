const express = require("express");
const bodyParser = require("body-parser");
const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200; //Все ок,все работает
    res.setHeader("Content-Type","text/plain");
    next();
})
.get((req,res) => {
    res.end("Will send all the leaders to you!");
})
.post((req,res) => {
    res.end("Will add the leader " + req.body.name + " with a details: " + req.body.description);
})
.put((req,res) => {
    res.statusCode = 403 //Операция не поддерживается
    res.end("PUT operation is not supported with /leaders");
})
.delete((req,res) => {
    res.end("Delete everything in /leaders");
});

leaderRouter.route('/:leaderId')
.get((req,res) => {
    res.end("Will send details of the leader: " + req.params.leaderId);
})
.post((req,res) => {
    res.statusCode = 403 //Операция не поддерживается
    res.end("POST operation is not supported with /leaders/" + req.params.leaderId);
})
.put((req,res) => {
    res.write("Updating /leaders/:" + req.params.leaderId + '\n');
    res.end('Will update the leader /leaders/' + req.body.name + ' with description: ' + req.body.description);
})
.delete((req,res) => {
    res.end("Delete the leader:" + req.params.leaderId);
});

module.exports = leaderRouter;