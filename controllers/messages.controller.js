const path = require('path');

function getMessages(req, res){
    res.send('<ul><li>Hello Pankaj Gupta!</li></ul>');
};

function getFile(req, res){
    res.sendFile(path.join(__dirname, '..', 'public', 'April-June 2024.jpeg'));
}

module.exports = {
    getMessages,
    getFile
}