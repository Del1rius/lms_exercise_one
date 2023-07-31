const http = require("http")
const fs = require("fs")
const port = 3000


const server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/txt"})
    fs.readFile("data.txt", function(error, data){
        if(error) {
            res.writeHead(404)
            res.write("Error: File Not Found")
        } else {
            res.write(data)
        }
        res.end()
    })
    fs.writeFileSync("data.txt", "Trying to add something to the data txt")
    fs.writeFileSync("data.txt", "Second Line of trying to add something to data txt ")
    fs.appendFileSync("data.txt", "A third line trying to add something to data txt")
})
// the second content overrode the previous content

server.listen(port, function(error) {
    if(error) {
        console.log("Something went wrong", error)
    } else {
        console.log("Server is listening on port " + port)
    }
})