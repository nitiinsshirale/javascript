const express = require('express');
const server = express();

server.get('/status',(rq,rs)=>{
    rs.status(200).json({
        message : 'Welcome to Express Node'
    });
});
server.listen(5601,()=>{
    console.log('Server Started at 5601');
});

