import express = require('express')
import controllers from './controllers'

const app = express()

app.use(controllers)

const port = 3001
app.listen(port, () => console.log(`Server is running on ${port}`))
