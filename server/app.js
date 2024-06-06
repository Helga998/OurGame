const express = require('express');
// const cookieParser = require('cookie-parser');
const path = require('path');
// const cors = require('cors');
require('dotenv').config();
// const removeHeaders = require('./middleware/removeHeaders');

const app = express();

// app.use(express.static(path.join(__dirname, 'public')));
// app.use(cookieParser());
app.use(express.urlencoded());
app.use(express.json());

// app.use(removeHeaders);

const indexRouteApi = require('./routes/index.routes');

app.use('/', indexRouteApi);

app.listen(3000, () => {
    console.log(`Сервер работает на 3000 порту!!!`);
});
