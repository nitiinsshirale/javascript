const http = require('http');
const PORT = 4321;
const server = http.createServer((request,response)=>{
        if(request.url === '/'){
            response.write(JSON.stringify({
                message : 'Server Started'
            }));
        }
        if(request.url === '/status'){
            response.write("Welcome to Node Js Server");
            response.end();
        }
});

server.listen(PORT,()=>{
    console.log(`SERVER STARTED AT ${PORT}`);
});