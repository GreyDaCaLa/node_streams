const {createReadStream} = require("fs");
const {createServer} = require("http");
const {join} = require("path");

const port =3000;

const server = createServer((request,response)=>{
    const {url,method}=request;

    if( url==="/" && method ==="GET" ){
        response.statusCode=200; //it is code 200 be default but i thought why not
        response.setHeader("Content-Type","text/html");

        const readStream = createReadStream(join(__dirname,"./public/index.html"));
        readStream.pipe(response); //will do write and end for us
    }else{
        response.statusCode=404;
        response.setHeader("Content-Type","text/html");

        const readStream = createReadStream(join(__dirname,"./public/404page.html"));
        readStream.pipe(response); //will do write and end for us

    }


})

server.listen(port,()=>{
    console.log("Server in Streams.js is listening on "+port+"...");
})