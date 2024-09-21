import { createServer } from 'http'

const PORT = 8888

createServer((_, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write('Hello Worlddddd!sssss')
    res.end()
}).listen(PORT)

console.log('HTTP server is running on Porrrrrt', PORT)