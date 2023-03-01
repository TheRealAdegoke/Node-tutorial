const http = require("http")
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome To Our HomePage")
    }
    else if (req.url === "/about") {
        res.end("Here is our short history")
    }
    else {
        res.end(`
        <h1>Oops Page Does Not Exist!!!</h1>
        <a href="/">Back To Home</a>
        `)
    }
})

server.listen(5000)