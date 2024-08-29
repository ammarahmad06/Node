// URL = UNIFORM RESOURCE LOCATOR

const http = require('http');
const fs = require('fs');
const url = require('url');

const myServer = http.createServer((req, res) => {
    if (req.url === "/favicon.ico") return res.end();

    const log = `${Date.now()}: ${req.url} New Req Received\n`;
    const myUrl = url.parse(req.url, true);
    console.log("🚀 ~ myServer ~ myUrl:", myUrl)


    fs.appendFile("log.txt", log, (err, data) => {
        switch (myUrl.pathname) {
            case "/":
                res.end("Home Page");
                break;
            case "/about":
                const name = myUrl.query.name;
                res.end(`This is ${name}`);
                break;
            case "/yt":
                const searchQuery = myUrl.query.sq;
                res.end(`Result :  ${searchQuery}`);
                break;
            default:
                res.end(`404 Not Found`);
        }
    })
})

myServer.listen(7000, () => console.log(`Server Started!`));