const express = require('express');
const doctorRoutes = express.Router();

// Require Business model in our routes module

let Doctor = require('./models/doctor.model');

// Defined store route
doctorRoutes.route('/add').post(function (req, res) {
  let business = new Doctor(req.body);
  business.save()
    .then(business => {
      res.status(200).json({'business': 'business in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
doctorRoutes.route('/').get(function (req, res) {
    Doctor.find(function(err, businesses){
    if(err){
      console.log(err);
    }
    else {
      res.json(businesses);
    }
  });
});

// Defined edit route
doctorRoutes.route('/edit/:id').get(function (req, res) {
    
  let id = req.params.id;
  Doctor.findById(id, function (err, business){
      res.json(business);
  });
});

//  Defined update route
doctorRoutes.route('/update/:id').post(function (req, res) {
    Doctor.findById(req.params.id, function(err, business) {
    if (!business)
      res.status(404).send("data is not found");
    else {
        business.full_name = req.body.full_name;
        business.phone = req.body.phone;
        business.dateagain=req.body.dateagain;
        business.time=req.body.time;

        business.save().then(business => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
doctorRoutes.route('/delete/:id').get(function (req, res) {

    Doctor.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = doctorRoutes;