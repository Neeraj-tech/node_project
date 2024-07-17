const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const User  = require('./../database/db.js');

exports.signup = async (req, res) => {
    let validate = false;
    let message = '';
    let feild = '';
    
    const invalidArgument = (err) => {
        validate = false;
        message = err.message;
        feild = err.feild;
    }
      
    await User.findOne({email: req.body.email}).then( dbres => !dbres ? validate = true : invalidArgument({feild: "email", message: 'email already exits'}) ).catch(err => console.log('err: ',err));
    
    if(validate){
        req.body.password.indexOf('@') !== -1 ? validate = true : invalidArgument({feild: "email", message: 'invalid email'});
    }

    if(validate){
        req.body.password.indexOf(' ') === -1 ? validate = true : invalidArgument({feild: "password", message: 'password must not contain space'});
    }

    if(validate){
        req.body.password.length >= 5 ? validate = true : invalidArgument({feild: "password", message: 'password must be at least 5 characters long'});
    }

    if(validate){
        var hashedPass = bcrypt.hashSync(req.body.password,bcrypt.genSaltSync(5))
        var user = new User({
        name : req.body.name,
        email: req.body.email,
        password: hashedPass
        })
        
        user.save()
        .then(function(dbres){
        res.status(201).send({message: dbres.name + " was added in to db"})
        })
        .catch(function(err){
        if(err.code == 11000){
            res.status(400).send({feild:'email', message: "email already exists"})
        }
        console.log('Error:', err)
        })
    }
    else{
        res.status(400).send({feild: feild, message: message})
    }
}

exports.signin = (req, res) => {
    User.findOne({email: req.body.email}).then(function(dbres){
        if(bcrypt.compareSync(req.body.password , dbres.password)){
            const token = jwt.sign({id: dbres._id},process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_EXPIRATION
                })
            res.status(200).send({message: "signin successful", token})
      }
      else{
        res.status(404).send({message: "incorrect credentials"})
      }
      }).catch((err) => {
        res.status(404).send({message: "incorrect credentials"})
      })
        
}