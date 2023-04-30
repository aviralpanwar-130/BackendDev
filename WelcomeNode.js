let http = require('http');
let server = http.createServer(function(req,res){
    let url = req.url;
    
    if(url==='/home'){
        res.write('<html>');
        res.write('<head><title>Home Page</title></head>');
        res.write('<body><p>Welcome to home page</p></body>');
        res.write('</html>');
        return res.end();
    }

    else if(url==='/about'){
        res.write('<html>');
        res.write('<head><title>About Page</title></head>');
        res.write('<body><p>Welcome to about us page</p></body>');
        res.write('</html>');
        return res.end();
    }

    else if(url==='/node'){
        res.write('<html>');
        res.write('<head><title>Node Page</title></head>');
        res.write('<body><p>Welcome to node page</p></body>');
        res.write('</html>');
        return res.end();
    }

    else{
        res.write('<html>');
        res.write('<head><title>Welcome Page</title></head>');
        res.write('<body><p>Welcome to welcome page</p></body>');
        res.write('</html>');
        return res.end();
    }
})

server.listen(4000);




