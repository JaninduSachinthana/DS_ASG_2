const express = require('express');
const router = express.Router();

//const User = require('./../modules/Register');

router.post('/add', (req, res) => {
    const user = new User({
        Name : req.body.name,
        Email : req.body.email,
        Password : req.body.password,
        Phone : req.body.phone,
        Age : req.body.age
    });

    user
    .save()
    .then(() => res.json("User Added Successfully..."))
    .catch((err) => res.json(err.message));
});

router.get('/view', (req, res) => {
    User
    .find()
    .then(response => res.json(response))
    .catch((err) => res.json(err.message));
});

router.post('/log', async(req, res) => {
    try{
        const user = await User.findOne({ Email: req.body.email }) ;

        if(!user) {
            return res.send({message: "Invalid Email"})
        }else if(user.Password != req.body.password) {
            return res.send({message: "Invalid Password "})
        }else{
            return res.send({ data: user._id, message: "logged in successfully" })
        }
    }catch(err){

    }
   // return res.send(user);
});

router.put('/edit/:id', (req, res) => {
    User
    .findById(req.params.id)
    .then(response => {
        response.Name = req.body.name,
        response.Email =  req.body.email,
        response.Password =  req.body.password,
        response.Phone =  req.body.phone,
        response.Age =  req.body.Age

        response
        .save()
        .then(() => res.json("User Updated Successfully..."))
        .catch((err) => res.json(err.message));
    })
    .catch((err) => res.json(err.message));
});

router.delete('/delete/:id', (req, res) => {
    User
    .findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted successfully..."))
    .catch((err) => resjson(err.message));
});

module.exports = router;