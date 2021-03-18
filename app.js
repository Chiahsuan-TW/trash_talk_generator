//import packages and define server related variables
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTrashTalk = require('./trash_talk_generator')
const Handlebars = require('handlebars')

//setting template engines
app.engine('handlebars',exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//use body-parser
app.use(bodyParser.urlencoded({extended: true}))

//setting router
app.get('/',(req,res)=>{
    res.render('index')
})

app.post('/',(req,res)=>{
    const option = req.body
    const trashTalk = generateTrashTalk(option)
    const job = option.job
    res.render('index', {trashTalk: trashTalk, job: job})
})


//handlebars built-in helpers
Handlebars.registerHelper('ifeq', function (job, expectedJob , options) {
     if (job === expectedJob) { 
         return options.fn(this)
     }
     return options.inverse(this)
 })
 


//start and listen the server
app.listen(port,()=>{
    console.log(`The server is running on http://localhost:${port}`)
})