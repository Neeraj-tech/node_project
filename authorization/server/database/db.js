var mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)
  .then(function(res){ console.log("DB Connected") })
  .catch(function(err){ console.log("Error connecting DB", err) 
})

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = mongoose.model("users", new Schema({
    id : ObjectId,
    name : String,
    email: {type: String, unique: true},
    password: String
  }))

module.exports = User;