const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const routes = require('./routes/todoRoute.js')
require('dotenv').config();


const app = express();
const PORT = process.env.port || 8090

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log(`Connected to MongoDB`))
.catch((error) => console.log(`Can't connect to MongoDB : ${error}`));

app.use(routes)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));