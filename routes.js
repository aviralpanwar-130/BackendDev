const fs = require('fs');

let handler = (req,res)=>{
    let url = req.url;
    console.log(url);
    let method = req.method;
    if(url==='/'){
        fs.readFile("msg.txt",{encoding:"utf-8"},(err,data)=>{
            if(err){
                console.log(err);
            }
            res.write('<html>');
            res.write('<head><title>Home Page</title></head>');
            res.write(`<body>${data}</body>`);
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button id="btn1">Submit</button></form></body>');
            res.write('</html>');
            return res.end();
        });
       
    }

    else if(url==='/message' && method=='POST'){
        const body=[];
        req.on('data',(chunk)=>{
            body.push(chunk);
        });
        req.on('end',()=>{
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            fs.writeFile('msg.txt',message,(err)=>{
                if(err){
                console.log(err);
                }
            })
        })
        res.statusCode = 302;
        res.setHeader('Location','/');
        res.write('<html>');
        res.write('<head><title>Home Page</title></head>');
        res.write('<body><p>hii</p></body>');
        res.write('</html>');
        return res.end();
       
       
    }
    
}

module.exports = handler;
