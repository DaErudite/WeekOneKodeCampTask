const http = require('http');
var fs = require("fs")
 

http.createServer((req, res)=> { 
console.log(`${req.method} request for ${req.url}`); 
if (req.url === "/") { 
fs.readFile("./homepage.html", "UTF-8", function(err, html) { 
res.writeHead(200, {"Content-Type":"text/html"}); 
res.end(html); 
    })
}
 else if (req.url === "/contact") { 
fs.readFile("./contact.html", "UTF-8", function(err, html) { 
res.writeHead(200, {"Content-Type":"text/html"}); 
res.end(html); 
    })
}
  else if (req.url === "/home") { 
 res.writeHead(302, {
      location: "/",
    });
    res.end();
  } else if (req.url === "/about") { 
fs.readFile("./about.html", "UTF-8", function(err, html) { 
res.writeHead(200, {"Content-Type":"text/html"}); 
res.end(html); 
    })
}
}).listen(3000); 
console.log("File server running on port 3000")