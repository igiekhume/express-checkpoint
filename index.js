const express = require("express")

//import the MiddleWare
const workingHoursMiddleware = require('./middleware/workinghours')

const app = express()
const port = 4001;


app.set('view engine', 'ejs')

app.set('views', './views');

app.use(express.static('public'));

//Import Middleware
app.use(workingHoursMiddleware);

app.get('/', (req, res)=>{
    res.render('home', {title: 'Home'})
})


app.get('/services', (req, res) =>{
    res.render('services', {title: 'Our Services'})
})

app.get('/contacts', (req, res) =>{
    res.render('contacts', {title: 'Contact Us'})
})


app.listen(port, () =>{
    console.log(`Server running at http://localhost:${port}`)
})