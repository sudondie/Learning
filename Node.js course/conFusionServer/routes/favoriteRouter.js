const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Favorites = require('../models/favorite');
var authenticate = require('../authenticate');
const cors = require('./cors');

const favoriteRouter = express.Router();

favoriteRouter.use(bodyParser.json());


favoriteRouter.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.cors, authenticate.verifyUser, (req,res,next) => {
    console.log('req.user: ' + req.user);
    Favorites.findOne({'user': req.user._id}).populate('dishes').populate('user')
    .then ((favorites) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(favorites);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Favorites.findOne({'user': req.user._id}).
    then((favorites) => {
        if (favorites.length == 0){
            console.log('before create');
            Favorites.create({'user': req.user._id, 'dishes': req.body})
            .then((fav) => {
                fav.save();
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(fav);
            }, (err) => next(err))
        } else {
            for(var i=0;i<req.body.length;i++){
                if(favorites.dishes.indexOf(req.body[i]._id) === -1){
                    favorites.dishes.push(req.body[i]._id);
                }
            }
            favorites.save();
            console.log('Favorites Created ', favorites.dishes);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(favorites);
    }
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Favorites.findOneAndRemove({'user': req.user._id})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));    
});

favoriteRouter.route('/:dishId')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.post(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Favorites.findOne({'user': req.user._id}).
    then((res) => {
        if (res.length == 0){
            Favorites.create({'user': req.user._id, 'dishes': [req.params.dishId]})
            .then((res) => {
                console.log('Favorite Created ', fav);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(res);
            }, (err) => next(err))
        } else if (res.dishes.filter((dish) => {
                return dish._id == req.params.dishId
            }).length == 0) {
            res.dishes.push(req.params.dishId);
            res.save()
            .then((fav) => {
                console.log('Favorite Created ', fav);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(fav);
            }, (err) => next(err))
        }
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Favorites.findOne({'user': req.user._id}).
    then((res) => {
        if (res.length > 0){
            var filtered = res.dishes.filter((dish) => {
                return dish._id != req.params.dishId
            });
            res.dishes = filtered;
            res.save()
            .then((fav) => {
                console.log('Favorite Created ', fav);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(fav);
            }, (err) => next(err))

        }
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = favoriteRouter;