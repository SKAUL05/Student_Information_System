/**
 * Created by OM on 04/07/2017.
 */


const mongoose = require('mongoose');


const StudentSchema1 =mongoose.Schema({
    userid:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
});

const student1 = module.exports = mongoose.model('student1', StudentSchema1);

