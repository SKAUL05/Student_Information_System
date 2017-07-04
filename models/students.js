/**
 * Created by OM on 03/07/2017.
 */
const mongoose = require('mongoose');

const StudentSchema =mongoose.Schema({
    roll_no:{
        type: String,
        required: true
    },
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required:true
    },
});




const student = module.exports = mongoose.model('student', StudentSchema);

