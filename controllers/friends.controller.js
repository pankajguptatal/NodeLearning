const friends = require('../models/friends.model')

function getFriendsList(req, res){
    const friendListHtml = friends.map(friend=> `<li>${friend.name}</li>`)
    .join(''); 
    res.send(`<ul>${friendListHtml}</ul>`);
}

function getFriendById(req, res){
    const friendId = +req.params.id;
    const friend = friends.find(x=>x.id === friendId);

    if(friend){
        res.send(`<h1> Hello ${friend.name}!</h1>`);
    }
    else{
        res.status(404).send(`<h1> Friend not found for ${req.params.id}!</h1>`);
    }
}

function addNewFriend(req, res){
    if(!req.body || !req.body.name){
        return res.status(400).send("Friend name required!");
    }
    const newFriend = {
        name: req.body.name,
        id:friends.length
    };
    friends.push(newFriend);

    res.json(friends);
}

module.exports ={
    getFriendsList,
    getFriendById,
    addNewFriend
}