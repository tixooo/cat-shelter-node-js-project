const express = require('express');
const app = express();
app.all('/', (req, res)=>{
    // res.writeHead(200, {
    //     'Content-Type': 'text/plain'
    // });
    // res.write("Hello Js")
    // res.end()
});

app.listen(5000, console.log('Application is listening on port 5000') );
