const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Sensor = require('../models/sensor')

router.post("/",(req,res,next) => {
    const sensor = new Sensor({
        _id: new mongoose.Types.ObjectId(),
        value1: req.body.value1,
        value2: req.body.value2,
        value3: req.body.value3, 
        owner: req.body.owner,
        owner_name: req.body.owner_name
    });
    sensor 
        .save()
        .then(result =>{
        console.log(result);
    })
    res.status(201).json({
        message : 'POST Request',
        sensor: sensor 
    });
});

router.get("/", (req, res, next) => {
    Sensor.find()
      .exec()
      .then(docs => {
        console.log(docs);
        //   if (docs.length >= 0) {
        res.status(200).json(docs);
        //   } else {
        //       res.status(404).json({
        //           message: 'No entries found'
        //       });
        //   }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });

  router.get("/:SensorID", (req, res, next) => {
    const id = req.params.SensorID;
    Sensor.findById(id)
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