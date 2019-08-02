const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const User = require('../models/user');
/*
bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
  // Store hash in your password DB.
});
*/
router.post('/', (req, res, next) => {
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    const user = new User({
      _id: new mongoose.Types.ObjectId(),
      username: req.body.username,		//email
      password: hash,
      Firstname: req.body.Firstname,
      Lastname: req.body.Lastname,
      level: '1'		//admin or user
    });
    user
      .save()
      .then(result => {
        console.log(result);
      })
    res.status(201).json({
      //message: 'POST Request',
      //user: user
    });
  });
});

router.post("/login/", (req, res, next) => {
  const user = req.body.UserID;
  const pass = req.body.pass;
    User.find({ username: user})
      .exec()
      .then(doc => {
        // console.log("From database", doc);
        if (doc) {
          const hashedpass = doc[0].password;
          bcrypt.compare(pass,hashedpass, function (err,isMath) {
              if(isMath == false){
                res.status(200).json({status:false});
              }
              else{
                res.status(200).json({status:true});
              }
          });
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

router.put("/edit", (req, res, next) => {
  const user = req.body.UserID;
  const pass = req.body.pass;
  
});
// router.get("/:UserID", (req, res, next) => {
//   const id = req.params.UserID;
//   User.findById(id)
//     .exec()
//     .then(doc => {
//       console.log("From database", doc);
//       if (doc) {
//         res.status(200).json(doc);
//       } else {
//         res
//           .status(404)
//           .json({ message: "No valid entry found for provided ID" });
//       }
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({ error: err });
//     });
// });

// router.get("/login/:UserID,:Pass", (req, res, next) => {
//   const user = req.params.UserID;
//   const pass = req.params.Pass;
//     User.find({ username: user})
//       .exec()
//       .then(doc => {
//         // console.log("From database", doc);
//         if (doc) {
//           const hashedpass = doc[0].password;
//           bcrypt.compare(pass,hashedpass, function (err,isMath) {
//               if(isMath == false){
//                 res.status(200).json({status:false});
//               }
//               else{
//                 res.status(200).json({status:true});
//               }
//           });
//         } else {
//           res
//             .status(404)
//             .json({ message: "No valid entry found for provided ID" });
//         }
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json({ error: err });
//       });
// });



module.exports = router; 