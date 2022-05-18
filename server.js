const { readFileSync, writeFileSync } = require('fs');

const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    const count = readFileSync('./count.txt', 'utf-8')
    console.log('count', count)

    const newCount = parseInt(count) + 1

    writeFileSync('./count.txt', newCount.toString())

    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>RPi Hosted Website</title>
        </head>
        <body>
            <h1>Welcome to my Website</h1>
            <p>This page has been visited ${newCount} times!</p>
        </body>
        </html>
    `)
})

app.listen(port, () => console.log(`http://localhost:${port}/`))