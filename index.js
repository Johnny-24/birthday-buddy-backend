const express = require('express')
const sequelize = require('./utils/database')
const listRoutes = require('./routes/list')
const app = express()
const PORT = process.env.PORT || 3000

app.use('/api/list', listRoutes)

async function start() {
  try {
    await sequelize.sync()
    app.listen(PORT)
  } catch (e) {
    console.log(e)
  }
}

start()
