const http = require('http')
const server = http.createServer((req, res)  => {
    console.log('New connection request')
    res.end('Hello cloudrun project')
})
const PORT = process.env.PORT || 8080
server.listen(PORT, () => console.log('Listening'))
