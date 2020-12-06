const http = require("http");
const fs = require("fs");
const path = require("path");
const hostname = "localhost";
const port = 3000;
const server = http.createServer((req, res) => {
    console.log("Request from" + req.url + " by the " + req.method + " method");
    if (req.method == "GET") {
        var fileUrl;
        (req.url =='/') ? fileUrl = '/index.html' : fileUrl = req.url
        let filePath = path.resolve('./public' + fileUrl);
        const fileExtension = path.extname(filePath);
        if (fileExtension == '.html') {
            fs.exists(filePath, (exists) => {
                if(!exists) {
                    res.statusCode = 404;
                    res.setHeader('Content-Type', "text/html");
                    res.end(`
                        <html>
                            <body>
                                <h1>Error ${res.statusCode} ${fileUrl} not found</h1>
                            </body>
                        </html>
                    `)
                    return;
                }
                res.statusCode = 200;
                res.setHeader('Content-Type', "text/html");
                fs.createReadStream(filePath).pipe(res);
            })
        } else {
            res.statusCode = 404;
            res.setHeader('Content-Type', "text/html");
            res.end(`
                <html>
                    <body>
                        <h1>Error ${res.statusCode} ${fileUrl} not an HTML file</h1>
                    </body>
                </html>
            `)
            return;
        }
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', "text/html");
        res.end(`
            <html>
                <body>
                    <h1>Error ${res.statusCode} ${req.method} not supported</h1>
                </body>
            </html>
        `)
        return;
    }
});
server.listen(port, hostname, () => {
  console.log(`Сервер запущен на http://${hostname}:${port}`);
});
