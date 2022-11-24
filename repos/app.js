const express = require('express')
const path = require('path');
const fs = require('fs').promises;
var bodyParser = require('body-parser')
const ejs = require('ejs');
const app = express()
const port = 4001
app.set('view engine', 'ejs');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.render('index');
})
app.post('/welcome', async (req, res) => {
    let data = req.body;
    //read file top1000.txt
    let file = await fs.readFile(path.join(__dirname, 'top1000.txt'), 'utf8');
    const password = data.password;
    //checks password against top1000.txt and length < 8
    if (file.includes(password)|| password.length < 8) {
        res.redirect('/')
    } else{
        res.render('welcome', { password });

    }
  



});



app.listen(port, '0.0.0.0', () => {
    console.log(`app listening on port ${port}`)
})


