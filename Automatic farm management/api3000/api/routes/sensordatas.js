const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Sensordata = require('../models/sensordata');

router.post('/',(req,res,next) => {
    const sensordata = new Sensordata({
    _id: new mongoose.Types.ObjectId(),
    note : req.body.note,
    user_id : req.body.user_id,
	  controller_id : req.body.controller_id,		
    temp : req.body.temp,       
    light : req.body.light,
    airhumid : req.body.airhumid,
    dirthumid : req.body.dirthumid,
    date : req.body.date
  });   
  sensordata
      .save()
      .then(result =>{
      console.log(result);
  })
  res.status(201).json({
      message : 'POST Request',
      sensordata: sensordata
  });  
});

router.get("/:sensordataID", (req, res, next) => {
    const id = req.params.sensordataID;
    Sensordata.findById(id)
      .exec()
      .then(doc => {
        console.log("From database", doc);
        if (doc) {
          res.status(200).json(doc);
        } else {
          res
            .status(404)
            .json({ message: "No valid entry found for provided ID" });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  });

module.exports = router; 