const express = require('express');
require('dotenv').config
const PORT = 7777;

const app = express()

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))