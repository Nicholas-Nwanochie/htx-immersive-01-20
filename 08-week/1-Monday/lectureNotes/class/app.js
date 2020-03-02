
const express = require('express');
const app = express();
let PORT = 3000;

//sits inbetween server and my routes

app.use(require('./routes/index'));
app.use(require('./routes/aboutus'));
app.use(require('./routes/cars'));
app.use(require('./routes/animals'))


app.listen(PORT, ()=>{
    console.log('listening on port 3000');
})