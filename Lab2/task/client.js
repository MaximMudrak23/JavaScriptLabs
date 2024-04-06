const http = require('http')
const zlib = require('zlib')
const fs = require('fs')

const host = 'localhost'
const port = 8000

const readStream = fs.createReadStream('clientRequest.txt')
const gzipStream = zlib.createGzip()

readStream.pipe(gzipStream)
    .on('error', (err) => {
        console.error('Error compressing data:', err)
    })
    .pipe(http.request({
        hostname: host,
        port: port,
        path: '/upload',
        method: 'POST',
        headers: {
            'Content-Type': 'application/octet-stream',
        }
    }))
    .on('response', (res) => {
        console.log(`Server response: ${res.statusCode}`)
        res.on('data', (chunk) => {
            console.log(`Response data: ${chunk}`)
        })
    })
    .on('error', (err) => {
        console.error('Request error:', err)
    })