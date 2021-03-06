require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())


const PORT = process.env.PORT || 5050

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))