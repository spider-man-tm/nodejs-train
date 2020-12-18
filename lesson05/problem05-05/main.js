"use strict";

const routeResponseMap = {
    "/info": "<h1>Info Page</h1>",
    "/contact": "<h1>Contact Us</h1>",
    "/about": "<h1>Learn More About Us. <a href='xxxx@xxx.com'> here</a></h1>",
    "/hello": "<h1>Say hello by emailing us here</h1>",
    "/error": "<h1>Sorry the page you are looking for is not here.</h1>"
};

const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    app = http.createServer((req, res) => {
        if (req.url === "/error") {
            res.writeHead(404, {
                "Content-Type": "text/html"
            });
            res.end(routeResponseMap[req.url]);
        }
        else if (routeResponseMap[req.url]) {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(routeResponseMap[req.url]);
        } else {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end("<h1>Welcome!</h1>");
        }
        // console.log(`${req.url}`)
    });
app.listen(port);
console.log(`The server has started and is listening on port number:${port}`);