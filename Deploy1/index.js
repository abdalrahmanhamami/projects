const express = require('express');
const app = express();


app.get('/', (req, res)=>{
    res.end('hello')
})
require('./startup/db')();

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});