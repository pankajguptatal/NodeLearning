const express = require('express');
const friendsRoute = require('./routes/friends.router');
const messagesRoute = require('./routes/messages.route');

const app = express();

const PORT = 3000;

app.use((req, res, next)=>{
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} completed in ${delta} ms`);
});

app.use(express.json());

app.use('/friends', friendsRoute);
app.use('/messages', messagesRoute);

app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}...`);
});
