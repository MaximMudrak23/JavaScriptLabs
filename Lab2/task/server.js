const http = require('http')
const zlib = require('zlib')
const fs = require('fs')

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/upload') {
        const unzipStream = zlib.createGunzip()
        const writeStream = fs.createWriteStream('serverResponse.txt')

        req.pipe(unzipStream).on('error', (err) => {
                console.error('Error during decompression:', err)
                res.statusCode = 500
                res.end('Error during decompression')
            }).pipe(writeStream).on('error', (err) => {
                console.error('Error writing file:', err)
                res.statusCode = 500
                res.end('Error writing file')
            }).on('finish', () => {
                console.log('File saved successfully')
                res.end('File saved successfully')
            })

        unzipStream.on('data', (uncompressedData) => {
            res.write(`server.js unData: ${uncompressedData.toString()}`)
        })

        req.on('data', (chunk) => {
            res.write(`server.js Data: ${chunk}`)
        });

        req.on('end', () => {
            res.write('\n')
        });
    } else {
        res.statusCode = 404
        res.end('Waiting for your client side...')
    }
});

const host = 'localhost'
const port = 8000

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`)
})