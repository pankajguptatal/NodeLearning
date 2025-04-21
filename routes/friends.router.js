const express = require('express');

const friendsController = require('../controllers/friends.controller');

const friendsRouter = express.Router();

friendsRouter.use((req, res, next) =>{
    console.log(`Ip adress: ${req.ip}`);
    next(); 
})

friendsRouter.get('/', friendsController.getFriendsList);

friendsRouter.get('/:id', friendsController.getFriendById);

friendsRouter.post('/', friendsController.addNewFriend);

module.exports = friendsRouter;
