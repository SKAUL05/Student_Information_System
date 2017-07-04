/**
 * Created by OM on 03/07/2017.
 */

const express = require('express');
const router = express.Router();

const student = require('../models/students');
const student1 = require('../models/students1');
var sess = null;

//retrieving student information
router.get('/student',(req, res, next)=>{
   student.find(function(err, students){
       res.json(students);
   });
});

router.get('/student/:id', (req, res, next)=>{
    var id = req.params.id;
    console.log(id);

    student.findOne({_id: req.params.id}, function(err,doc){
        if (err) {
            console.log(err);
        } else {
            console.log("successs");
            res.json(doc);
        }
    });
});
//adding student information
router.post('/student',(req, res, next)=>{
    //logic to add student info
    let newStudent = new student({
        roll_no: req.body.roll_no,
        first_name: req.body.first_name,
        last_name : req.body.last_name,
        phone: req.body.phone,
        email :req.body.email
    });
  newStudent.save((err, student)=>{
      if(err)
      {
          res.json({msg: 'Failed to add Student Information'});
      }
      else
      {
          res.json({msg: 'Successfully added Student Information'});
      }
  });
});

//deleting student information
router.delete('/student/:id',(req, res, next)=>{
    //logic to delete student info
    student.remove({_id: req.params.id}, function(err, result){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(result);
        }
    });
});

//update contacts
router.put('/student/:id', (req, res, next) => {
    var id = req.params.id;
    console.log(req.body.first_name);
    console.log(req.body.last_name);
    student.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                roll_no: req.body.roll_no,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                phone: req.body.phone,
                email: req.body.email
            }
        },
        function(err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log("successs");
                res.json(result);
            }
        });
});


    router.post('/logindata',function(req, res){

        student1.findOne({userid:req.body.username,password:req.body.password},function(err,docs){
            if(err || !docs) {
                res.json({flag:false});
            }
            else{
                sess = req.session;
                sess.username = req.body.username;
                console.log(sess);
                res.json(sess);
            }
        });

    });

router.get('/logout',function(req,res){

    req.session.destroy(function(err){
        if(err){
            console.log(err);
        }else{
            sess = null;
        }
    });
    res.json({name:'gaurav'});

});
router.post('/student1',(req, res, next)=>{
    //logic to add student info
    let newStudent = new student1({
        userid: req.body.username,
        password: req.body.password
    });
    newStudent.save((err, student1)=>{
        if(err)
        {
            res.json({msg: 'Failed to add Student Information'});
        }
        else
        {
            res.json({msg: 'Successfully added Student Information'});
        }
    });
});


module.exports = router;