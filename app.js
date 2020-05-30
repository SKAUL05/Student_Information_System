/**
 * Created by OM on 03/07/2017.
 */
//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');
var session = require('express-session');
var app = express();
app.use(session({secret:'SARATH'}));

const route = require('./routes/route');

//connect to mongodb
mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser: true});

//on connection
mongoose.connection.on('connected',()=>{
    console.log('Connected to database mongodb through 27017');
});

mongoose.connection.on('error',(err)=>{
    if(err)
    {
        console.log('Error in Database connection:'+err);
    }
});

//port number
const port = process.env.PORT || 3000;


//adding middleware - cors
app.use(cors());

//body - parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, 'client/dist/')));

//routes
app.use('/api',route);

//testing server
app.get('/',(req,res)=>{
    res.send('Student');
});

app.listen(port,()=>{
    console.log('Server started at port:'+port);
});


