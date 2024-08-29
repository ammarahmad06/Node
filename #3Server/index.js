const http = require("http");
const fs = require("fs");

// const myServer = http.createServer((req, res) => {
// console.log(req.headers);
//     console.log(req);
//     res.end("<h1>Hello From Server</h1>");
// });

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: New Req Received | Path: ${req.url}\n`;
    fs.appendFile("log.txt", log, (err, dt) => {
        switch (req.url) {
            case "/":
                res.end("<h1>HomePage</h1>");
                break;
            case "/About":
                res.end("<h1>AboutPage</h1>");
                break;
            case "/Contact":
                res.end("<h1>ContactPage</h1>");
                break;
            default:
                res.end("<h1>Page Not Found</h1>");
                break;
        }
    });
});


myServer.listen(7000, () => console.log(`Server Started!`))