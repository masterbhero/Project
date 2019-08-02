const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Controller = require('../models/controller');

router.post('/',(req,res,next) => {
        const controller = new Controller({
        _id: new mongoose.Types.ObjectId(),
        note : req.body.note,
        user_id : 0,	    //initial value = 0 then user_id
	    plot_id : 0         //initial value = 0 then plot_id
      });   
      controller
          .save()
          .then(result =>{
          console.log(result);
      })
      res.status(201).json({
          message : 'POST Request',
          controller: controller
      });  
});

router.get("/:ControllerID", (req, res, next) => {
    const id = req.params.ControllerID; //ObjectId("5cda4bf752c8b93d185b2d07"),
    Controller.findById(id)
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