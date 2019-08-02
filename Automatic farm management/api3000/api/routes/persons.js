const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Person = require('../models/person');

router.post('/',(req,res,next) => {
    const person = new Person({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        gender: req.body.gender
    });
    person
        .save()
        .then(result =>{
        console.log(result);
    })
    res.status(201).json({
        message : 'POST Request',
        person: person
    });
});

router.get("/:PersonId", (req, res, next) => {
  const id = req.params.PersonId;
  Person.findById(id)
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