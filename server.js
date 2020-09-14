const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs'); //Main endpoint, so http://localhost:3000
app.get('/', function(req, res){ 
  res.render('index',{users : [
            { name: port + " Users | " },
  ]});
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
});