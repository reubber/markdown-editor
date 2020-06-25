'use strict'
const { join } = require('path')
const express = require('')
const app = express()
const compression = require('compression')

app.use(compression())
app.use(express.static(join(__dirname, 'dist')))

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'))
})

app.listen(3000, () => console.log('escutando na porta 3000'))
