const express = require('express')
const listRoutes = require('./routes/list')
const app = express()
const PORT = process.env.PORT || 3000

app.use('/api/list', listRoutes)

app.listen(PORT)